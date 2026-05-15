import { test, expect, APIResponse } from "@playwright/test";
import { CreateCharacterSchema } from "../schemas/character-schema";

// CREATE CHARACTER Type and Schema Validation
export async function expectValidCreateCharacterSchema(createCharacterResponse: APIResponse, createCharacterSchema: CreateCharacterSchema) {
    await test.step('Validate Character Type and Schema', async () => {
        const responseCreateCharacter = await createCharacterResponse.json();
        expect(responseCreateCharacter).toBeInstanceOf(Object);
        expect(typeof responseCreateCharacter.name).toBe(typeof createCharacterSchema.name);
        expect(typeof responseCreateCharacter.classId).toBe(typeof createCharacterSchema.classId);
        expect(typeof responseCreateCharacter.speciesId).toBe(typeof createCharacterSchema.speciesId);
        expect(typeof responseCreateCharacter.backgroundId).toBe(typeof createCharacterSchema.backgroundId);
    });
}

// CREATE CHARACTER Response Data Validation
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

export async function expectValidGetListOfCharactersSchema(getListOfCharactersResponse: APIResponse) {
    await test.step('Validate Get List of Characters response schema', async () => {
        const responseData = await getListOfCharactersResponse.json();
        expect(Array.isArray(responseData)).toBeTruthy();
        if (responseData.length > 0) {
            const character = responseData[0];
            expect(character).toHaveProperty('id');
            expect(character).toHaveProperty('name');
            expect(character).toHaveProperty('classId');
            expect(character).toHaveProperty('speciesId');
            expect(character).toHaveProperty('backgroundId');
        }
     });
}