import { APIRequestContext } from "@playwright/test";

export async function getToken(request: APIRequestContext) {
    const tokenResponse = await request.post('/api/auth/token', {
        data: {
            username: 'antonf',
            password: 'K8r@N5t!W2m#C7qP'
        }
    });
    const token = (await tokenResponse.json()).token;
    return token;
}