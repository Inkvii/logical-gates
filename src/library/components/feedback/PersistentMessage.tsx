import { twMerge } from "tailwind-merge"
import { ReactNode } from "react"
import useTheme from "@/theme/feedback/useTheme"
import { HueVariable } from "@/theme/css/HueVariable"

type Props = {
  hue: HueVariable
  className?: string
  children: ReactNode
}

export default function PersistentMessage(props: Props) {
  const theme = useTheme(props.hue)

  return (
    <div className={twMerge(theme.theme)} data-testid={"persistent-message"}>
      <div className={twMerge(props.className)}>{props.children}</div>
      {theme.icon}
    </div>
  )
}
