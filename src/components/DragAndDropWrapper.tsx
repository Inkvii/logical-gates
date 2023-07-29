import { ReactNode } from "react"
import { useDrop } from "react-dnd"
import { addNode } from "util/nodeUtils"
import { useReactFlow } from "reactflow"
import { DraggableItems } from "components/react-flow/draggableItems"
import { NodeFactory } from "components/react-flow/nodeTypes"

export default function DragAndDropWrapper(props: { bounds: DOMRect | undefined; children: ReactNode }) {
  const reactFlowInstance = useReactFlow()

  const [target, dropRef] = useDrop(
    () => ({
      accept: DraggableItems.node,
      drop: (item: NodeFactory, monitor) => {
        const position = reactFlowInstance.project({
          x: (monitor.getClientOffset()?.x ?? 0) - (props.bounds?.left ?? 0),
          y: (monitor.getClientOffset()?.y ?? 0) - (props.bounds?.top ?? 0),
        })

        addNode(
          {
            type: item.type,
            data: item.data,
            position: item.position ?? position,
          },
          reactFlowInstance.setNodes
        )
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [reactFlowInstance, props.bounds]
  )

  return (
    <div ref={dropRef} className={"w-full h-dynamic-screen"} data-testid={"dnd-dropable-area"}>
      {props.children}
    </div>
  )
}
