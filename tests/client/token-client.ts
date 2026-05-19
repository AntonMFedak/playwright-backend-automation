import { APIRequestContext, APIResponse } from "@playwright/test";

export async function getToken(request: APIRequestContext): Promise<APIResponse> {
    const tokenResponse = await request.post('/api/auth/token', {
        data: {
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD
        }
    });
    return tokenResponse;
}

export async function getTokenBadRequest(request: APIRequestContext): Promise<APIResponse> {
    const tokenResponse = await request.patch('/api/auth/token', {
        data: {
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD
        }
    });
    return tokenResponse;
}