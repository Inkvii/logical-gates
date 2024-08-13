import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { BreadcrumbRoute } from "@/library/breadcrumbs/Breadcrumbs"
import BreadcrumbContainer from "@/library/breadcrumbs/fragment/BreadcrumbContainer"

export type Props = {
  route: BreadcrumbRoute
  truncate?: boolean
  name: string
}
export default function BreadcrumbItem(props: Props) {
  return (
    <BreadcrumbContainer>
      <Link
        href={props.route.url ?? props.route.path}
        className={twMerge("hover:underline focus-visible:ring focusable rounded")}
        data-testid={"breadcrumb-item"}
      >
        {props.route.name}
      </Link>
    </BreadcrumbContainer>
  )
}
