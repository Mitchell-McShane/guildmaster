import { test } from "node:test";
import assert from "node:assert/strict";

import {
    randomInt,
    randomElement
} from "../game/utils/random.js";

test("randomInt returns a number within the requested range", () => {
    for (let i = 0; i < 100; i++) {
        const result = randomInt(1, 6);

        assert.ok(result >= 1 && result <= 6);
        assert.ok(Number.isInteger(result));
    }
});

test("randomInt works when minimum and maximum are equal", () => {
    assert.equal(randomInt(5, 5), 5);
});

test("randomElement returns an element from the supplied array", () => {
    const classes = ["Warrior", "Mage", "Rogue", "Cleric"];

    for (let i = 0; i < 100; i++) {
        const result = randomElement(classes);

        assert.ok(classes.includes(result));
    }
});

test("randomElement works with a single-element array", () => {
    assert.equal(randomElement(["Warrior"]), "Warrior");
});