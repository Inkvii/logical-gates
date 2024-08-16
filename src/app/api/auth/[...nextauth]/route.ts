import NextAuth, { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { Permission } from "auth/Permission"
import { sql } from "server/psql"

declare module "next-auth/jwt" {
  interface JWT {
    id: string
  }
}
declare module "next-auth" {
  interface Session {
    permissions: Permission[]
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Custom provider",
      credentials: {
        email: { type: "text", label: "Email" },
        password: { type: "password", label: "Password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials || !credentials.email || !credentials.password) return null

        const emailExists = await sql`select 1
                                      from author a
                                      where a.email = ${credentials.email}`
        if (!emailExists.length) {
          await sql`insert into author(email)
                    values (${credentials.email})`
        }

        return { id: credentials.email, name: "First Last", email: credentials.email }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 12 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session }) {
      session.permissions = []

      // Send properties to the client, like an access_token and user id from a provider.
      return session
    },
  },
  pages: {
    signIn: "/auth/login",
  },
}
export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
