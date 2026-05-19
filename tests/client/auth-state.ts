import { APIRequestContext } from '@playwright/test';
import { getToken } from './token-client';
import { expectTokenBeString, expectTokenNotEmpty } from '../snippets/token-validators';
import { expectStatusCodeOk } from '../snippets/status-code-validators';

class AuthState {
    private token: string | null = null;

    async authentication(request: APIRequestContext): Promise<string> {
        // Check whether authentication data is loaded in environment variables
        console.log('Username check:', process.env.API_USERNAME ? 'LOADED' : 'MISSING');
        console.log('Password check:', process.env.API_PASSWORD ? 'LOADED' : 'MISSING');
        if (!this.token) {
            // Get the token from the API
            const responseToken = await getToken(request);

            // Status Check (Stops the 400 from proceeding)
            if (!responseToken.ok()) {
                const errorBody = await responseToken.text();
                throw new Error(`Login Failed: ${responseToken.status()} - ${errorBody}`);
            }

            const body = await responseToken.json();
            this.token = body.token; 

            await expectStatusCodeOk(responseToken);
            await expectTokenNotEmpty(this.token!);
            await expectTokenBeString(this.token!);
        }
        return this.token!;
    }

    clearToken(): null {
        this.token = null;
        return null;
    }
}


export const authState = new AuthState();