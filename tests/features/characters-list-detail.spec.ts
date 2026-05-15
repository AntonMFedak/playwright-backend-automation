import { test, expect } from '@playwright/test';
import { deleteCharacter, getCharacterById, getListOfCharacters } from '../client/character-client';
import { authState } from '../client/auth-state';
import { expectStatusCodeOk } from '../snippets/status-code-validators';
import { Tags } from '../data/enums';

let characterIDs: number[] = [];

test.describe.serial('Get List of Characters', () => {

    test('Get List of Characters', {tag: [Tags.GET_LIST, Tags.CHARACTER]}, async ({ request }) => {
        const token = await authState.authentication(request);
        const charactersResponse = await getListOfCharacters(
            request,
            token
        );

        await expectStatusCodeOk(charactersResponse);

        const listOfCharacters = await charactersResponse.json();

        expect(listOfCharacters).not.toBeNull();

        //Get the IDs of the characters to be used in the next test
        listOfCharacters.forEach((character: any) => {
            expect(character.id).not.toBeNull();
            characterIDs.push(character.id);
        });
    })

    test('Get Character by ID', {tag: [Tags.GET_DETAIL, Tags.CHARACTER]}, async ({ request }) => {

        test.fail(characterIDs.length === 0, 'No characters found to test Get Character by ID');
            
        const token = await authState.authentication(request);

        expect(characterIDs.length).toBeGreaterThan(0);

        for(const characterId of characterIDs) {
            const characterResponse = await getCharacterById(
                request,
                token,
                characterId
            );
            await expectStatusCodeOk(characterResponse);

            const character = await characterResponse.json();
            console.log(character);
            expect(character.id).toBe(characterId);
        }
    })

    /* test('Delete Character', async ({ request }) => {

        expect(characterIDs.length).toBeGreaterThan(0);

        const deleteResponse = await deleteCharacter(
            request,
            token,
            characterIDs[characterIDs.length - 1]
        );
        expect(deleteResponse.status()).toBe(200);
    }) */
});