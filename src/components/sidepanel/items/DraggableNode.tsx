import { useDrag } from "react-dnd"
import { twMerge } from "tailwind-merge"
import { NodeFactory } from "components/react-flow/nodeTypes"
import { LegacyRef, ReactNode } from "react"
import { DraggableItems } from "components/react-flow/draggableItems"

export default function DraggableNode(props: { itemProperties: NodeFactory; className?: string; children: ReactNode }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: DraggableItems.node,
    item: props.itemProperties,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  return (
    <div
      ref={dragRef as unknown as LegacyRef<HTMLDivElement>}
      className={twMerge(
        isDragging && "opacity-80",
        "cursor-grab hover:brightness-110 transition-all",
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
