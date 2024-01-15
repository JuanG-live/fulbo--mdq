import api from "@/api";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default async function BuilderPage() {
    const players = await api.player.list();

    async function createTeams(formData: FormData) {
        "user server";

        const players = formData.getAll("player");
        console.log(players);
    }
    return (
        <form action={createTeams} className="m-auto grid max-w-md gap-4">
            <Table className="border">
                <TableCaption>Tildar en caso de asistir</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead className="text-center"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {players.map(({ name }) => (
                        <TableRow key={name}>
                            <TableCell className="font-medium">{name}</TableCell>
                            <TableCell className="text-center"><Checkbox name="player" value={name} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button type="submit">Armar Equipos</Button>
        </form>
    )
}