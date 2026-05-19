import { CharacterClasses, Tags } from "./enums";

export const CLASS_TAG_MAP: Record<number, string> = {
    // Mapping CharacterClasses enum values to their corresponding Tags
    // Computed Property Name: Using the enum value as the key in the object
    [CharacterClasses.BARBARIAN]: Tags.BARBARIAN,
    [CharacterClasses.BARD]: Tags.BARD,
    [CharacterClasses.CLERIC]: Tags.CLERIC,
    [CharacterClasses.DRUID]: Tags.DRUID,
    [CharacterClasses.FIGHTER]: Tags.FIGHTER,
    [CharacterClasses.MONK]: Tags.MONK,
    [CharacterClasses.PALADIN]: Tags.PALADIN,
    [CharacterClasses.RANGER]: Tags.RANGER,
    [CharacterClasses.ROGUE]: Tags.ROGUE,
    [CharacterClasses.SORCERER]: Tags.SORCERER,
    [CharacterClasses.WARLOCK]: Tags.WARLOCK,
    [CharacterClasses.WIZARD]: Tags.WIZARD,
    0: Tags.UNKNOWN_CLASS // Default tag for unknown class IDs
};