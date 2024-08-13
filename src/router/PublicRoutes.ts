import { Route } from "@/library/router/types/Route"

const home: Route = {
  path: "/",
  permissions: [],
  name: "Home page",
  description: "Landing page",
}

const login: Route<{ callbackUrl?: string; error?: string }> = {
  path: "/api/auth/signin",
  permissions: [],
  name: "Login page",
  description: "Authentication page for user to log in",
}

/**
 * Implementation of the route system
 */
export const PublicRoutes = {
  home,
  login,
} satisfies { [key: string]: Route }
