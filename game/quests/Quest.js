import { randomUUID } from "node:crypto";
import { isValidDifficulty, isValidDuration } from "./questRules.js";

import {
    QUEST_TYPES,
    QUEST_RANKS,
    QUEST_STATUS
} from "./questConstants.js";

export class Quest {
    constructor({
        title,
        description,
        type,
        rank,
        difficulty,
        duration,
        rewards
    }) {
        if (!Object.values(QUEST_TYPES).includes(type)) {
            throw new Error(`Invalid quest type: ${type}`);
        }

        if (!QUEST_RANKS.includes(rank)) {
            throw new Error(`Invalid quest rank: ${rank}`);
        }

        if (!isValidDifficulty(rank, difficulty)) {
            throw new Error(`Invalid quest difficulty: ${difficulty}`);
        }

        if (!isValidDuration(rank, duration)) {
            throw new Error(`Invalid quest duration: ${duration}`);
        }

        if (
            !rewards ||
            !["gold", "experience", "reputation"].every(
                reward =>
                    Number.isInteger(rewards[reward]) &&
                    rewards[reward] >= 0
            )
        ) {
            throw new Error("Invalid quest rewards.");
        }

        this.id = randomUUID();
        this.title = title;
        this.description = description;
        this.type = type;
        this.rank = rank;
        this.difficulty = difficulty;
        this.duration = duration;
        this.rewards = { ...rewards };

        this.status = QUEST_STATUS.AVAILABLE;
        this.assignedParty = [];
        this.remainingDays = duration;
    }

    getSummary() {
        return {
            id: this.id,
            title: this.title,
            type: this.type,
            rank: this.rank,
            difficulty: this.difficulty,
            duration: this.duration,
            remainingDays: this.remainingDays,
            status: this.status
        };
    }

    getRewards() {
        return { ...this.rewards };
    }

    isAvailable() {
        return this.status === QUEST_STATUS.AVAILABLE;
    }

    getGoldPerDay() {
        return Math.round(this.rewards.gold / this.duration);
    }
}