import { test, expect } from '@playwright/test';
import { deleteCharacter, getCharacterById, getListOfCharacters } from '../client/character-client';
import { authState } from '../client/auth-state';
import { expectStatusCodeOk } from '../snippets/status-code-validators';
import { Tags } from '../data/enums';
import { expectCompleteCharacterStatus, expectInProgressCharacterStatus, expectValidGetCharacterByIdSchema, expectValidGetListOfCharactersDataResponse } from '../snippets/character-validators';
import { existantCharactersList } from '../schemas/character-schema';

//let characterIDs: number[] = [];

test.describe.serial('Get List of Characters', () => {

    test('Get List of Characters', {tag: [Tags.GET_LIST, Tags.CHARACTER]}, async ({ request }) => {
        const token = await authState.authentication(request);
        const charactersResponse = await getListOfCharacters(
            request,
            token
        );

        await expectStatusCodeOk(charactersResponse);
        await expectValidGetListOfCharactersDataResponse(charactersResponse);

        //Get the IDs of the characters to be used in the next test
        /* const listOfCharacters = await charactersResponse.json();

        expect(listOfCharacters).not.toBeNull();

        listOfCharacters.forEach((character: any) => {
            expect(character.id).not.toBeNull();
            characterIDs.push(character.id);
        }); */
    })

    test('Get Character by ID', {tag: [Tags.GET_DETAIL, Tags.CHARACTER]}, async ({ request }) => {

        const existantCharacters: existantCharactersList[] = await JSON.parse(process.env.GLOBAL_CHARACTER_IDS as string);

        test.skip(existantCharacters.length === 0, 'No characters found to test Get Character by ID');
            
        const token = await authState.authentication(request);

        for(const characterId of /* characterIDs */ existantCharacters.map(character => character.id)) {
            const characterResponse = await getCharacterById(
                request,
                token,
                characterId
            );
            const characterDetail = await characterResponse.json();
            console.log(characterDetail);
            await expectStatusCodeOk(characterResponse);
            //await expectValidGetCharacterByIdSchema(characterResponse);
            //await expectInProgressCharacterStatus(characterResponse);
            //await expectCompleteCharacterStatus(characterResponse);
        }
    })
});