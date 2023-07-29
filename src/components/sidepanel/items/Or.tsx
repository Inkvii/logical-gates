import DraggableNode from "components/sidepanel/items/DraggableNode"
import { twMerge } from "tailwind-merge"

const name = "Or node"

export default function Or() {
  return (
    <DraggableNode
      itemProperties={{
        type: "or",
        data: {
          name: "Or node",
          enabled: false,
        },
      }}
      className={twMerge("border p-4 rounded bg-neutral-900 border-secondary-500 space-y-2")}
    >
      <h2 className={"font-semibold"}>{name}</h2>
      <p className={"text-xs"}>At least one input must be turned on in order for output to be on</p>
    </DraggableNode>
  )
}
