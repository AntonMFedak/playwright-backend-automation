import { APIRequestContext } from "@playwright/test";

export async function getAttributes(
    request: APIRequestContext
) {
    const response = await request.get('/api/attributes');
    return response;
}