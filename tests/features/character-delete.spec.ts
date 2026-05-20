import test from "@playwright/test";
import { authState } from "../client/auth-state";
import { deleteCharacter, deleteCharacterEquipment } from "../client/character-client";
import { CHARACTER_EQUIPMENT_DATA } from "../data/character-data";
import { existantCharactersList } from "../schemas/character-schema";
import { expectStatusCodeOk } from "../snippets/status-code-validators";
import { Tags } from "../data/enums";

test.skip('Delete Character Equipment', {tag: [Tags.DELETE, Tags.CHARACTER, Tags.EQUIPMENT]}, async ({ request }) => {
    const token = await authState.authentication(request);

    const existantCharacters: existantCharactersList[] = await JSON.parse(process.env.GLOBAL_CHARACTER_IDS as string);

    test.skip(existantCharacters.length === 0, 'No characters found to test Delete Character');

    const characterId = existantCharacters[0].id;

    const deleteEquipmentResponse = await deleteCharacterEquipment(
        request,
        token,
        characterId,
        CHARACTER_EQUIPMENT_DATA.equipmentId
    );

    await expectStatusCodeOk(deleteEquipmentResponse);
})

test('Delete Character', {tag: [Tags.DELETE, Tags.CHARACTER]}, async ({ request }) => {
    const token = await authState.authentication(request);

    const existantCharacters: existantCharactersList[] = JSON.parse(process.env.GLOBAL_CHARACTER_IDS as string);

    test.skip(existantCharacters.length === 0, 'No characters found to test Delete Character');

    const characterId = existantCharacters[2].id;
    const deleteResponse = await deleteCharacter(
        request,
        token,
        characterId
    );

    await expectStatusCodeOk(deleteResponse);

    /* for (const character of existantCharacters) {
        const deleteResponse = await deleteCharacter(
        request,
        token,
        character.id
    ); 

    await expectStatusCodeOk(deleteResponse);
    }*/
})