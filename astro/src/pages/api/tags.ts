import type { PlayerInfoResponse } from "./PlayerInfo";

export interface PlayerTag {
    label: string;
    color: string; // Tailwind classes
}

export function generatePlayerTags(playerData: PlayerInfoResponse): PlayerTag[] {
    const tags: PlayerTag[] = [];
    const stats = playerData.LifetimeStatistics;

    // PvP Tags
    if (playerData.KillFame > 5000000) {
        tags.push({ label: "Bloodthirsty", color: "bg-red-600/80 border border-red-400 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]" });
    } else if (playerData.KillFame < 10000 && (stats.PvE.Total > 1000000 || stats.Gathering.All.Total > 1000000)) {
        tags.push({ label: "Pacifist", color: "bg-green-600/80 border border-green-400 text-white shadow-[0_0_10px_rgba(22,163,74,0.5)]" });
    }

    // PvE Tags
    if (stats.PvE.Outlands > 10000000) {
        tags.push({ label: "Black Zone Legend", color: "bg-purple-600/80 border border-purple-400 text-white shadow-[0_0_10px_rgba(147,51,234,0.5)]" });
    }
    if (stats.PvE.Royal > stats.PvE.Outlands && stats.PvE.Royal > 1000000) {
        tags.push({ label: "Yellow Zone Warrior", color: "bg-yellow-500/80 border border-yellow-300 text-black shadow-[0_0_10px_rgba(234,179,8,0.5)] font-semibold" });
    }
    if (stats.PvE.Mists > 5000000) {
        tags.push({ label: "Mist Walker", color: "bg-indigo-500/80 border border-indigo-400 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]" });
    }
    if (stats.PvE.Hellgate > 5000000) {
        tags.push({ label: "Hellgate Fiend", color: "bg-orange-600/80 border border-orange-400 text-white shadow-[0_0_10px_rgba(234,88,12,0.5)]" });
    }
    if (stats.PvE.CorruptedDungeon > 5000000) {
        tags.push({ label: "Dungeon Diver", color: "bg-rose-600/80 border border-rose-400 text-white shadow-[0_0_10px_rgba(225,29,72,0.5)]" });
    }
    if (stats.PvE.Avalon > 5000000) {
        tags.push({ label: "Avalonian Initiate", color: "bg-cyan-600/80 border border-cyan-400 text-white shadow-[0_0_10px_rgba(8,145,178,0.5)]" });
    }

    // Gathering Tags
    if (stats.Gathering.All.Total > 10000000) {
        tags.push({ label: "Master Gatherer", color: "bg-emerald-600/80 border border-emerald-400 text-white shadow-[0_0_10px_rgba(5,150,105,0.5)]" });
    }
    if (stats.Gathering.Wood.Total > 5000000) {
        tags.push({ label: "Lumberjack", color: "bg-amber-700/80 border border-amber-500 text-white shadow-[0_0_10px_rgba(180,83,9,0.5)]" });
    }
    if (stats.Gathering.Ore.Total > 5000000) {
        tags.push({ label: "Miner", color: "bg-slate-600/80 border border-slate-400 text-white shadow-[0_0_10px_rgba(71,85,105,0.5)]" });
    }
    if (stats.Gathering.Fiber.Total > 5000000) {
        tags.push({ label: "Harvester", color: "bg-teal-600/80 border border-teal-400 text-white shadow-[0_0_10px_rgba(13,148,136,0.5)]" });
    }
    if (stats.Gathering.Hide.Total > 5000000) {
        tags.push({ label: "Skinner", color: "bg-orange-800/80 border border-orange-500 text-white shadow-[0_0_10px_rgba(154,52,18,0.5)]" });
    }
    if (stats.Gathering.Rock.Total > 5000000) {
        tags.push({ label: "Quarrier", color: "bg-stone-500/80 border border-stone-400 text-white shadow-[0_0_10px_rgba(120,113,108,0.5)]" });
    }

    // Crafting
    if (stats.Crafting.Total > 10000000) {
        tags.push({ label: "Master Crafter", color: "bg-blue-600/80 border border-blue-400 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]" });
    }

    // Farming
    if (stats.FarmingFame > 5000000) {
        tags.push({ label: "Farmer", color: "bg-lime-600/80 border border-lime-400 text-white shadow-[0_0_10px_rgba(101,163,13,0.5)]" });
    }

    return tags;
}
