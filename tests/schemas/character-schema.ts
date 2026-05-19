import { expect } from "@playwright/test";

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

export type CharacterListResponseSchema = {
    id: number,
    name: string,
    level: number,
    status: string
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

export type ResolveEquipmentPackageChoiceSchema = {
    optionLabel: string
}

export type CharacterEquipmentSchema = {
  "equipmentId": number,
  "quantity": number,
  "isEquipped": boolean
};

export type CharacterCurrencySchema = {
    cp: number,
    sp: number,
    ep: number,
    gp: number,
    pp: number
}

/* export type CharacterDetailsSchema = {
  "id": number,
  "name": string,
  "status": string,
  "classId": number,
  "speciesId": number,
  "backgroundId": number,
  "level": number,
  "missingFields": [],
  "pendingChoices": [],
  "skillProficiencies": string[],
  "abilityScores": {
    "base": {
      "STR": number,
      "DEX": number,
      "CON": number,
      "INT": number,
      "WIS": number,
      "CHA": number
    },
    "bonuses": {
      "STR": number,
      "DEX": number,
      "CON": number,
      "INT": number,
      "WIS": number,
      "CHA": number
    },
    "final": {
      "STR": number,
      "DEX": number,
      "CON": number,
      "INT": number,
      "WIS": number,
      "CHA": number
    }
  },
  "abilityModifiers": {
    "STR": number,
    "DEX": number,
    "CON": number,
    "INT": number,
    "WIS": number,
    "CHA": number
  },
  "armorClass": {
    "total": number,
    "base": number,
    "dexModifierApplied": number,
    "classBonus": number,
    "shieldBonus": number,
    "sources": [
      {
        "name": string,
        "type": string,
        "value": number
      }
    ]
  },
  "weaponAttacks": [
    {
      "equipmentId": number,
      "name": string,
      "attackType": string,
      "ability": string,
      "isProficient": boolean,
      "abilityModifier": number,
      "proficiencyBonus": number,
      "attackBonus": number,
      "damage": {
        "formula": string,
        "base": string,
        "modifier": number,
        "damageType": string
      },
      "properties": string[],
      "range": {
        "normal": number,
        "long": number,
        "unit": string
      }
    }
  ],
  "hitPoints": {
    "max": number,
    "current": number,
    "temporary": number,
    "hitDie": number,
    "conModifier": number,
    "calculation": string
  },
  "savingThrows": [
    {
      "ability": string,
      "isProficient": boolean,
      "abilityModifier": number,
      "proficiencyBonus": number,
      "bonus": number,
      "total": number,
      "sources": [
        {
          "type": string,
          "value": number
        }
      ]
    },
    {
      "ability": string,
      "isProficient": boolean,
      "abilityModifier": number,
      "proficiencyBonus": number,
      "bonus": number,
      "total": number,
      "sources": [
        {
          "type": string,
          "value": number
        }
      ]
    },
    {
      "ability": string,
      "isProficient": boolean,
      "abilityModifier": number,
      "proficiencyBonus": number,
      "bonus": number,
      "total": number,
      "sources": [
        {
          "type": string,
          "value": number
        }
      ]
    },
    {
      "ability": string,
      "isProficient": boolean,
      "abilityModifier": number,
      "proficiencyBonus": number,
      "bonus": number,
      "total": number,
      "sources": [
        {
          "type": string,
          "value": number
        },
        {
          "type": string,
          "value": number
        }
      ]
    },
    {
      "ability": string,
      "isProficient": boolean,
      "abilityModifier": number,
      "proficiencyBonus": number,
      "bonus": number,
      "total": number,
      "sources": [
        {
          "type": string,
          "value": number
        },
        {
          "type": string,
          "value": number
        }
      ]
    },
    {
      "ability": string,
      "isProficient": boolean,
      "abilityModifier": number,
      "proficiencyBonus": number,
      "bonus": number,
      "total": number,
      "sources": [
        {
          "type": string,
          "value": number
        }
      ]
    }
  ],
  "initiative": {
    "ability": string,
    "abilityModifier": number,
    "bonus": number,
    "total": number,
    "sources": [
      {
        "type": string,
        "ability": string,
        "value": number
      }
    ]
  },
  "passivePerception": {
    "skill": string,
    "ability": string,
    "base": number,
    "skillModifier": number,
    "bonus": number,
    "total": number,
    "sources": [
      {
        "type": string,
        "value": number
      },
      {
        "type": string,
        "value": number
      }
    ]
  },
  "movement": {
    "baseSpeed": number,
    "unit": string,
    "sources": [
      {
        "type": string,
        "name": string,
        "value": number
      }
    ]
  },
  "inventoryWeight": {
    "total": number,
    "unit": string,
    "sources": [
      {
        "equipmentId": number,
        "name": string,
        "quantity": number,
        "weight": number,
        "total": number
      }
    ]
  },
  "spellcastingSummary": {
    "canCastSpells": boolean,
    "ability": string,
    "abilityModifier": number,
    "spellSaveDc": number,
    "spellAttackBonus": number,
    "selectedSpellsCount": number,
    "selectedCantripsCount": number
  },
  "spellSlots": [
    {
      "level": number,
      "max": number,
      "used": number,
      "available": number
    }
  ],
  "selectedSpells": [
    {
      "id": number,
      "name": string,
      "slug": string,
      "level": number,
      "levelLabel": string,
      "school": string,
      "castingTime": string,
      "range": string,
      "components": string[],
      "duration": string,
      "selectionType": string
    }
  ],
  "currency": {
    "cp": number,
    "sp": number,
    "ep": number,
    "gp": number,
    "pp": number
  },
  "abilityScoreRules": {
    "source": string,
    "allowedChoices": string[],
    "bonusRules": {
      "mode": string,
      "options": [
        {
          "type": string,
          "choices": [
            {
              "bonus": number,
              "count": number,
            },
            {
              "bonus": number,
              "count": number,
              "mustBeDifferentFromBonus": number
            }
          ]
        },
        {
          "type": string,
          "basedOn": string
        }
      ]
    }
  },
  "classDetails": {
    "id": number,
    "name": string,
    "slug": string,
    "description": string,
    "role": string,
    "hitDie": number,
    "primaryAttributes": string[],
    "recommendedSkills": string[],
    "savingThrows": string[],
    "spellcasting": {
      "ability": string,
      "usesSpellbook": boolean,
      "canCastRituals": boolean,
      "selection": {
        "mode": string,
        "selectionType": string,
        "changesWhen": string,
        "cantrips": {
          "1": number
        },
        "preparedSpells": {
          "1": number
        },
        "spellbookSpells": {
          "1": number
        },
        "spellsAddedPerLevel": number
      }
    },
    "skillProficiencyChoices": {
      "choose": number,
      "options": string[]
    },
    "weaponProficiencies": string[],
    "armorTraining": [],
    "startingEquipmentOptions": [
      {
        "label": string,
        "items": string[]
      },
      {
        "label": string,
        "items": string[]
      }
    ],
    "equipmentOptions": string[],
    "subclasses": string[],
    "featuresByLevel": []
  },
  "speciesDetails": {
    "id": number,
    "name": string,
    "slug": string,
    "description": string,
    "creatureType": string,
    "size": string,
    "speed": number,
    "specialTraits": [
      {
        "name": string,
        "description": string
      }
    ],
    "subspecies": []
  },
  "backgroundDetails": {
    "id": number,
    "name": string,
    "slug": string,
    "description": string,
    "abilityScores": string[],
    "feat": string,
    "skillProficiencies": string[],
    "toolProficiency": string,
    "equipmentOptions": string[]
  }
} */

//Playwright Asymetric Matchers
//checks the data type instead of exact value
export const PW_ASYM_MATCH_characterDetailsSchema = {
  "id": expect.any(Number),
  "name": expect.any(String),
  "status": expect.any(String),
  "classId": expect.any(Number),
  "speciesId": expect.any(Number),
  "backgroundId": expect.any(Number),
  "level": expect.any(Number),
  "missingFields": expect.any(Array),
  "pendingChoices": expect.any(Array),
  "skillProficiencies": expect.any(Array),
  "abilityScores": {
    "base": {
      "STR": expect.any(Number),
      "DEX": expect.any(Number),
      "CON": expect.any(Number),
      "INT": expect.any(Number),
      "WIS": expect.any(Number),
      "CHA": expect.any(Number)
    },
    "bonuses": {
      "STR": expect.any(Number),
      "DEX": expect.any(Number),
      "CON": expect.any(Number),
      "INT": expect.any(Number),
      "WIS": expect.any(Number),
      "CHA": expect.any(Number)
    },
    "final": {
      "STR": expect.any(Number),
      "DEX": expect.any(Number),
      "CON": expect.any(Number),
      "INT": expect.any(Number),
      "WIS": expect.any(Number),
      "CHA": expect.any(Number)
    }
  },
  "abilityModifiers": {
    "STR": expect.any(Number),
    "DEX": expect.any(Number),
    "CON": expect.any(Number),
    "INT": expect.any(Number),
    "WIS": expect.any(Number),
    "CHA": expect.any(Number)
  },
  "armorClass": {
    "total": expect.any(Number),
    "base": expect.any(Number),
    "dexModifierApplied": expect.any(Number),
    "classBonus": expect.any(Number),
    "shieldBonus": expect.any(Number),
    "sources": expect.arrayContaining([
      expect.objectContaining({
        "name": expect.any(String),
        "type": expect.any(String),
        "value": expect.any(Number)
      })
    ])
  },
  "weaponAttacks": expect.arrayContaining([
    expect.objectContaining({
      "equipmentId": expect.any(Number),
      "name": expect.any(String),
      "attackType": expect.any(String),
      "ability": expect.any(String),
      "isProficient": expect.any(Boolean),
      "abilityModifier": expect.any(Number),
      "proficiencyBonus": expect.any(Number),
      "attackBonus": expect.any(Number),
      "damage": {
        "formula": expect.any(String),
        "base": expect.any(String),
        "modifier": expect.any(Number),
        "damageType": expect.any(String)
      },
      "properties": expect.any(Array),
      "range": {
        "normal": expect.any(Number),
        "long": expect.any(Number),
        "unit": expect.any(String)
      }
    })
  ]),
  "hitPoints": {
    "max": expect.any(Number),
    "current": expect.any(Number),
    "temporary": expect.any(Number),
    "hitDie": expect.any(Number),
    "conModifier": expect.any(Number),
    "calculation": expect.any(String)
  },
  "savingThrows": expect.arrayContaining([
    expect.objectContaining({
      "ability": expect.any(String),
      "isProficient": expect.any(Boolean),
      "abilityModifier": expect.any(Number),
      "proficiencyBonus": expect.any(Number),
      "bonus": expect.any(Number),
      "total": expect.any(Number),
      "sources": expect.any(Array)
    })
  ]),
  "initiative": {
    "ability": expect.any(String),
    "abilityModifier": expect.any(Number),
    "bonus": expect.any(Number),
    "total": expect.any(Number),
    "sources": expect.arrayContaining([
      expect.objectContaining({
        "type": expect.any(String),
        "ability": expect.any(String),
        "value": expect.any(Number)
      })
    ])
  },
  "passivePerception": {
    "skill": expect.any(String),
    "ability": expect.any(String),
    "base": expect.any(Number),
    "skillModifier": expect.any(Number),
    "bonus": expect.any(Number),
    "total": expect.any(Number),
    "sources": expect.any(Array)
  },
  "movement": {
    "baseSpeed": expect.any(Number),
    "unit": expect.any(String),
    "sources": expect.arrayContaining([
      expect.objectContaining({
        "type": expect.any(String),
        "name": expect.any(String),
        "value": expect.any(Number)
      })
    ])
  },
  "inventoryWeight": {
    "total": expect.any(Number),
    "unit": expect.any(String),
    "sources": expect.arrayContaining([
      expect.objectContaining({
        "equipmentId": expect.any(Number),
        "name": expect.any(String),
        "quantity": expect.any(Number),
        "weight": expect.any(Number),
        "total": expect.any(Number)
      })
    ])
  },
  "spellcastingSummary": {
    "canCastSpells": expect.any(Boolean),
    "ability": expect.any(String),
    "abilityModifier": expect.any(Number),
    "spellSaveDc": expect.any(Number),
    "spellAttackBonus": expect.any(Number),
    "selectedSpellsCount": expect.any(Number),
    "selectedCantripsCount": expect.any(Number)
  },
  "spellSlots": expect.any(Array),
  "selectedSpells": expect.any(Array),
  "currency": {
    "cp": expect.any(Number),
    "sp": expect.any(Number),
    "ep": expect.any(Number),
    "gp": expect.any(Number),
    "pp": expect.any(Number)
  },
  "abilityScoreRules": {
    "source": expect.any(String),
    "allowedChoices": expect.any(Array),
    "bonusRules": {
      "mode": expect.any(String),
      "options": expect.any(Array)
    }
  },
  "classDetails": {
    "id": expect.any(Number),
    "name": expect.any(String),
    "slug": expect.any(String),
    "description": expect.any(String),
    "role": expect.any(String),
    "hitDie": expect.any(Number),
    "primaryAttributes": expect.any(Array),
    "recommendedSkills": expect.any(Array),
    "savingThrows": expect.any(Array),
    "spellcasting": {
      "ability": expect.any(String),
      "usesSpellbook": expect.any(Boolean),
      "canCastRituals": expect.any(Boolean),
      "selection": {
        "mode": expect.any(String),
        "selectionType": expect.any(String),
        "changesWhen": expect.any(String),
        "cantrips": {
          "1": expect.any(Number)
        },
        "preparedSpells": {
          "1": expect.any(Number)
        },
        "spellbookSpells": {
          "1": expect.any(Number)
        },
        "spellsAddedPerLevel": expect.any(Number)
      }
    },
    "skillProficiencyChoices": {
      "choose": expect.any(Number),
      "options": expect.any(Array)
    },
    "weaponProficiencies": expect.any(Array),
    "armorTraining": expect.any(Array),
    "startingEquipmentOptions": expect.arrayContaining([
      expect.objectContaining({
        "label": expect.any(String),
        "items": expect.any(Array)
      })
    ]),
    "equipmentOptions": expect.any(Array),
    "subclasses": expect.any(Array),
    "featuresByLevel": expect.any(Array)
  },
  "speciesDetails": {
    "id": expect.any(Number),
    "name": expect.any(String),
    "slug": expect.any(String),
    "description": expect.any(String),
    "creatureType": expect.any(String),
    "size": expect.any(String),
    "speed": expect.any(Number),
    "specialTraits": expect.arrayContaining([
      expect.objectContaining({
        "name": expect.any(String),
        "description": expect.any(String)
      })
    ]),
    "subspecies": expect.any(Array)
  },
  "backgroundDetails": {
    "id": expect.any(Number),
    "name": expect.any(String),
    "slug": expect.any(String),
    "description": expect.any(String),
    "abilityScores": expect.any(Array),
    "feat": expect.any(String),
    "skillProficiencies": expect.any(Array),
    "toolProficiency": expect.any(String),
    "equipmentOptions": expect.any(Array)
  }
};