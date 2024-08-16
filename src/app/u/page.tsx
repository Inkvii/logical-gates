import getServerSession from "auth/getServerSession"
import { sql } from "server/psql"
import Header from "@/library/header/Header"
import { Routes } from "router/routes"
import { urlTo } from "@/library/router/urlTo"
import { LogicGateSchema } from "server/repository/LogicGateSchema"
import LogicGateSchemaGrid from "app/u/LogicGateSchemaGrid"

export default async function UserPage() {
  const session = await getServerSession()
  if (!session?.user?.email) throw new Error("Missing user session")

  const logicGateSchemas = await sql<LogicGateSchema[]>`
      select name, updated_timestamp as "updatedTimestamp"
      from logic_gate_schema lgs
      where author = ${session.user.email}
      order by 2 desc`

  return (
    <main className={"p-page-default"}>
      <Header
        breadcrumbs={[{ name: Routes.public.home.name, path: urlTo({ route: Routes.public.home }).path }]}
        name={`User ${session.user.email}`}
      />
      <div className={"space-y-2"}>
        <p>Select logic gate schema from the grid below or create new schema.</p>
        <LogicGateSchemaGrid schemas={logicGateSchemas} />
      </div>
    </main>
  )
}
