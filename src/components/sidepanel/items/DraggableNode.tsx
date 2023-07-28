import { useDrag } from "react-dnd"
import { DraggableItems } from "components/sidepanel/items/draggableItems"
import { twMerge } from "tailwind-merge"
import { AndNodeProps } from "components/node/AndNode"

export default function DraggableNode(props: { name: string }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: DraggableItems.node,
    item: {
      name: props.name,
      enabled: false,
    } satisfies AndNodeProps,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  return (
    <div ref={dragRef} className={twMerge(isDragging && "opacity-60", "border p-4 bg-green-600 text-white")}>
      Draggable node {props.name}
    </div>
  )
}
