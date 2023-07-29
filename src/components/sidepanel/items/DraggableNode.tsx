import { useDrag } from "react-dnd"
import { DraggableItems } from "components/sidepanel/items/draggableItems"
import { twMerge } from "tailwind-merge"
import { NodeFactory } from "components/node/nodeTypes"

export default function DraggableNode(props: { name: string; itemProperties: NodeFactory }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: DraggableItems.node,
    item: props.itemProperties,
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
