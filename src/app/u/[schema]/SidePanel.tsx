import { twMerge } from "tailwind-merge"
import Generator from "components/sidepanel/items/Generator"
import And from "components/sidepanel/items/And"
import Or from "components/sidepanel/items/Or"
import Inverter from "components/sidepanel/items/Inverter"
import OutputResult from "components/sidepanel/items/OutputResult"
import ActionButtons from "app/u/[schema]/ActionButtons"

export default function SidePanel(props: { className?: string }) {
  return (
    <aside
      className={twMerge(
        "flex flex-col",
        "min-w-[300px] w-[300px]",
        "bg-neutral-100 dark:bg-neutral-800",
        props.className
      )}
    >
      <div className={"overflow-y-scroll h-0 p-2 flex flex-col flex-auto gap-2"} data-testid={"node-types-list"}>
        <Generator />
        <And />
        <Or />
        <Inverter />
        <OutputResult />
      </div>
      <ActionButtons />
    </aside>
  )
}
