import { test } from "node:test";
import assert from "node:assert/strict";

import { getQuestRankConfig, getQuestTypeConfig, isValidDifficulty, isValidDuration, calculateQuestRewards, getAccessibleQuestRanks } from "../game/quests/questRules.js";

import {
    QUEST_TYPES
} from "../game/quests/questConstants.js";

test("Rank F returns the correct difficulty range", () => {
    const config = getQuestRankConfig("F");

    assert.equal(config.minDifficulty, 10);
    assert.equal(config.maxDifficulty, 30);
});

test("Invalid quest ranks are rejected", () => {
    assert.throws(
        () => getQuestRankConfig("Z"),
        /Invalid quest rank/
    );
});

test("Combat returns the correct strength weighting", () => {
    const config = getQuestTypeConfig(QUEST_TYPES.COMBAT);

    assert.equal(config.strength, 0.35);
});

test("Invalid quest types are rejected", () => {
    assert.throws(
        () => getQuestTypeConfig("Fishing"),
        /Invalid quest type/
    );
});

test("All quest type weightings total 100 percent", () => {
    for (const type of Object.values(QUEST_TYPES)) {
        const config = getQuestTypeConfig(type);

        const total = Object.values(config).reduce(
            (sum, value) => sum + value,
            0
        );

        assert.ok(Math.abs(total - 1) < 0.000001);
    }
});

test("Valid quest difficulty is accepted", () => {
    assert.equal(isValidDifficulty("F", 20), true);
});

test("Invalid quest difficulty is rejected", () => {
    assert.equal(isValidDifficulty("F", 50), false);
});

test("Valid quest duration is accepted", () => {
    assert.equal(isValidDuration("F", 2), true);
});

test("Invalid quest duration is rejected", () => {
    assert.equal(isValidDuration("F", 0), false);
});

test("Quest rewards scale correctly with rank", () => {
    const rewards = calculateQuestRewards("D", {
        gold: 120,
        experience: 80,
        reputation: 5
    });

    assert.deepEqual(rewards, {
        gold: 240,
        experience: 160,
        reputation: 10
    });
});

test("A rank F guild can only access rank F quests", () => {
    const ranks = getAccessibleQuestRanks("F");

    assert.deepEqual(ranks, ["F"]);
});

test("A rank C guild can access ranks F through C", () => {
    const ranks = getAccessibleQuestRanks("C");

    assert.deepEqual(ranks, ["F", "E", "D", "C"]);
});

test("An invalid guild rank throws an error", () => {
    assert.throws(
        () => getAccessibleQuestRanks("Z"),
        /Invalid guild rank/
    );
});