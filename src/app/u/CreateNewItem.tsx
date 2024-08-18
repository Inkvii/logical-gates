import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { urlTo } from "@/library/router/urlTo"
import { Routes } from "router/routes"
import { Plus } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"

export default function CreateNewItem() {
  return (
    <li
      className={twMerge(
        "success",
        "border border-neutral-200 dark:border-neutral-600 rounded",
        "bg-hue-50 dark:bg-hue-950",
        "border-hue-400 dark:border-hue-800",
        "focusable focus-within:ring hover:ring transition-all"
      )}
      data-testid={"new-item"}
    >
      <Link href={urlTo({ route: Routes.private.userSchema, pathParams: { schema: "new" }, queryParams: {} })}>
        <div className={"p-4 flex flex-col items-center justify-center h-full success"}>
          <Plus size={IconConstants.xl} className={"fill-hue-700 dark:fill-hue-200"} />
          <p className={"text-hue-700 dark:text-hue-200 font-semibold"}>Create new</p>
        </div>
      </Link>
    </li>
  )
}
