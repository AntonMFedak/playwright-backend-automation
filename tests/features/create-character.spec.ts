import { test } from '@playwright/test';
import { authState } from '../client/auth-state';
import { createCharacter, getListOfCharacters } from '../client/character-client';
import { BARBARIAN_CHARACTER_DATA, CREATE_CHARACTER_DATA, ROGUE_CHARACTER_DATA } from '../data/character-data';
import { expectStatusCodeCreated } from '../snippets/status-code-validators';
import { expectValidCreateCharacterDataResponse, expectValidCreateCharacterSchema } from '../snippets/character-validators';
import { Tags } from '../data/enums';
import { CLASS_TAG_MAP } from '../data/mappings';
import { CreateCharacterSchema } from '../schemas/character-schema';

//INDIVIDUAL CHARACTER CREATION TESTS
/* test.describe.configure({ mode: 'serial' });

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

}) */

/** OPTIMIZED BULK CHARACTER CREATION TESTS **/
// Iteration over CREATE_CHARACTER_DATA array to create multiple characters
// with a sigle test definition, using dynamic test titles and tags based on character class
// Test checks an existance of character with the same name and skips creation if true
test.describe('Bulk Character Creation', () => {
    test.describe.configure({ mode: 'serial' });

    for (const characterData of CREATE_CHARACTER_DATA) {
        
        // Map the class enum to the correct TestTag
        const classTag = CLASS_TAG_MAP[characterData.classId ? characterData.classId : 0];

        test(`Create Character: ${characterData.name}`, { tag: [Tags.CREATE, Tags.CHARACTER, classTag] }, async ({ request }) => {
            const token = await authState.authentication(request);

            // Check if character already exists
            const listOfCharactersResponse = await getListOfCharacters(request, token);
            const characters: CreateCharacterSchema[] = await listOfCharactersResponse.json();
            const alreadyExists = characters.some(character => character.name === characterData.name);

            test.skip(alreadyExists, `Character '${characterData.name}' already exists. Skipping creation.`);

            const characterResponse = await createCharacter(
                request,
                token,
                characterData,
            );

            await expectStatusCodeCreated(characterResponse);
            await expectValidCreateCharacterSchema(characterResponse, characterData);
            await expectValidCreateCharacterDataResponse(characterResponse, characterData);
        });
    }
});