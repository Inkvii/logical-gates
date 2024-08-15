import { LogicGateSchema } from "server/repository/LogicGateSchema"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { urlTo } from "@/library/router/urlTo"
import { Routes } from "router/routes"

export default function ListItem(props: { schema: LogicGateSchema }) {
  return (
    <li
      className={twMerge(
        "primary",
        "border rounded",
        "dark:bg-hue-950",
        "dark:border-hue-800",
        "focusable focus-within:ring hover:ring transition-all"
      )}
    >
      <Link
        href={urlTo({ route: Routes.private.userSchema, pathParams: { schema: props.schema.name }, queryParams: {} })}
      >
        <pre className={"p-4"}>{JSON.stringify(props.schema, null, 2)}</pre>
      </Link>
    </li>
  )
}
