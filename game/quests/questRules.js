import { QUEST_RANK_CONFIG } from "./questRankConfig.js";
import { QUEST_TYPE_CONFIG } from "./questTypeConfig.js";
import { QUEST_RANKS } from "./questConstants.js";

export function getQuestRankConfig(rank) {
    if (!Object.hasOwn(QUEST_RANK_CONFIG, rank)) {
        throw new Error(`Invalid quest rank: ${rank}`);
    }

    return { ...QUEST_RANK_CONFIG[rank] };
}

export function getQuestTypeConfig(type) {
    if (!Object.hasOwn(QUEST_TYPE_CONFIG, type)) {
        throw new Error(`Invalid quest type: ${type}`);
    }

    return { ...QUEST_TYPE_CONFIG[type] };
}

export function isValidDifficulty(rank, difficulty) {
    const config = getQuestRankConfig(rank);

    return (
        Number.isInteger(difficulty) &&
        difficulty >= config.minDifficulty &&
        difficulty <= config.maxDifficulty
    );
}

export function isValidDuration(rank, duration) {
    const config = getQuestRankConfig(rank);

    return (
        Number.isInteger(duration) &&
        duration >= config.minDuration &&
        duration <= config.maxDuration
    );
}

export function calculateQuestRewards(rank, baseRewards) {
    const config = getQuestRankConfig(rank);
    const multiplier = config.rewardMultiplier;

    return {
        gold: Math.round(baseRewards.gold * multiplier),
        experience: Math.round(
            baseRewards.experience * multiplier
        ),
        reputation: Math.round(
            baseRewards.reputation * multiplier
        )
    };
}

export function getAccessibleQuestRanks(guildRank) {
    const rankIndex = QUEST_RANKS.indexOf(guildRank);

    if (rankIndex === -1) {
        throw new Error(`Invalid guild rank: ${guildRank}`);
    }

    return QUEST_RANKS.slice(0, rankIndex + 1);
}