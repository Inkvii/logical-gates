import RelegatesContainer from "app/u/[schema]/RelegatesContainer"
import { sql } from "server/psql"
import getServerSession from "auth/getServerSession"
import { ExtractRouteParams } from "@/library/router/types/ExtractRouteParams"
import { Routes } from "router/routes"
import { LogicGateSchema } from "server/repository/LogicGateSchema"

type Props = ExtractRouteParams<typeof Routes.private.userSchema>
export default async function PlaygroundPage(props: Props) {
  const schema = decodeURIComponent(props.params.schema)

  const session = await getServerSession()

  if (!session?.user?.email) throw new Error("Invalid session")

  const [result] = await sql<[Pick<LogicGateSchema, "payload">?]>`select payload
                                                                  from logic_gate_schema
                                                                  where author = ${session.user.email}
                                                                    and name = ${schema}
                                                                  limit 1`

  return (
    <main className={"grow flex flex-col"}>
      <RelegatesContainer nodes={result?.payload.nodes ?? []} edges={result?.payload.edges ?? []} />
    </main>
  )
}
