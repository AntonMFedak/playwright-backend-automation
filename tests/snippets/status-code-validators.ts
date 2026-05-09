import { APIResponse, expect, test } from "@playwright/test";

/*********** SUCCESSFUL RESPONSES ***********/
export async function expectStatusCodeOk(response: APIResponse){
    await test.step('Validate status code is 200', async () => {
        expect(response.status()).toBe(200);
    });
}

export async function expectStatusCodeCreated(response: APIResponse){
    await test.step('Validate status code is 201', async () => {
        expect(response.status()).toBe(201);
    });
}

/*********** CLIENT ERROR RESPONSES ***********/
export async function expectStatusCodeBadRequest(response: APIResponse){
    await test.step('Validate status code is 400', async () => {
        expect(response.status()).toBe(400);
    });
}

export async function expectStatusCodeUnauthorized(response: APIResponse){
    await test.step('Validate status code is 401', async () => {
        expect(response.status()).toBe(401);
    });
}

export async function expectStatusCodeNOTFOUND(response: APIResponse){
    await test.step('Validate status code is 404', async () => {
        expect(response.status()).toBe(404);
    });
}

export async function expectStatusCodeMethodNotAllowed(response: APIResponse){
    await test.step('Validate status code is 405', async () => {
        expect(response.status()).toBe(405);
    });
}