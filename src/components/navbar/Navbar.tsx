import { toggleTheme } from "@/library/server/theme"
import NavbarLinksContainer from "components/navbar/fragment/NavbarLinksContainer"
import { twMerge } from "tailwind-merge"
import NavbarUserSettings from "components/navbar/fragment/NavbarUserSettings"
import Link from "next/link"
import { Routes } from "router/routes"

export default function Navbar() {
  return (
    <nav
      className={twMerge(
        "navbar-grid gap-2 md:gap-4 items-center",
        "px-navbar-default pt-2 pb-1",
        "neutral dark:neutral",
        "bg-hue-50 dark:bg-hue-800",
        "border-b dark:border-hue-700"
      )}
    >
      <Link
        href={Routes.public.home.path}
        className={twMerge(
          "[grid-area:logo]",
          "text-3xl leading-tight font-semibold",
          "bg-gradient-to-r bg-clip-text",
          "from-primary-600 dark:from-primary-200",
          "to-primary-900 dark:to-primary-600",
          "text-transparent dark:text-transparent",
        )}
      >
        Relegates
      </Link>
      <NavbarLinksContainer className={"[grid-area:navbar]"} />
      <NavbarUserSettings toggleDarkMode={toggleTheme} className={"[grid-area:settings]"} />
    </nav>
  )
}
