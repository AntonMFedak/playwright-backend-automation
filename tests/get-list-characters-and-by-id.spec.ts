import { test, expect } from '@playwright/test';
import { getToken } from './client/token-client';
import { deleteCharacter, getCharacterById, getListOfCharacters } from './client/character-client';

let token: string = '';
let characterIDs: number[] = [];

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
        console.log(listOfCharacters);

        expect(listOfCharacters).not.toBeNull();

        //Get the IDs of the characters to be used in the next test
        listOfCharacters.forEach((character: any) => {
            expect(character.id).not.toBeNull();
            characterIDs.push(character.id);
        });
    })

    test('Get Character by ID', async ({ request }) => {

        expect(characterIDs.length).toBeGreaterThan(0);

        for(const characterId of characterIDs) {
            const characterResponse = await getCharacterById(
                request,
                token,
                characterId
            );
            expect(characterResponse.status()).toBe(200);

            const character = await characterResponse.json();
            console.log(character);
            expect(character.id).toBe(characterId);
        }
    })

    test('Delete Character', async ({ request }) => {

        expect(characterIDs.length).toBeGreaterThan(0);

        const deleteResponse = await deleteCharacter(
            request,
            token,
            characterIDs[characterIDs.length - 1]
        );
        expect(deleteResponse.status()).toBe(204);
    })
});