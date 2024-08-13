import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export type Props = {
  className?: string
  children: ReactNode
}
export default function Card(props: Props) {
  return (
    <section
      className={twMerge(
        "bg-neutral-50 dark:bg-neutral-800",
        "border rounded-lg",
        "border-neutral-200 dark:border-neutral-700",
        props.className
      )}
      data-testid={"card"}
    >
      {props.children}
    </section>
  )
}
