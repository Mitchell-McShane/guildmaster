import { CLASS_ATTRIBUTES } from "./classAttributes.js";
import { randomUUID } from "node:crypto";
import { RECRUITMENT_COSTS } from "./recruitmentCosts.js";
import { CLASS_GROWTH } from "./classGrowth.js";

export class Adventurer {
    constructor(name, characterClass) {
        if (!Object.hasOwn(CLASS_ATTRIBUTES, characterClass)) {
            throw new Error(`Invalid character class: ${characterClass}`);
        }

        this.id = randomUUID();
        this.name = name;
        this.characterClass = characterClass;
        this.recruitmentCost = RECRUITMENT_COSTS[characterClass];
        this.level = 1;
        this.experience = 0;
        this.status = "Available";

        this.attributes = {
            ...CLASS_ATTRIBUTES[characterClass]
        };
    }

    getSummary() {
        return `${this.name} - Level ${this.level} ${this.characterClass}`;
    }

    getAttributes() {
        return { ...this.attributes };
    }

    getTotalAttributes() {
        return Object.values(this.attributes).reduce((total, value) => total + value, 0);
    }

    getRequiredExperience() {
        return this.level * 100;
    }

    levelUp() {
        this.level++;

        const growth = CLASS_GROWTH[this.characterClass];

        for (const attribute of Object.keys(growth)) {
            this.attributes[attribute] += growth[attribute];
        }
    }

    gainExperience(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            return 0;
        }

        this.experience += amount;

        let levelsGained = 0;

        while (this.experience >= this.getRequiredExperience()) {
            this.experience -= this.getRequiredExperience();

            this.levelUp();

            levelsGained++;
        }

        return levelsGained;
    }

    getExperiencePercentage() {
        return Math.round(
            (this.experience / this.getRequiredExperience()) * 100
        );
    }

    getExperienceRemaining() {
        return this.getRequiredExperience() - this.experience;
    }
}