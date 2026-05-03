import { APIRequestContext } from "@playwright/test";

export type CreateCharacterData = {
    name: string,
    classId?: number,
    speciesId?: number,
    backgroundId?: number
};

export async function createCharacter(
    request: APIRequestContext,
    token: string,
    data: CreateCharacterData
) {
    const response = await request.post('/api/characters', {
        headers: {Authorization: `Bearer ${token}`},
        data,
    });
    return response;
}