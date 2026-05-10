import { APIRequestContext } from '@playwright/test';
import { getToken } from './token-client';
import { expectTokenBeString, expectTokenNotEmpty } from '../snippets/token-validators';

/* class AuthState {
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
} */

class AuthState {
    private token: string | null = null;
    // Track the ongoing login attempt
    private loginPromise: Promise<string> | null = null;

    async authentication(request: APIRequestContext): Promise<string> {
        // 1. If we already have a token, return it
        if (this.token) return this.token;

        // 2. If a login is already in progress, wait for that one
        if (this.loginPromise) return this.loginPromise;

        // 3. Start the login process
        this.loginPromise = (async () => {
            const response = await getToken(request);
            
            // Check if the response is actually successful before parsing
            if (!response.ok()) {
                throw new Error(`Login failed with status ${response.status()}: ${await response.text()}`);
            }

            const data = await response.json();
            const extractedToken = data.token;

            // Validate using your snippets
            await expectTokenNotEmpty(extractedToken);
            await expectTokenBeString(extractedToken);

            this.token = extractedToken;
            return extractedToken;
        })();

        return this.loginPromise;
    }

    clearToken(): null {
        this.token = null;
        this.loginPromise = null;
        return null;
    }
}

export const authState = new AuthState();