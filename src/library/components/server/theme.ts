"use server"
import { cookies } from "next/headers"

const themeKey = "theme"

export async function toggleTheme() {
  const theme = cookies().get(themeKey)
  cookies().set(themeKey, theme?.value === "dark" ? "light" : "dark", { maxAge: 34560000 })
}

export async function getTheme() {
  return cookies().get(themeKey)?.value ?? "light"
}
