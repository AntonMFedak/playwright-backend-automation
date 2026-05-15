import { CreateCharacterSchema, UpdateCharacterAbilityScoresSchema } from "../schemas/character-schema";

/** INDIVIDUAL CHARACTER CREATION DATA **/
export const ROGUE_CHARACTER_DATA: CreateCharacterSchema = {
    name: "Chivorog Ikadef",
    classId: 9,
    speciesId: 8,
    backgroundId: 17
};

export const BARBARIAN_CHARACTER_DATA: CreateCharacterSchema = {
    name: "Anton The Ukrainian",
    classId: 1,
    speciesId: 8,
    backgroundId: 16
};

/** BULK CHARACTER CREATION DATA **/
export const CREATE_CHARACTER_DATA: CreateCharacterSchema[] = [
    {
        name: "Chivorog Ikadef",
        classId: 9,
        speciesId: 8,
        backgroundId: 17
    },
    {
        name: "Anton The Ukrainian",
        classId: 1,
        speciesId: 8,
        backgroundId: 16
    }
];

/** UPDATE CHARACTER ABILITY SCORES DATA **/
export const UPDATE_CHARACTER_ABILITY_SCORES_DATA: UpdateCharacterAbilityScoresSchema = {
    abilityScores: {
        base: {
            STR: 10,
            DEX: 15,
            CON: 10,
            INT: 10,
            WIS: 15,
            CHA: 10
        },
        bonuses: {
            STR: 0,
            DEX: 2,
            CON: 0,
            INT: 0,
            WIS: 1,
            CHA: 0
        }
    }
};