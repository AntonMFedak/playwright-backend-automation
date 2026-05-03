import { test, expect } from '@playwright/test';

let token: string = '';
let characters: any[];

// This forces tests in this file to run one after another
test.describe.configure({ mode: 'serial' });

test('Character List', async ({ request }) => {

    // Identification is needed to access the API
    const tokenResponse = await request.post('/api/auth/token', {
        data: {
            username: 'antonf',
            password: 'K8r@N5t!W2m#C7qP'
        }
    });

    expect(tokenResponse.status()).toBe(200);
    token = (await tokenResponse.json()).token;
    //console.log(token);
});

// Get the list of characters with the token obtained in the previous test
test('Validate Character List', async ({request}) => {
    //console.log(token);
    const charactersResponse = await request.get('/api/characters', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    expect(charactersResponse.status()).toBe(200);
    characters = await charactersResponse.json();
    //console.log(characters);
});

// Test Character Object Values
test('Validate Character Values', async () => {
    expect(characters[0].id).toBe(1925);
    expect(characters[0].name).toBe('Chivorog Ikadef');
    expect(characters[0].level).toBe(1);
    expect(characters[0].status).toBe('complete');
});

  /* expect(responseBody[0].id).toBe(1);
  expect(responseBody[0].name).toBe('Strength');
  expect(responseBody[0].shortname).toBe('STR');
  expect(responseBody[0].description).toBe(
    'Measures physical power, carrying capacity, and effectiveness in brute-force actions such as lifting, pushing, and melee attacks.',
  );
  expect(responseBody[0].skills[0]).toBe('Athletics'); */