import test from "@playwright/test";
import { authState } from "../client/auth-state";
import { existantCharactersList } from "../schemas/character-schema";
import { Tags } from "../data/enums";
import { resolveBackgroundEquipmentPackageChoice, resolveClassEquipmentPackageChoice, updateCharacterAbilityScores, updateCharacterCurrency, updateCharacterEquipment } from "../client/character-client";
import { expectStatusCodeCreated, expectStatusCodeOk } from "../snippets/status-code-validators";
import { CHARACTER_BACKGROUND_EQUIPMENT_PACKAGE_CHOICE_DATA, CHARACTER_CLASS_EQUIPMENT_PACKAGE_CHOICE_DATA, CHARACTER_CURRENCY_DATA, CHARACTER_EQUIPMENT_DATA, UPDATE_CHARACTER_ABILITY_SCORES_DATA } from "../data/character-data";

test('Update Character Ability Scores', {tag: [Tags.PUT, Tags.UPDATE, Tags.CHARACTER, Tags.ABILITY_SCORES]}, async ({ request }) => {
     const token = await authState.authentication(request);

     const existantCharacters: existantCharactersList[] = await JSON.parse(process.env.GLOBAL_CHARACTER_IDS as string);

     test.skip(existantCharacters.length === 0, 'No characters found to test Update Character');

     const characterId = existantCharacters[0].id;

     const updateAbilityScoresResponse = await updateCharacterAbilityScores(
         request,
         token,
         characterId,
         UPDATE_CHARACTER_ABILITY_SCORES_DATA
     );

     test.fail(updateAbilityScoresResponse.status() == 400, 'Failed to update character ability scores, invalid payload');

     await expectStatusCodeOk(updateAbilityScoresResponse);
});

test('Resolve Class Equipment Package Choice', {tag: [Tags.POST, Tags.UPDATE, Tags.CHARACTER, Tags.CLASS_EQUIPMENT_PACKAGE]}, async ({ request }) => {
    const token = await authState.authentication(request);

    const existantCharacters: existantCharactersList[] = await JSON.parse(process.env.GLOBAL_CHARACTER_IDS as string);

    test.skip(existantCharacters.length === 0, 'No characters found to test Resolve Class Equipment Package Choice');

    const characterId = existantCharacters[0].id;

    const resolveChoiceResponse = await resolveClassEquipmentPackageChoice(
        request,
        token,
        characterId,
        CHARACTER_CLASS_EQUIPMENT_PACKAGE_CHOICE_DATA
    );

    test.fail(resolveChoiceResponse.status() == 400, 'Failed to resolve class equipment package choice, invalid payload');

    await expectStatusCodeOk(resolveChoiceResponse);
})

test('Resolve Background Equipment Package Choice', {tag: [Tags.POST, Tags.UPDATE, Tags.CHARACTER, Tags.BACKGROUND_EQUIPMENT_PACKAGE]}, async ({ request }) => {
    const token = await authState.authentication(request);

    const existantCharacters: existantCharactersList[] = await JSON.parse(process.env.GLOBAL_CHARACTER_IDS as string);

    test.skip(existantCharacters.length === 0, 'No characters found to test Resolve Class Equipment Package Choice');

    const characterId = existantCharacters[0].id;

    const resolveChoiceResponse = await resolveBackgroundEquipmentPackageChoice(
        request,
        token,
        characterId,
        CHARACTER_BACKGROUND_EQUIPMENT_PACKAGE_CHOICE_DATA
    );

    test.fail(resolveChoiceResponse.status() == 400, 'Failed to resolve class equipment package choice, invalid payload');

    await expectStatusCodeOk(resolveChoiceResponse);
})

//** The following tests are skipped avoiding their execution on pushing to a repository. **/
//** These tests can be executed manually, during presentations. **/
test.skip('Update Character Equipment', {tag: [Tags.PUT, Tags.UPDATE, Tags.CHARACTER, Tags.EQUIPMENT]}, async ({ request }) => {
        const token = await authState.authentication(request);

        const existantCharacters: existantCharactersList[] = await JSON.parse(process.env.GLOBAL_CHARACTER_IDS as string);

        test.skip(existantCharacters.length === 0, 'No characters found to test Update Character');

        const characterId = existantCharacters[0].id;

        const updateEquipmentResponse = await updateCharacterEquipment(
            request,
            token,
            characterId,
            CHARACTER_EQUIPMENT_DATA
        );

        await expectStatusCodeCreated(updateEquipmentResponse);
})

test.skip('Update Character Currency', {tag: [Tags.PUT, Tags.UPDATE, Tags.CHARACTER, Tags.CURRENCY]}, async ({ request }) => {
    const token = await authState.authentication(request);

    const existantCharacters: existantCharactersList[] = await JSON.parse(process.env.GLOBAL_CHARACTER_IDS as string);

    test.skip(existantCharacters.length === 0, 'No characters found to test Update Character');

    const characterId = existantCharacters[0].id;

    const updateCurrencyResponse = await updateCharacterCurrency(
        request,
        token,
        characterId,
        CHARACTER_CURRENCY_DATA
    );

    await expectStatusCodeOk(updateCurrencyResponse);
})
