import { APIRequestContext } from "@playwright/test";
import { CreateCharacterSchema } from "../schemas/character-schema";

export async function createCharacter(
    request: APIRequestContext,
    token: string,
    data: CreateCharacterSchema
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

export async function deleteCharacter(
    request: APIRequestContext,
    token: string,
    characterId: number
) {
    const response = await request.delete(`/api/characters/${characterId}`, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return response;
}