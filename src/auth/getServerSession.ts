import "server-only"
import { authOptions } from "app/api/auth/[...nextauth]/route"
import { getServerSession as authGetSession } from "next-auth"
import { cache } from "react"

// authOptions must be passed as arguments to next-auth getServerSession so custom jwt and session callbacks use custom data
const getServerSession = cache(() => authGetSession(authOptions))

export default getServerSession
