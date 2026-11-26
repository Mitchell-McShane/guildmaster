import { Adventurer } from "./Adventurer.js";
import { CLASS_ATTRIBUTES } from "./classAttributes.js";
import { FIRST_NAMES, LAST_NAMES } from "./adventurerNames.js";
import { randomElement } from "../utils/random.js";

export function generateAdventurer() {
    const firstName = randomElement(FIRST_NAMES);
    const lastName = randomElement(LAST_NAMES);

    const name = `${firstName} ${lastName}`;

    const classes = Object.keys(CLASS_ATTRIBUTES);
    const characterClass = randomElement(classes);

    return new Adventurer(name, characterClass);
}

export function generateAdventurers(amount) {
    const adventurers = [];

    for (let i = 0; i < amount; i++) {
        adventurers.push(generateAdventurer());
    }

    return adventurers;
}