import { twMerge } from "tailwind-merge"
import { ReactNode } from "react"

export type Props = {
  className?: string
  children: ReactNode
}
export default function BreadcrumbContainer(props: Props) {
  return (
    <div
      className={twMerge(
        "after:[&:not(:last-child)]:content-['›'] after:[&:not(:last-child)]:px-2 last-of-type:font-bold",
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
