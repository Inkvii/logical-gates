import "server-only"
import postgres from "postgres"

export const sql: postgres.Sql = postgres(process.env.POSTGRES_URL)
