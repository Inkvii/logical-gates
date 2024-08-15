import { Route } from "@/library/router/types/Route"
import { EmptyObject } from "@/library/router/types/EmptyObject"

const user: Route = {
  path: "/u",
  name: "User",
  permissions: [],
  description: "All things associated with user",
}

const userSchema: Route<EmptyObject, { schema: string }> = {
  path: "/u/:schema",
  name: "Logic gate schema",
  permissions: [],
  description: "Details of logic gate schema",
}

export const PrivateRoutes = {
  user,
  userSchema,
} as const
