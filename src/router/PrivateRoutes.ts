import { Route } from "@/library/router/types/Route"

const playground: Route = {
  path: "/playground",
  name: "Playground",
  permissions: [],
  description: "Playground for logic gates",
}

export const PrivateRoutes = {
  playground,
} as const
