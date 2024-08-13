import { ChatText, Info, Warning } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"
import { ReactNode } from "react"
import { HueVariable } from "@/theme/css/HueVariable"
import { twMerge } from "tailwind-merge"

const size = IconConstants.xl

export default function useTheme(type: HueVariable) {
  let icon: ReactNode

  switch (type) {
    case "primary":
      icon = <Info size={size} className={"shrink-0"} />
      break
    case "danger":
      icon = <Warning size={size} className={"shrink-0"} />
      break
    default:
      icon = <ChatText size={size} className={"shrink-0"} />
      break
  }

  return {
    theme: twMerge(type, "p-4 border rounded flex gap-4 justify-between items-center max-w-fit mx-auto", [
      "[&_:where(h1,h2,h3,h4,h5)]:[&_:where(*)]:text-hue-600 dark:[&_:where(h1,h2,h3,h4,h5)]:[&_:where(*)]:text-hue-50",
      "bg-hue-50 dark:bg-hue-900",
      "border-hue-300 dark:border-hue-800",
      "text-hue-900 dark:text-hue-100",
    ]),
    icon: icon,
  }
}
