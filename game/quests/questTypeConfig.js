import { QUEST_TYPES } from "./questConstants.js";

export const QUEST_TYPE_CONFIG = {
    [QUEST_TYPES.COMBAT]: {
        strength: 0.35,
        defence: 0.25,
        intelligence: 0.10,
        agility: 0.10,
        vitality: 0.15,
        luck: 0.05
    },

    [QUEST_TYPES.GATHERING]: {
        strength: 0.10,
        defence: 0.05,
        intelligence: 0.20,
        agility: 0.25,
        vitality: 0.10,
        luck: 0.30
    },

    [QUEST_TYPES.ESCORT]: {
        strength: 0.20,
        defence: 0.30,
        intelligence: 0.05,
        agility: 0.10,
        vitality: 0.30,
        luck: 0.05
    },

    [QUEST_TYPES.EXPLORATION]: {
        strength: 0.05,
        defence: 0.05,
        intelligence: 0.35,
        agility: 0.25,
        vitality: 0.10,
        luck: 0.20
    }
};