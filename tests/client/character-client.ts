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

export async function getListOfCharacters(
    request: APIRequestContext,
    token: string
) {
    const response = await request.get('/api/characters', {
        headers: {Authorization: `Bearer ${token}`}
    });
    return response;
}

export async function getCharacterById(
    request: APIRequestContext,
    token: string,
    characterId: number
) {
    const response = await request.get(`/api/characters/${characterId}`, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return response;
}