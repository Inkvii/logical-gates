import { ReactNode } from "react"
import Breadcrumbs, { BreadcrumbRoute } from "@/library/breadcrumbs/Breadcrumbs"
import { twMerge } from "tailwind-merge"

type NameInChildren = {
  name?: undefined
  children: ReactNode
}

type NameIncluded = {
  name: string
  children?: ReactNode
}

export type Props = (NameInChildren | NameIncluded) & {
  breadcrumbs?: BreadcrumbRoute[]
  className?: string
}
export default function Header(props: Props) {
  return (
    <header className={twMerge("pb-4", props.className)} data-testid={"main-header"}>
      {props.breadcrumbs && <Breadcrumbs paths={props.breadcrumbs} />}
      {props.name && <h1>{props.name}</h1>}
      {props.children}
    </header>
  )
}
