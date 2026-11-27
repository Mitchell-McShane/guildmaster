import { test } from "node:test";
import assert from "node:assert/strict";

import { Quest } from "../game/quests/Quest.js";

import {
    QUEST_TYPES,
    QUEST_STATUS
} from "../game/quests/questConstants.js";

function createTestQuest() {
    return new Quest({
        title: "Goblin Trouble",
        description: "Eliminate nearby goblins.",
        type: QUEST_TYPES.COMBAT,
        rank: "F",
        difficulty: 20,
        duration: 1,
        rewards: {
            gold: 120,
            experience: 80,
            reputation: 5
        }
    });
}

test("A quest is created with the correct title", () => {
    const quest = createTestQuest();

    assert.equal(quest.title, "Goblin Trouble");
});

test("A new quest starts with Available status", () => {
    const quest = createTestQuest();

    assert.equal(quest.status, QUEST_STATUS.AVAILABLE);
});

test("A new quest has no assigned adventurers", () => {
    const quest = createTestQuest();

    assert.equal(quest.assignedParty.length, 0);
});

test("Remaining days initially match quest duration", () => {
    const quest = createTestQuest();

    assert.equal(quest.remainingDays, quest.duration);
});

test("A quest returns the correct rewards", () => {
    const quest = createTestQuest();

    assert.deepEqual(quest.getRewards(), {
        gold: 120,
        experience: 80,
        reputation: 5
    });
});

test("A new quest is available", () => {
    const quest = createTestQuest();

    assert.equal(quest.isAvailable(), true);
});

test("Gold per day is calculated correctly", () => {
    const quest = createTestQuest();

    assert.equal(quest.getGoldPerDay(), 120);
});