import "styles/globals.css"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { htmlLanguage, serverLocale } from "@/library/locale/locale"
import { getTheme } from "@/library/server/theme"
import getServerSession from "auth/getServerSession"
import LocaleProvider from "@/library/locale/LocaleProvider"
import SessionProvider from "components/auth/SessionProvider"
import { ThemeProvider } from "@/library/hooks/themeProvider"
import Navbar from "components/navbar/Navbar"
import { Toaster } from "@/library/ui/toaster"

const customFont = Inter({ subsets: ["latin"], variable: "--custom-font" })

export const metadata = {
  title: "Relegates",
  description: "A way to visualise boolean algebra",
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession()
  const theme = await getTheme()

  return (
    <html lang={htmlLanguage} className={twMerge(`${customFont.variable} font-sans`, theme === "dark" && "dark")}>
      <body>
        <LocaleProvider locale={serverLocale}>
          <SessionProvider session={session}>
            <ThemeProvider isDarkTheme={theme === "dark"}>
              <div className={"isolate min-w-[320px] min-h-dvh flex flex-col"}>
                <Navbar />
                {children}
              </div>
              <Toaster />
            </ThemeProvider>
          </SessionProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
