import { test, expect } from "@playwright/test";
import { CreateCharacterSchema } from "../schemas/create-character-schema";

export async function expectCharacterDraftCreated(character: CreateCharacterSchema){
    await test.step('Validate character draft creation', async () => {
        expect(character.name).not.toBeNull();
        expect(character.classId).not.toBeNull();
        expect(character.speciesId).not.toBeNull();
        expect(character.backgroundId).not.toBeNull();
    });
}