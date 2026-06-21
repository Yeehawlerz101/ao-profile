export const GET = async (request: Request) => {
    const url = new URL(request.url);
    const name = url.searchParams.get('name');
    if (!name) {
        return new Response('No player name provided', { status: 400 });
    }
    // yeehawlerz101 or guild names etc
    const apiUrl = `https://gameinfo.albiononline.com/api/gameinfo/search?q=${name}`;
    const response: Response = await fetch(apiUrl);
    const data: LookupResponse = await response.json();
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
}
// return type
interface LookupResponse {
    guilds: {
        Id: string;
        Name: string;
        AllianceId: string | null;
        AllianceName: string | null;
        KillFame: number | null;
        DeathFame: number | null;
    }[];
    players: {
        Id: string;
        Name: string;
        GuildId: string | null;
        GuildName: string | null;
        AllianceId: string | null;
        AllianceName: string | null;
        Avatar: string;
        AvatarRing: string;
        KillFame: number;
        DeathFame: number;
        FameRatio: number;
        totalKills: number | null;
        gvgKills: number | null;
        gvgWon: number | null;
    }[];
}