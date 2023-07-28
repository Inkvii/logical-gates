import { ReactNode, useRef } from "react"
import { useDrop } from "react-dnd"
import { DraggableItems } from "components/sidepanel/items/draggableItems"
import { addNode } from "util/nodeUtils"
import { AndNodeProps } from "components/node/AndNode"
import { useReactFlow } from "reactflow"

export default function DragAndDropWrapper(props: { children: ReactNode }) {
  const reactFlowInstance = useReactFlow()
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [target, dropRef] = useDrop(
    () => ({
      accept: DraggableItems.node,
      drop: (item, monitor) => {
        const bounds = wrapperRef.current?.getBoundingClientRect()

        if (!bounds) return

        const position = reactFlowInstance.project({
          x: (monitor.getClientOffset()?.x ?? 0) - bounds.left,
          y: (monitor.getClientOffset()?.y ?? 0) - bounds.top,
        })

        addNode<AndNodeProps>(
          {
            type: "and",
            data: item as AndNodeProps,
            position: position,
          },
          reactFlowInstance.setNodes
        )
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [reactFlowInstance]
  )

  return (
    <div ref={wrapperRef}>
      <div ref={dropRef} className={"w-full h-dynamic-screen"}>
        {props.children}
      </div>
    </div>
  )
}
