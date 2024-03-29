import api from "@/api";
import { Player } from "@/types";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
} from "@/components/ui/table"

export default async function MatchPage({
    searchParams: { players: draft },
}: {
    searchParams: { players: string[] }
}) {
    const roster = await api.player.list();
    const players = draft
    .map(
      (name) =>
        roster.find((player) => player.name === name) ?? {
          name,
          matches: 0,
          score: 0,
        },
    )
    .sort((a, b) => b.score - a.score);
    const team1: Player[] = [];
    const team2: Player[] = [];

    for (const player of players ){
        if (team1.length > team2.length) {
            team2.push(player);           
        } else {
            team1.push(player);
        }
    }
    

    return (
        <Table className="border">
                <TableCaption>Equipo con pechera</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Equipo con pechera</TableHead>
                        <TableHead className="text-right">Equipo sin pechera</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({length: Math.max(team1.length, team2.length)}).map((_, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{team1[index]?.name ? `${team1[index].name} (${team1[index].score})`: "-"}</TableCell>
                            <TableCell className="text-right font-medium">{team2[index]?.name ? `${team2[index].name} (${team2[index].score})`: "-"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
        <TableRow>
          <TableCell>Total: {team1.reduce((total, player)=> total + player.score,0 )}</TableCell>
          <TableCell className="text-right">Total: {team2.reduce((total, player)=> total + player.score,0 )}</TableCell>
        </TableRow>
      </TableFooter>
            </Table>
    );
}