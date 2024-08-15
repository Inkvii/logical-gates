"use server"
import "server-only"
import { sql } from "server/psql"
import getServerSession from "auth/getServerSession"
import { Edge, Node } from "reactflow"

export async function saveLogicSchema(name: string, payload: { nodes: Node[]; edges: Edge[] }): Promise<void> {
  console.log(`Saving schema with name ${name}`)

  if (!name || !payload) throw new Error("Invalid input parameters")

  const session = await getServerSession()

  if (!session?.user?.email) throw new Error("Invalid session email")

  const result = await sql`insert into logic_gate_schema(author, name, payload, updated_timestamp)
                           values (${session.user.email}, ${name}, ${JSON.parse(JSON.stringify(payload))}, ${Date.now()})
                           on conflict(name) do update set payload           = ${JSON.parse(JSON.stringify(payload))},
                                                           updated_timestamp = ${Date.now()}`
  console.log(result)
}
