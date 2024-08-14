import { LegacyRef, ReactNode } from "react"
import { useDrop } from "react-dnd"
import { addNode } from "util/nodeUtils"
import { useReactFlow } from "reactflow"
import { DraggableItems } from "components/react-flow/draggableItems"
import { NodeFactory } from "components/react-flow/nodeTypes"

export default function DragAndDropWrapper(props: { children: ReactNode }) {
  const reactFlowInstance = useReactFlow()

  const [target, dropRef] = useDrop(
    () => ({
      accept: DraggableItems.node,
      drop: (item: NodeFactory, monitor) => {
        const x = monitor.getClientOffset()?.x ?? 0
        const y = monitor.getClientOffset()?.y ?? 0
        const position = reactFlowInstance.screenToFlowPosition({ x, y })

        addNode(
          {
            type: item.type,
            data: item.data,
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
    [reactFlowInstance],
  )

  return (
    <div ref={dropRef as unknown as LegacyRef<HTMLDivElement>} className={"w-full"} data-testid={"dnd-dropable-area"}>
      {props.children}
    </div>
  )
}
