import { twMerge } from "tailwind-merge"
import Generator from "components/sidepanel/items/Generator"
import And from "components/sidepanel/items/And"
import Or from "components/sidepanel/items/Or"
import Inverter from "components/sidepanel/items/Inverter"
import OutputResult from "components/sidepanel/items/OutputResult"
import Link from "next/link"
import { urlTo } from "router/router"
import { Routes } from "router/routes"

export default function SidePanel(props: { className?: string }) {
  return (
    <aside
      className={twMerge(
        "min-w-[300px] w-[300px]",
        "bg-neutral-800 text-neutral-200",
        "flex flex-col",
        props.className
      )}
    >
      <div className={"p-4"}>
        <p className={"text-xs"}>v{process.env.NEXT_PUBLIC_APP_VERSION}</p>
        <Link href={urlTo(Routes.public.home, {}, {})} className={"text-2xl font-semibold block"}>
          Relegates
        </Link>
      </div>
      <div className={"overflow-y-scroll grow p-2 flex flex-col gap-2"}>
        <Generator />
        <And />
        <Or />
        <Inverter />
        <OutputResult />
      </div>
    </aside>
  )
}
