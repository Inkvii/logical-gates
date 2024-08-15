"use server"
import "server-only"
import getServerSession from "auth/getServerSession"
import { sql } from "server/psql"
import { Routes } from "router/routes"
import { revalidatePath } from "next/cache"
import { urlTo } from "@/library/router/urlTo"

export async function deleteSchema(name: string): Promise<void> {
  console.log(`Deleting schema with name ${name}`)

  if (!name) throw new Error("Invalid input parameters")

  const session = await getServerSession()

  if (!session?.user?.email) throw new Error("Invalid session email")

  await sql`delete
            from logic_gate_schema
            where author = ${session.user.email}
              and name = ${name}`
  revalidatePath(urlTo({ route: Routes.private.user }).path)
}
