import DraggableNode from "components/sidepanel/items/DraggableNode"
import { twMerge } from "tailwind-merge"

const name = "Output result"

export default function OutputResult() {
  return (
    <DraggableNode
      itemProperties={{
        type: "outputResult",
        data: {
          name: "Output result node",
          enabled: false,
        },
      }}
      className={twMerge("border p-4 rounded bg-neutral-900 border-secondary-500 space-y-2")}
    >
      <h2 className={"font-semibold"}>{name}</h2>
      <p className={"text-xs"}>Ending node</p>
    </DraggableNode>
  )
}
