import { test } from "node:test";
import assert from "node:assert/strict";

import { Adventurer } from "../game/adventurers/Adventurer.js";

import {
    generateAdventurer,
    generateAdventurers
} from "../game/adventurers/adventurerGenerator.js";

import {
    CLASS_ATTRIBUTES
} from "../game/adventurers/classAttributes.js";

test("The generator creates an Adventurer object", () => {
    const adventurer = generateAdventurer();

    assert.ok(adventurer instanceof Adventurer);
});

test("Generated adventurers have valid character classes", () => {
    const adventurers = generateAdventurers(20);

    for (const adventurer of adventurers) {
        assert.ok(
            Object.hasOwn(
                CLASS_ATTRIBUTES,
                adventurer.characterClass
            )
        );
    }
});

test("The generator creates the requested number of adventurers", () => {
    const adventurers = generateAdventurers(5);

    assert.equal(adventurers.length, 5);
});

test("The generator can return an empty array", () => {
    const adventurers = generateAdventurers(0);

    assert.deepEqual(adventurers, []);
});

test("Generated adventurers have unique IDs", () => {
    const adventurers = generateAdventurers(20);

    const ids = adventurers.map(adventurer => adventurer.id);

    const uniqueIds = new Set(ids);

    assert.equal(uniqueIds.size, adventurers.length);
});