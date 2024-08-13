import { toggleTheme } from "@/library/server/theme"
import NavbarLinksContainer from "components/navbar/fragment/NavbarLinksContainer"
import { twMerge } from "tailwind-merge"
import NavbarUserSettings from "components/navbar/fragment/NavbarUserSettings"

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
      <div className={"[grid-area:logo]"}>Relegates</div>
      <NavbarLinksContainer className={"[grid-area:navbar]"} />
      <NavbarUserSettings toggleDarkMode={toggleTheme} className={"[grid-area:settings]"} />
    </nav>
  )
}
