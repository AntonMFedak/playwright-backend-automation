import { test, expect } from '@playwright/test';
import { authState } from '../client/auth-state';
import { createCharacter } from '../client/character-client';
import { BARBARIAN_CHARACTER_DATA, ROGUE_CHARACTER_DATA } from '../data/create-character-data';
import { expectStatusCodeCreated } from '../snippets/status-code-validators';

test.describe.configure({ mode: 'serial' });

test('Create Rogue Character', {tag: ['@create', '@character', '@rogue']}, async ({ request }) => {
    const token = await authState.authentication(request);

    const characterResponse = await createCharacter(
        request,
        token,
        ROGUE_CHARACTER_DATA,
    );

    await expectStatusCodeCreated(characterResponse);
    
    const character = await characterResponse.json();

    expect(character.id).not.toBeNull();
    expect(character.name).toBe(ROGUE_CHARACTER_DATA.name);
    expect(character.classId).toBe(ROGUE_CHARACTER_DATA.classId);
    expect(character.speciesId).toBe(ROGUE_CHARACTER_DATA.speciesId);
    expect(character.backgroundId).toBe(ROGUE_CHARACTER_DATA.backgroundId);
})

test('Create Barbarian Character', {tag: ['@create', '@character', '@barbarian']}, async ({ request }) => {
    const token = await authState.authentication(request);

    const characterResponse = await createCharacter(
        request,
        token,
        BARBARIAN_CHARACTER_DATA,
    );

    await expectStatusCodeCreated(characterResponse);

    const character = await characterResponse.json();

    expect(character.id).not.toBeNull();
    expect(character.name).toBe(BARBARIAN_CHARACTER_DATA.name);
    expect(character.classId).toBe(BARBARIAN_CHARACTER_DATA.classId);
    expect(character.speciesId).toBe(BARBARIAN_CHARACTER_DATA.speciesId);
    expect(character.backgroundId).toBe(BARBARIAN_CHARACTER_DATA.backgroundId);
})
