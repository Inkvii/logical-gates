import { twMerge } from "tailwind-merge"
import DraggableNode from "components/sidepanel/items/DraggableNode"

export default function SidePanel(props: { className?: string }) {
  return (
    <aside
      className={twMerge("min-w-[300px] w-[300px]", "bg-neutral-800 text-white", "flex flex-col", props.className)}
    >
      <div className={"p-4"}>
        <span className={"text-2xl font-semibold"}>My logo</span>
      </div>
      <div className={"overflow-y-scroll grow p-2 flex flex-col gap-2"}>
        <DraggableNode
          name={"Generator"}
          itemProperties={{
            type: "generator",
            data: {
              name: "Generator node",
              enabled: false,
            },
          }}
        />
        <DraggableNode
          name={"AND"}
          itemProperties={{
            type: "and",
            data: {
              name: "And node",
              enabled: false,
            },
          }}
        />

        <DraggableNode
          name={"OR"}
          itemProperties={{
            type: "or",
            data: {
              name: "Or node",
              enabled: false,
            },
          }}
        />
        <DraggableNode
          name={"Invertor"}
          itemProperties={{
            type: "not",
            data: {
              name: "Invertor node",
              enabled: false,
            },
          }}
        />
      </div>
    </aside>
  )
}
