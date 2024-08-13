import { Route } from "@/library/router/types/Route"
import BreadcrumbItem from "@/library/breadcrumbs/fragment/BreadcrumbItem"
import BreadcrumbList from "@/library/breadcrumbs/fragment/BreadcrumbList"
import BreadcrumbCollapse from "@/library/breadcrumbs/fragment/BreadcrumbCollapse"

export type BreadcrumbRoute = Pick<Route, "path"> & { name: string; url?: string }

export type Props = {
  paths: BreadcrumbRoute[]
  maxLengthBeforeCollapse?: number
}
export default function Breadcrumbs({ maxLengthBeforeCollapse = 3, ...props }: Props) {
  if (props.paths.some((route) => route.path.includes(":") && route.url === null)) {
    throw new Error(
      `There are dynamic paths without parameters in Breadcrumbs component [${props.paths
        .filter((r) => r.path.includes(":") && r.url === null)
        .map((r) => r.name)}]. Please check all pages using this component that url is filled properly`
    )
  }

  if (props.paths.length > maxLengthBeforeCollapse) {
    const length = props.paths.length

    return (
      <BreadcrumbList>
        <BreadcrumbItem route={props.paths[0]} name={props.paths[0].name} />
        <BreadcrumbCollapse routes={props.paths.slice(1, length - 1)} />
        <BreadcrumbItem route={props.paths[length - 1]} name={props.paths[length - 1].name} />
      </BreadcrumbList>
    )
  }

  // it is expected that route url will never contain null as it passed error check
  return (
    <BreadcrumbList>
      {Object.values(props.paths).map((route) => (
        <BreadcrumbItem key={route.path} route={route} name={route.name} />
      ))}
    </BreadcrumbList>
  )
}
