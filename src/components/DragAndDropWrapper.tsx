import { ReactNode } from "react"
import { useDrop } from "react-dnd"
import { DraggableItems } from "components/sidepanel/items/draggableItems"
import { addNode } from "util/nodeUtils"
import { AndNodeProps } from "components/node/AndNode"
import { useReactFlow } from "reactflow"

export default function DragAndDropWrapper(props: { bounds: DOMRect | undefined; children: ReactNode }) {
  const reactFlowInstance = useReactFlow()

  const [target, dropRef] = useDrop(
    () => ({
      accept: DraggableItems.node,
      drop: (item, monitor) => {
        const position = reactFlowInstance.project({
          x: (monitor.getClientOffset()?.x ?? 0) - (props.bounds?.left ?? 0),
          y: (monitor.getClientOffset()?.y ?? 0) - (props.bounds?.top ?? 0),
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
    [reactFlowInstance, props.bounds]
  )

  return (
    <div ref={dropRef} className={"w-full h-dynamic-screen"} data-testid={"dnd-dropable-area"}>
      {props.children}
    </div>
  )
}
