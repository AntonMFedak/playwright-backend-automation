export type existantCharactersList = {
    id: number,
    name: string
};

export type CreateCharacterSchema = {
    name: string,
    classId?: number,
    speciesId?: number,
    backgroundId?: number
};

export type GetCharacterListResponseSchema = CreateCharacterSchema & {
    id: number
};

export type UpdateCharacterAbilityScoresSchema = {
    abilityScores: {
        base: {
            STR: number,
            DEX: number,
            CON: number,
            INT: number,
            WIS: number,
            CHA: number
        },
        bonuses: {
            STR: number,
            DEX: number,
            CON: number,
            INT: number,
            WIS: number,
            CHA: number
        }
    }
}