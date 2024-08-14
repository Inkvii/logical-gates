"use client"
import { useCallback, useRef } from "react"
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  Node,
  OnConnect,
  ReactFlowProvider,
  SelectionMode,
  useEdgesState,
  useNodesState,
} from "reactflow"
import { produce } from "immer"
import { createEdgeFromConnection, isValidConnection } from "util/edgeUtils"
import { generateId } from "util/nodeUtils"
import { nodeTypes } from "components/react-flow/nodeTypes"
import DragAndDropWrapper from "components/DragAndDropWrapper"
import { twMerge } from "tailwind-merge"
import { GeneratorNodeProps } from "components/react-flow/node/GeneratorNode"
import { OutputNodeProps } from "components/react-flow/node/OutputNode"

const initialNodes: Node[] = [
  {
    id: generateId(),
    position: { x: 100, y: 200 },
    type: "generator",
    data: { name: "A input", enabled: false },
  } satisfies Node<GeneratorNodeProps>,
  {
    id: generateId(),
    position: { x: 500, y: 175 },
    type: "outputResult",
    data: {
      name: "Output",
      enabled: false,
    },
  } satisfies Node<OutputNodeProps>,
]

// which mouse buttons will do dragging
const panOnDrag = [1, 2]

export default function FlowContainer() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([{ id: "1a-2a", source: "1", sourceHandle: "b", target: "2" }])

  const onConnect: OnConnect = useCallback(
    (connection: Connection) => {
      const edge: Edge = createEdgeFromConnection(connection, nodes)
      setEdges((prev) => addEdge(edge, prev))
    },
    [nodes, setEdges],
  )

  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, connection: Connection) => {
      // filter out oldEdge so it doesnt conflict with validation conditions
      const canConnect = isValidConnection(
        connection,
        (id: string | null) => nodes.find((n) => n.id === id),
        () => edges.filter((e) => e.id !== oldEdge.id),
      )

      if (!canConnect) return

      const edge: Edge = createEdgeFromConnection(connection, nodes)

      setEdges((prev) =>
        produce(prev, (draft) => {
          const oldIndex = draft.findIndex((edge) => oldEdge.id === edge.id)
          draft[oldIndex] = edge
        })
      )
    },
    [edges, nodes, setEdges],
  )

  return (
    <ReactFlowProvider>
      <DragAndDropWrapper bounds={wrapperRef.current?.getBoundingClientRect()}>
        <div className={"h-full"} ref={wrapperRef}>
          <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onEdgeUpdate={onEdgeUpdate}
            onConnect={onConnect}
            deleteKeyCode={["Delete", "Backspace"]}
            selectionOnDrag={true}
            panOnDrag={panOnDrag}
            selectionMode={SelectionMode.Partial}
          >
            <Controls
              position={"bottom-right"}
              className={twMerge(
                "first:[&_:is(button)]:rounded-t-xl rounded-t-xl last:[&_:is(button)]:rounded-b-xl rounded-b-xl",
                "hover:[&_:is(button)]:bg-neutral-600 hover:[&_:is(button)]:fill-neutral-300",
                "[&_:is(button)]:bg-neutral-800 border-neutral-400 stroke-neutral-400 fill-neutral-400 border transform -translate-y-[3px]",
              )}
            />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} className={"bg-neutral-800"} />
          </ReactFlow>
        </div>
      </DragAndDropWrapper>
    </ReactFlowProvider>
  )
}
