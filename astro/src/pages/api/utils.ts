export const formatNumberToLetter: (num: number) => string = (num: number) => {
    if (num >= 1000000000000) {
        return (num / 1000000000000).toFixed(2) + "t";
    }
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + "b";
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + "m";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(2) + "k";
    }
    return num.toString();
};
// Fame Stages for gathering
// Tier:Fame Amount 
const ORE = {
    2: 240,
    3: 2250,
    4: 30000,
    5: 140000,
    6: 513333,
    7: 1000000,
    8: 11666667,
}
const FIBER = {
    2: 240,
    3: 2250,
    4: 30000,
    5: 140000,
    6: 513333,
    7: 1000000,
    8: 11666667,
}
const HIDE = {
    2: 240,
    3: 2250,
    4: 30000,
    5: 140000,
    6: 513333,
    7: 1000000,
    8: 11666667,
}
const STONE = {
    2: 240,
    3: 2250,
    4: 30000,
    5: 140000,
    6: 513333,
    7: 1000000,
    8: 11666667,
}
const WOOD = {
    2: 240,
    3: 2250,
    4: 30000,
    5: 140000,
    6: 513333,
    7: 1000000,
    8: 11666667,
}
const FISHING = {
    2: 180,
    3: 1750,
    4: 23500,
    5: 105000,
    6: 390000,
    7: 750000,
    8: 8800000,
}
type Professions = "Fiber" | "Hide" | "Ore" | "Stone" | "Wood" | "Fishing";
// Get Current Gathering Tier by subtracting previous tiers:
const TierColors = {
    1: "#666a7e",
    2: "#846357",
    3: "#4e653d",
    4: "#2f5369",
    5: "#992b21",
    6: "#c16d2d",
    7: "#cfaf44",
    8: "#fff",
}
export type { Professions }
export default TierColors;

export const GetGatheringProgrssion = (FameAmount: number, Professtion: Professions): number => {
    const profMap = {
        Ore: ORE,
        Fiber: FIBER,
        Hide: HIDE,
        Stone: STONE,
        Wood: WOOD,
        Fishing: FISHING,
    };

    const thresholds = profMap[Professtion];
    if (!thresholds) return 1;

    if (FameAmount >= thresholds[8]) return 8;
    if (FameAmount >= thresholds[7]) return 7;
    if (FameAmount >= thresholds[6]) return 6;
    if (FameAmount >= thresholds[5]) return 5;
    if (FameAmount >= thresholds[4]) return 4;
    if (FameAmount >= thresholds[3]) return 3;
    if (FameAmount >= thresholds[2]) return 2;
    return 1;
}