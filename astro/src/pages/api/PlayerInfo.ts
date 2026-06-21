// import character data from config.json in api folder
import config from "./config";


export const GET = async (request: Request) => {
    const url = new URL(request.url);
    const id = config.id;
    if (!id) {
        return new Response('No player id provided', { status: 400 });
    }
    // UFCMq6SdTg2FwJorYrSd7A
    const apiUrl = `https://gameinfo.albiononline.com/api/gameinfo/players/${id}`;
    const response: any = await fetch(apiUrl);
    const data: PlayerInfoResponse = await response.json();
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
}

// return type:
export interface Equipment {
    MainHand: string | null;
    OffHand: string | null;
    Head: string | null;
    Armor: string | null;
    Shoes: string | null;
    Bag: string | null;
    Cape: string | null;
    Mount: string | null;
    Potion: string | null;
    Food: string | null;
}

export interface Gathering {
    Fiber: {
        Total: number;
        Royal: number;
        Outlands: number;
        Avalon: number;
    };
    Hide: {
        Total: number;
        Royal: number;
        Outlands: number;
        Avalon: number;
    };
    Ore: {
        Total: number;
        Royal: number;
        Outlands: number;
        Avalon: number;
    };
    Rock: {
        Total: number;
        Royal: number;
        Outlands: number;
        Avalon: number;
    };
    Wood: {
        Total: number;
        Royal: number;
        Outlands: number;
        Avalon: number;
    };
    All: {
        Total: number;
        Royal: number;
        Outlands: number;
        Avalon: number;
    };
}

export interface Crafting {
    Total: number;
    Royal: number;
    Outlands: number;
    Avalon: number;
}

export interface PvE {
    Total: number;
    Royal: number;
    Outlands: number;
    Avalon: number;
    Hellgate: number;
    CorruptedDungeon: number;
    Mists: number;
}

export interface LifetimeStatistics {
    PvE: PvE;
    Gathering: Gathering;
    Crafting: Crafting;
    CrystalLeague: number;
    FishingFame: number;
    FarmingFame: number;
    Timestamp: string;
}

export interface PlayerInfoResponse {
    AverageItemPower: number;
    Equipment: Equipment;
    Inventory: any[];
    Name: string;
    Id: string;
    GuildName: string;
    GuildId: string;
    AllianceName: string;
    AllianceId: string;
    AllianceTag: string;
    Avatar: string;
    AvatarRing: string;
    DeathFame: number;
    KillFame: number;
    FameRatio: number;
    LifetimeStatistics: LifetimeStatistics;
}