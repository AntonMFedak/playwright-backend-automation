import { APIRequestContext } from '@playwright/test';
import { getToken } from './token-client';
import { expectTokenBeString, expectTokenNotEmpty } from '../snippets/token-validators';

class AuthState {
    // Shared TOKEN variable
    private token: string | null = null;

    async authentication(request: APIRequestContext): Promise<string> {
        // Fetches TOKEN if it doesn't exist, otherwise returns the existing one
        if (!this.token) {
            const response = await getToken(request);
            this.token = await response.json().then(data => data.token);

            await expectTokenNotEmpty(this.token!);
            await expectTokenBeString(this.token!);
        }
        return this.token!;
    }

    // Clear TOKEN for Log Out
    clearToken(): null {
        //this.token = null;
        return this.token = null;
    }
}

export const authState = new AuthState();