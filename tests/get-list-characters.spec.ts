import { test, expect } from '@playwright/test';
import { getToken } from './client/token-client';
import { getListOfCharacters } from './client/character-client';

let token: string = '';

// This forces tests in this file to run one after another
//test.describe.configure({ mode: 'serial' });

test.describe.serial('Get List of Characters', () => {

    test.beforeAll(async ({ request }) => {
        // Identification is needed to access the API
        token = await getToken(request);
    });

    test('Get List of Characters', async ({ request }) => {
        const charactersResponse = await getListOfCharacters(
            request,
            token
        );

        expect(charactersResponse.status()).toBe(200);

        const listOfCharacters = await charactersResponse.json();

        expect(listOfCharacters).not.toBeNull();
    })
});