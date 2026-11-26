import { test } from "node:test";
import assert from "node:assert/strict";

import { Guild } from "../game/guild/Guild.js";
import { Adventurer } from "../game/adventurers/Adventurer.js";

test("A new guild starts with 500 gold", () => {
    const guild = new Guild("The Silver Dawn");

    assert.equal(guild.gold, 500);
});

test("A guild can receive gold", () => {
    const guild = new Guild("The Silver Dawn");

    guild.addGold(100);

    assert.equal(guild.gold, 600);
});

test("A guild can spend gold", () => {
    const guild = new Guild("The Silver Dawn");

    const result = guild.spendGold(200);

    assert.equal(result, true);
    assert.equal(guild.gold, 300);
});

test("A guild cannot spend more gold than it owns", () => {
    const guild = new Guild("The Silver Dawn");

    const result = guild.spendGold(1000);

    assert.equal(result, false);
    assert.equal(guild.gold, 500);
});

test("A guild can recruit an adventurer", () => {
    const guild = new Guild("The Silver Dawn");
    const adventurer = new Adventurer("Aldric", "Warrior");

    const result = guild.recruitAdventurer(adventurer);

    assert.equal(result.success, true);
    assert.equal(guild.gold, 400);
    assert.equal(guild.adventurers.length, 1);
});

test("A guild cannot recruit the same adventurer twice", () => {
    const guild = new Guild("The Silver Dawn");
    const adventurer = new Adventurer("Aldric", "Warrior");

    guild.recruitAdventurer(adventurer);

    const result = guild.recruitAdventurer(adventurer);

    assert.equal(result.success, false);
    assert.equal(guild.gold, 400);
    assert.equal(guild.adventurers.length, 1);
});

test("A guild cannot recruit an adventurer it cannot afford", () => {
    const guild = new Guild("The Silver Dawn");
    const adventurer = new Adventurer("Lyra", "Mage");

    guild.spendGold(450);

    const result = guild.recruitAdventurer(adventurer);

    assert.equal(result.success, false);
    assert.equal(guild.gold, 50);
    assert.equal(guild.adventurers.length, 0);
});

test("A guild cannot recruit beyond its maximum capacity", () => {
    const guild = new Guild("The Silver Dawn");

    guild.addGold(1000);

    for (let i = 0; i < 5; i++) {
        guild.recruitAdventurer(
            new Adventurer(`Warrior ${i}`, "Warrior")
        );
    }

    const goldBefore = guild.gold;

    const result = guild.recruitAdventurer(
        new Adventurer("Extra Warrior", "Warrior")
    );

    assert.equal(result.success, false);
    assert.equal(guild.adventurers.length, 5);
    assert.equal(guild.gold, goldBefore);
});

test("Available guild slots are calculated correctly", () => {
    const guild = new Guild("The Silver Dawn");

    const adventurer1 = new Adventurer("Aldric", "Warrior");
    const adventurer2 = new Adventurer("Lyra", "Mage");

    guild.recruitAdventurer(adventurer1);
    guild.recruitAdventurer(adventurer2);

    assert.equal(guild.getAvailableSlots(), 3);
});