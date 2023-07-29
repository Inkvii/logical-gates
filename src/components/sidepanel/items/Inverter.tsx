import DraggableNode from "components/sidepanel/items/DraggableNode"
import { twMerge } from "tailwind-merge"

const name = "Inverter node"

export default function Inverter() {
  return (
    <DraggableNode
      itemProperties={{
        type: "inverter",
        data: {
          name: "Inverter node",
          enabled: false,
        },
      }}
      className={twMerge("border p-4 rounded bg-neutral-900 border-secondary-500 space-y-2")}
    >
      <h2 className={"font-semibold"}>{name}</h2>
      <p className={"text-xs"}>Output is defined as negation of input</p>
    </DraggableNode>
  )
}
