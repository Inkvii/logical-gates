import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export type Props = {
  children: ReactNode
}
export default function BreadcrumbList(props: Props) {
  return (
    <div
      className={twMerge("*:flex *:items-center flex flex-wrap pb-2 sm:pb-1")}
      aria-label={"breadcrumbs navigation hierarchy"}
      data-testid={"breadcrumbs"}
    >
      {props.children}
    </div>
  )
}
