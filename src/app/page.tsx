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

export default async function Home() {
  const matches = await api.match.list()
  console.log(matches);
  return( 
  <Table className = "border">
    <TableCaption>Jueves a las 21:00</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Fecha</TableHead>
        <TableHead>Team con Pecheras</TableHead>
        <TableHead>Team sin Pecheras</TableHead>
        <TableHead>Goles</TableHead>
        <TableHead className="text-right">Goles</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {matches.map(({ date, team1, team2, score1, score2 }) => (
        <TableRow key={date}>
          <TableCell className="font-medium">{date}</TableCell>
          <TableCell>{team1}</TableCell>
          <TableCell>{team2}</TableCell>
          <TableCell className={cn({ "font-bold text-green-500": score1 > score2 })}>{score1}</TableCell>
          <TableCell className={cn("text-right", { "font-bold text-green-500": score2 > score1 })}>{score2}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>)
}
