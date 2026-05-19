import { test, expect, APIResponse } from "@playwright/test";
import { CharacterListResponseSchema, CreateCharacterSchema, PW_ASYM_MATCH_characterDetailsSchema } from "../schemas/character-schema";
import { create } from "node:domain";

/** === CREATE CHARACTER === **/
// Type and Schema Validation
export async function expectValidCreateCharacterSchema(createCharacterResponse: APIResponse, createCharacterSchema: CreateCharacterSchema) {
    await test.step('Validate Character Type and Schema', async () => {
        const responseCreateCharacter = await createCharacterResponse.json();
        expect(responseCreateCharacter).toBeInstanceOf(Object);
        expect(typeof responseCreateCharacter.name).toBe(typeof createCharacterSchema.name);
        expect(typeof responseCreateCharacter.classId).toBe(typeof createCharacterSchema.classId);
        expect(typeof responseCreateCharacter.speciesId).toBe(typeof createCharacterSchema.speciesId);
        expect(typeof responseCreateCharacter.backgroundId).toBe(typeof createCharacterSchema.backgroundId);
        //expect(responseCreateCharacter).toEqual(createCharacterSchema);
    });
}

// Response Data Validation
export async function expectValidCreateCharacterDataResponse(createCharacterResponseData: APIResponse, createCharacterData: CreateCharacterSchema) {
    await test.step('Validate Create Character response data', async () => {
        const receivedCreateCharacterData = await createCharacterResponseData.json();
        expect(receivedCreateCharacterData.id).not.toBeNull();
        expect(receivedCreateCharacterData.name).toBe(createCharacterData.name);
        expect(receivedCreateCharacterData.classId).toBe(createCharacterData.classId);
        expect(receivedCreateCharacterData.speciesId).toBe(createCharacterData.speciesId);
        expect(receivedCreateCharacterData.backgroundId).toBe(createCharacterData.backgroundId);
    })
}

/** === GET LIST OF CHARACTERS === **/
// Response Data Validation
export async function expectValidGetListOfCharactersDataResponse(getListOfCharactersResponseData: APIResponse) {
    await test.step('Validate List of Characters response data', async () => {
        const responseListOfCharacters: CharacterListResponseSchema[] = await getListOfCharactersResponseData.json();
        expect(Array.isArray(responseListOfCharacters)).toBeTruthy();
        responseListOfCharacters.forEach((character: CharacterListResponseSchema) => {
            expect(character.id).not.toBeNull();
            expect(character.name).not.toBeNull();
            //expect(character.status).toBe("in_progress");
        });
     });
}

/** === GET CHARACTER DETAILS BY ID === **/
// Type and Schema Validation
export async function expectValidGetCharacterByIdSchema(getCharacterByIdResponse: APIResponse) {
    await test.step('Validate Get Character by ID Type and Schema', async () => {
        const responseGetCharacterById = await getCharacterByIdResponse.json();
        expect(responseGetCharacterById).toEqual(PW_ASYM_MATCH_characterDetailsSchema);
    });
}

/** === UPDATE CHARACTER ABILITY SCORES === **/
// Type and Schema Validation
export async function expectValidUpdateCharacterAbilityScoresSchema(updateCharacterAbilityScoresResponse: APIResponse) {
    await test.step('Validate Update Character Ability Scores Type and Schema', async () => {
        const responseUpdateCharacterAbilityScores = await updateCharacterAbilityScoresResponse.json();
        expect(responseUpdateCharacterAbilityScores).toEqual(PW_ASYM_MATCH_characterDetailsSchema);
    });
}

/** === UPDATE CHARACTER ABILITY SCORES === **/
// DRAFT Status Validation
export async function expectDraftCharacterStatus(character: any){
    await test.step('Validate Character Status is DRAFT', async () => {
        expect(character.status).toBe("draft");
    });
}

// IN-PROGRESS Status Validation
export async function expectInProgressCharacterStatus(character: any){
    await test.step('Validate Character Status is IN-PROGRESS', async () => {
        expect(character.status).toBe("in_progress");
     });
}

// COMPLETE Status Validation
export async function expectCompleteCharacterStatus(character: any){
    await test.step('Validate Character Status is COMPLETE', async () => {
        expect(character.status).toBe("complete");
     });
}