import { test } from "node:test";
import assert from "node:assert/strict";

import { Adventurer } from "../game/adventurers/Adventurer.js";

test("An adventurer starts at level 1", () => {
    const adventurer = new Adventurer("Aldric", "Warrior");

    assert.equal(adventurer.level, 1);
});

test("An adventurer starts with zero experience", () => {
    const adventurer = new Adventurer("Aldric", "Warrior");

    assert.equal(adventurer.experience, 0);
});

test("An adventurer starts with 60 total attributes", () => {
    const adventurer = new Adventurer("Aldric", "Warrior");

    assert.equal(adventurer.getTotalAttributes(), 60);
});

test("An adventurer can gain experience without levelling up", () => {
    const adventurer = new Adventurer("Kael", "Warrior");

    adventurer.gainExperience(50);

    assert.equal(adventurer.level, 1);
    assert.equal(adventurer.experience, 50);
});

test("An adventurer levels up when enough XP is gained", () => {
    const adventurer = new Adventurer("Kael", "Warrior");

    adventurer.gainExperience(100);

    assert.equal(adventurer.level, 2);
    assert.equal(adventurer.experience, 0);
});

test("An adventurer can gain multiple levels at once", () => {
    const adventurer = new Adventurer("Kael", "Warrior");

    const levelsGained = adventurer.gainExperience(350);

    assert.equal(levelsGained, 2);
    assert.equal(adventurer.level, 3);
    assert.equal(adventurer.experience, 50);
});

test("Levelling up increases adventurer attributes", () => {
    const adventurer = new Adventurer("Kael", "Warrior");

    adventurer.gainExperience(100);

    assert.equal(adventurer.getTotalAttributes(), 72);
    assert.equal(adventurer.attributes.strength, 18);
});

test("Negative experience rewards are rejected", () => {
    const adventurer = new Adventurer("Kael", "Warrior");

    const result = adventurer.gainExperience(-100);

    assert.equal(result, 0);
    assert.equal(adventurer.experience, 0);
    assert.equal(adventurer.level, 1);
});

test("Invalid character classes are rejected", () => {
    assert.throws(() => {
        new Adventurer("Kael", "Necromancer");
    }, /Invalid character class/);
});

test("Experience percentage is calculated correctly", () => {
    const adventurer = new Adventurer("Kael", "Warrior");

    adventurer.gainExperience(350);

    assert.equal(adventurer.getExperiencePercentage(), 17);
});

test("Remaining experience is calculated correctly", () => {
    const adventurer = new Adventurer("Kael", "Warrior");

    adventurer.gainExperience(350);

    assert.equal(adventurer.getExperienceRemaining(), 250);
});