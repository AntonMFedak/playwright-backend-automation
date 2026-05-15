import { CreateCharacterSchema } from "../schemas/character-schema";

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