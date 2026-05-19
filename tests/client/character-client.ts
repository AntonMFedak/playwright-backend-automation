import { APIRequestContext } from "@playwright/test";
import { CreateCharacterSchema, ResolveEquipmentPackageChoiceSchema, UpdateCharacterAbilityScoresSchema } from "../schemas/character-schema";
import { CHARACTER_EQUIPMENT_PACKAGE_CHOICE_DATA } from "../data/character-data";

/** CHARACTER CREATION / RETRIEVAL / DELETION **/
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

/** CHARACTER PACKAGE UPDATES **/
export async function updateCharacterAbilityScores(
    request: APIRequestContext,
    token: string,
    characterId: number,
    abilityScoresData: UpdateCharacterAbilityScoresSchema
) {
    const response = await request.put(`/api/characters/${characterId}/ability-scores`, {
        headers: {Authorization: `Bearer ${token}`},
        data: abilityScoresData,
    });
    return response;
}

export async function resolveClassEquipmentPackageChoice(
    request: APIRequestContext,
    token: string,
    characterId: number,
    optionLabel: ResolveEquipmentPackageChoiceSchema
){
    const response = await request.post(`/api/characters/${characterId}/equipment/class-choice`, {
        headers: {Authorization: `Bearer ${token}`},
        data: CHARACTER_EQUIPMENT_PACKAGE_CHOICE_DATA
    });
    return response;
}

export async function resolveBackgroundEquipmentPackageChoice(
    request: APIRequestContext,
    token: string,
    characterId: number,
    optionLabel: ResolveEquipmentPackageChoiceSchema
){
    const response = await request.post(`/api/characters/${characterId}/equipment/background-choice`, {
        headers: {Authorization: `Bearer ${token}`},
        data: CHARACTER_EQUIPMENT_PACKAGE_CHOICE_DATA
    });
    return response;
}

/** CHARACTER SPECIFIC UPDATES **/
export async function updateCharacterEquipment(
    request: APIRequestContext,
    token: string,
    characterId: number,
    equipmentData: any
){
    const response = await request.post(`/api/characters/${characterId}/equipment`, {
        headers: {Authorization: `Bearer ${token}`},
        data: equipmentData,
    });
    return response;
}

export async function deleteCharacterEquipment(
    request: APIRequestContext,
    token: string,
    characterId: number,
    equipmentId: number
){
    const response = await request.delete(`/api/characters/${characterId}/equipment/${equipmentId}`, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return response;
}

export async function updateCharacterCurrency(
    request: APIRequestContext,
    token: string,
    characterId: number,
    currencyData: any
){
    const response = await request.patch(`/api/characters/${characterId}`, {
        headers: {Authorization: `Bearer ${token}`},
        data: currencyData,
    });
    return response;
}