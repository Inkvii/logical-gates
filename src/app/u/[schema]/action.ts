"use server"
import "server-only"
import { sql } from "server/psql"

export async function saveLogicSchema(name: string, payload: string): Promise<void> {
  console.log(`Saving schema with name ${name}`)
  console.log("Payload: ", payload)

  const result = await sql`select *
                           from author a`
  console.log(result)
}
