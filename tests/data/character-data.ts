import {
    CharacterEquipmentSchema,
    CreateCharacterSchema,
    ResolveEquipmentPackageChoiceSchema,
    UpdateCharacterAbilityScoresSchema
} from "../schemas/character-schema";

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
        name: "MMA Fighter"
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
            WIS: 13,
            CHA: 14
        },
        bonuses: {
            STR: 0,
            DEX: 1,
            CON: 0,
            INT: 0,
            WIS: 2,
            CHA: 0
        }
    }
};

/** CHARACTER EQUIPMENT PACKAGE CHOICE DATA **/
export const CHARACTER_EQUIPMENT_PACKAGE_CHOICE_DATA: ResolveEquipmentPackageChoiceSchema = {
    optionLabel: "A"
};

/** CHARACTER INDIVIDUAL EQUIPMENT DATA **/
export const CHARACTER_EQUIPMENT_DATA: CharacterEquipmentSchema = 
    //rapier
    /* {
        equipmentId: 194,
        quantity: 1,
        isEquipped: true
    },
    //daggers
    {
        equipmentId: 14,
        quantity: 3,
        isEquipped: true
    },
    //shortbow
    {
        equipmentId: 174,
        quantity: 1,
        isEquipped: true
    },
    //studded leather armor
    {
        equipmentId: 3,
        quantity: 1,
        isEquipped: true
    },
    //thieves tools
    {
        equipmentId: 145,
        quantity: 1,
        isEquipped: true
    },
    //crowbar
    {
        equipmentId: 54,
        quantity: 1,
        isEquipped: true
    },*/
    //silk rope
    {
        equipmentId: 99,
        quantity: 1,
        isEquipped: true
    };

/** CHARACTER CURRENCY **/
export const CHARACTER_CURRENCY_DATA = {
    currency: {
        cp: 10,
        sp: 5,
        ep: 0,
        gp: 15,
        pp: 1
    }
};