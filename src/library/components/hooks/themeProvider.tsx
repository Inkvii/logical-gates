"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type Context = {
  isDarkTheme: boolean
  setIsDarkTheme(value: boolean): void
}

export const ThemeProviderContext = createContext<Context>({
  isDarkTheme: false,
  setIsDarkTheme: () => {},
})

export function ThemeProvider(props: { isDarkTheme: boolean; children: ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(props.isDarkTheme)

  useEffect(() => {
    setIsDarkTheme(props.isDarkTheme)
  }, [props.isDarkTheme])

  return (
    <ThemeProviderContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {props.children}
    </ThemeProviderContext.Provider>
  )
}

export const useThemeProvider = () => useContext(ThemeProviderContext)
