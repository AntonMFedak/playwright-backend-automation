import { APIRequestContext } from '@playwright/test';
import { getToken } from './token-client';
import { expectTokenBeString, expectTokenNotEmpty } from '../snippets/token-validators';

class AuthState {
    private token: string | null = null;

    async authentication(request: APIRequestContext): Promise<string> {
        console.log('Username check:', process.env.API_USERNAME ? 'LOADED' : 'MISSING');
        console.log('Password check:', process.env.API_PASSWORD ? 'LOADED' : 'MISSING');
        if (!this.token) {
            // 1. Get the response exactly like your working test
            const response = await getToken(request);

            // 2. Immediate Status Check (Stops the 400 from proceeding)
            if (!response.ok()) {
                const errorBody = await response.text();
                throw new Error(`Login Failed: ${response.status()} - ${errorBody}`);
            }

            // 3. Parse and assign
            const body = await response.json();
            this.token = body.token; 

            // 4. Validate the assigned result
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