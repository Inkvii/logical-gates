import DraggableNode from "components/sidepanel/items/DraggableNode"
import { twMerge } from "tailwind-merge"

const name = "And node"
export default function And() {
  return (
    <DraggableNode
      itemProperties={{
        type: "and",
        data: {
          name: name,
          enabled: false,
        },
      }}
      className={twMerge("border p-4 rounded bg-neutral-900 border-secondary-500 space-y-2")}
    >
      <h2 className={"font-semibold"}>{name}</h2>
      <p className={"text-xs"}>All inputs must be turned on in order for output to be on</p>
    </DraggableNode>
  )
}
