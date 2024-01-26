import api from "@/api";
import {cn} from "@/lib/utils";
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
        <Table className="m-auto max-w-md border">
            <TableCaption>¡Tabla de posiciones, Juan!</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Nombres</TableHead>
                    <TableHead className="text-center">Partidos</TableHead>
                    <TableHead className="text-center">Valoracion</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {players.map(({ name, score, matches }) => (
                    <TableRow key={name}>
                        <TableCell className="font-medium">{name}</TableCell>
                        <TableCell className="text-center">{matches}</TableCell>
                        <TableCell className={cn("text-center", {"font-bold text-green-500": score > 0},{"font-bold text-red-500": score< 0})}>{score}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}