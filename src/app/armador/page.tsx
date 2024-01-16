import api from "@/api";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input";

export default async function BuilderPage() {
    const players = await api.player.list();

    async function createTeams(formData: FormData) {
        "use server";

        const players = formData.getAll("player");

        const searchParams = new URLSearchParams();

        for (const player of players) {
            searchParams.append("players", player as string);
        }

        redirect(`/armador/partido?${searchParams.toString()}`);
    }
    return (
        <section className="m-auto grid max-w-md gap-4">
            <form className="flex gap-4">
                <Input name="player" placeholder="Nombre de jugador" />
                <Button variant="secondary">Juega bonito, Sid</Button>
            </form>
            <form action={createTeams} className="grid gap-4" >
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
        </section>
    )
}