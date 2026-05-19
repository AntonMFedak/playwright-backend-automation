import { test as setup } from '@playwright/test';
import { authState } from './client/auth-state';
import { getListOfCharacters } from './client/character-client';
import { CharacterListResponseSchema } from './schemas/character-schema';
import { Tags } from './data/enums';
import { expectTokenBeString, expectTokenNotEmpty } from './snippets/token-validators';
import { expectStatusCodeOk } from './snippets/status-code-validators';

setup('Fetch and save character IDs to ENV', {tag: Tags.GLOBAL_SETUP}, async ({ request }) => {
    const token = await authState.authentication(request);
    await expectTokenNotEmpty(token);
    await expectTokenBeString(token);

    const characterListResponse = await getListOfCharacters(request, token);
    await expectStatusCodeOk(characterListResponse);

    const characterList: CharacterListResponseSchema[] = await characterListResponse.json();

    const characterIds = characterList.map(character => ({id: character.id, name: character.name}));
    console.log('Fetched Character IDs:', characterIds);

    // Environment variables MUST be strings
    process.env.GLOBAL_CHARACTER_IDS = JSON.stringify(characterIds);
});