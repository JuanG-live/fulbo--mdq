import {Button} from "@/components/ui/button";
import api from "@/api";

export default async function Home() {
  const matches = await api.match.list()

  return <div>
    {JSON.stringify(matches, null, 2)}
  </div>
}
