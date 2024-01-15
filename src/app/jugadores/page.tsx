import api from "@/api";
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default async function PlayersPage() {
    const players = await api.player.list();

    return (
        <Table className="m-auto max-w-md">
            <TableCaption>¡Tabla de posiciones, Juan!</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Nombres</TableHead>
                    <TableHead>Partidos</TableHead>
                    <TableHead className="text-right">Valoracion</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {players.map(({ name, score, matches }) => (
                    <TableRow key={name}>
                        <TableCell className="font-medium">{name}</TableCell>
                        <TableCell>{matches}</TableCell>
                        <TableCell className="text-right">{score}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}