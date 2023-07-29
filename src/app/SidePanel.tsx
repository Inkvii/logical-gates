import { twMerge } from "tailwind-merge"
import Generator from "components/sidepanel/items/Generator"
import And from "components/sidepanel/items/And"
import Or from "components/sidepanel/items/Or"
import Inverter from "components/sidepanel/items/Inverter"

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
        <span className={"text-2xl font-semibold"}>My logo</span>
      </div>
      <div className={"overflow-y-scroll grow p-2 flex flex-col gap-2"}>
        <Generator />
        <And />
        <Or />
        <Inverter />
      </div>
    </aside>
  )
}
