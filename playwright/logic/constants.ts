import { LoginDetails } from "logic/LoginDetails"

export const constants = {
  url: "http://localhost:3000",
  superadmin: {
    email: "admin",
    password: "test",
  } satisfies LoginDetails,
} as const
