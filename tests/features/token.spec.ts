import { APIResponse, test } from "@playwright/test";
import { getToken, getTokenBadRequest } from "../client/token-client";
import { expectTokenBeString, expectTokenNotEmpty, expectTokenToBeNull } from "../snippets/token-validators";
import { authState } from "../client/auth-state";
import { expectStatusCodeMethodNotAllowed, expectStatusCodeOk } from "../snippets/status-code-validators";

test('Retrieve and validate token with POST method', {tag: ['@token', '@post']}, async ({ request }) => {
    //let token: string | null = await getToken(request);
    let tokenResponse: APIResponse = await getToken(request);
    let token: string | null = await tokenResponse.json().then(data => data.token);

    await expectStatusCodeOk(tokenResponse);
    await expectTokenNotEmpty(token!);
    await expectTokenBeString(token!);

    //Simulation Log Out
    token = authState.clearToken();
    await expectTokenToBeNull(token);

});

test('Retrieve token with PATCH method, expect 405 code and null token', {tag: ['@token', '@patch']}, async ({ request }) => {
    const tokenResponse: APIResponse = await getTokenBadRequest(request);
    console.log('Token Response Status:', tokenResponse.status());
    await expectStatusCodeMethodNotAllowed(tokenResponse);
});
