export {}

type StringBoolean = "false" | "true"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_VERSION: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      POSTGRES_URL: string
    }
  }
}
