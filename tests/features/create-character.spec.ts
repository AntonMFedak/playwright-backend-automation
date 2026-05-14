import { test, expect } from '@playwright/test';
import { authState } from '../client/auth-state';
import { createCharacter } from '../client/character-client';
import { BARBARIAN_CHARACTER_DATA, ROGUE_CHARACTER_DATA } from '../data/character-data';
import { expectStatusCodeCreated } from '../snippets/status-code-validators';
import { expectValidCreateCharacterDataResponse, expectValidCreateCharacterSchema } from '../snippets/character-validators';

test.describe.configure({ mode: 'serial' });

test('Create Rogue Character', {tag: ['@create', '@character', '@rogue']}, async ({ request }) => {
    const token = await authState.authentication(request);

    const characterResponse = await createCharacter(
        request,
        token,
        ROGUE_CHARACTER_DATA,
    );

    await expectStatusCodeCreated(characterResponse);
    await expectValidCreateCharacterSchema(characterResponse, ROGUE_CHARACTER_DATA);
    await expectValidCreateCharacterDataResponse(characterResponse, ROGUE_CHARACTER_DATA);

})

test('Create Barbarian Character', {tag: ['@create', '@character', '@barbarian']}, async ({ request }) => {
    const token = await authState.authentication(request);

    const characterResponse = await createCharacter(
        request,
        token,
        BARBARIAN_CHARACTER_DATA,
    );

    await expectStatusCodeCreated(characterResponse);
    await expectValidCreateCharacterSchema(characterResponse, BARBARIAN_CHARACTER_DATA);
    await expectValidCreateCharacterDataResponse(characterResponse, BARBARIAN_CHARACTER_DATA);

})