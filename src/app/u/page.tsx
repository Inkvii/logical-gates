import getServerSession from "auth/getServerSession"
import { sql } from "server/psql"
import Header from "@/library/header/Header"
import { Routes } from "router/routes"
import { urlTo } from "@/library/router/urlTo"
import { LogicGateSchema } from "server/repository/LogicGateSchema"
import { ExtractRouteParams } from "@/library/router/types/ExtractRouteParams"
import LogicGateSchemaList from "app/u/LogicGateSchemaList"

export type Props = ExtractRouteParams<typeof Routes.private.user>
export default async function UserPage(props: Props) {
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

      <LogicGateSchemaList schemas={logicGateSchemas} />
    </main>
  )
}
