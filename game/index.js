import { Guild } from "./guild/Guild.js";
import {
    generateAdventurers
} from "./adventurers/adventurerGenerator.js";

console.log("==============================");
console.log("       GUILDMASTER v0.1       ");
console.log("==============================");

const guild = new Guild("The Silver Dawn");

console.log("\n--- Guild Information ---");
console.table(guild.getSummary());

console.log("\n--- Recruitment Tavern ---");

const recruits = generateAdventurers(5);

for (const recruit of recruits) {
    console.log(
        `${recruit.getSummary()} | ${recruit.recruitmentCost} gold`
    );
}