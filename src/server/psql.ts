import "server-only"
import postgres from "postgres"

if (!process.env.POSTGRES_URL) throw new Error("POSTGRES_URL environmental property must be filled")

export const sql: postgres.Sql = postgres(process.env.POSTGRES_URL)
