import { twMerge } from "tailwind-merge"
import { ReactNode } from "react"

export type Props = {
  className?: string
  children: ReactNode
}
export default function Affix(props: Props) {
  return (
    <div
      className={twMerge(
        "flex items-center px-4",
        "bg-neutral-200 dark:bg-neutral-900",
        "select-none",
        "overflow-hidden",
        props.className
      )}
      data-testid={"affix"}
    >
      {props.children}
    </div>
  )
}
