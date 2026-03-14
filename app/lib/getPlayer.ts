import { Player } from "@/types/player"

export async function getPlayer(id: string): Promise<Player> {

  const res = await fetch(`http://localhost:5000/api/players/${id}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch player")
  }

  return res.json()
}