import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export type Props = {
  className?: string
  children: ReactNode
}
export default function CardGrid(props: Props) {
  return (
    <div className={twMerge("grid grid-cols-1 sm:grid-fit-30 gap-4", props.className)} data-testid={"card-grid"}>
      {props.children}
    </div>
  )
}
