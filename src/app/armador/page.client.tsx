"use client";

import { Player } from "@/types";
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
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function BuilderPageClient({
    players: initialPlayers
    , onCreate
}: {
    players: Player[];
    onCreate: (formData: FormData) => void
}) {
    const [players, setPlayers] = useState<Player[]>(initialPlayers);

    function handleAddPlayer(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        setPlayers((players) =>
            players.concat({ name: formData.get("player") as string, score: 0, matches: 0 }),
        );
        event.currentTarget.reset();
    }

    return (
        <section className="m-auto grid max-w-md gap-4">
            <form className="flex gap-4" onSubmit={handleAddPlayer}>
                <Input name="player" placeholder="Nombre de jugador" />
                <Button type="submit" variant="secondary">Juega bonito, Sid</Button>
            </form>
            <form action={onCreate} className="grid gap-4" >
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
    );
}