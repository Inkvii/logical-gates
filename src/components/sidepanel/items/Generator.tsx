import DraggableNode from "components/sidepanel/items/DraggableNode"
import { twMerge } from "tailwind-merge"

const name = "Generator node"

export default function Generator() {
  return (
    <DraggableNode
      itemProperties={{
        type: "generator",
        data: {
          name: "Generator node",
          enabled: false,
        },
      }}
      className={twMerge("border p-4 rounded bg-neutral-900 border-secondary-500 space-y-2")}
    >
      <h2 className={"font-semibold"}>{name}</h2>
      <p className={"text-xs"}>Generates constant signal from all outputs. Can be turned on/off</p>
    </DraggableNode>
  )
}
