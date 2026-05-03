import { test, expect } from '@playwright/test';
import { getToken } from './client/token-client';
import { createCharacter } from './client/character-client';
import { BARBARIAN_CHARACTER_DATA } from './data/create-character-data';

let token: string = '';

// This forces tests in this file to run one after another
//test.describe.configure({ mode: 'serial' });

test.describe.serial('Create Character', () => {

    test.beforeAll(async ({ request }) => {
        // Identification is needed to access the API
        token = await getToken(request);
    });

    test('Create Barbarian Character Draft', async ({ request }) => {
        const characterResponse = await createCharacter(
            request,
            token,
            BARBARIAN_CHARACTER_DATA,
        );
        const character = await characterResponse.json();

        expect(character.id).not.toBeNull();
        expect(character.name).toBe(BARBARIAN_CHARACTER_DATA.name);
        expect(character.classId).toBe(BARBARIAN_CHARACTER_DATA.classId);
        expect(character.speciesId).toBe(BARBARIAN_CHARACTER_DATA.speciesId);
        expect(character.backgroundId).toBe(BARBARIAN_CHARACTER_DATA.backgroundId);
    })
});