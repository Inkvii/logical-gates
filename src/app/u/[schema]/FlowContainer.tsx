"use client"
import { useCallback, useEffect } from "react"
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  Node,
  OnConnect,
  SelectionMode,
  useEdgesState,
  useNodesState,
} from "reactflow"
import { produce } from "immer"
import { createEdgeFromConnection, isValidConnection } from "util/edgeUtils"
import { nodeTypes } from "components/react-flow/nodeTypes"
import DragAndDropWrapper from "components/DragAndDropWrapper"
import { twMerge } from "tailwind-merge"

// which mouse buttons will do dragging
const panOnDrag = [1, 2]

export type Props = {
  nodes: Node[]
  edges: Edge[]
}
export default function FlowContainer(props: Props) {
  const [nodes, setNodes, onNodesChange] = useNodesState(props.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges)

  useEffect(() => {
    setNodes(props.nodes)
    setEdges(props.edges)
  }, [props, setEdges, setNodes])

  const onConnect: OnConnect = useCallback(
    (connection: Connection) => {
      const edge: Edge = createEdgeFromConnection(connection, nodes)
      setEdges((prev) => addEdge(edge, prev))
    },
    [nodes, setEdges]
  )

  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, connection: Connection) => {
      // filter out oldEdge so it doesnt conflict with validation conditions
      const canConnect = isValidConnection(
        connection,
        (id: string | null) => nodes.find((n) => n.id === id),
        () => edges.filter((e) => e.id !== oldEdge.id)
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
    [edges, nodes, setEdges]
  )

  return (
    <DragAndDropWrapper>
      <div className={"h-full"}>
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
              "dark:hover:[&_:is(button)]:bg-neutral-600",
              "dark:hover:[&_:is(button)]:fill-neutral-300",
              "dark:[&_:is(button)]:bg-neutral-800",
              "dark:border-neutral-400 dark:stroke-neutral-400 dark:fill-neutral-400 border transform -translate-y-[3px]"
            )}
          />
          <Background
            variant={BackgroundVariant.Dots}
            gap={12}
            size={1}
            className={"bg-neutral-50 dark:bg-neutral-800"}
          />
        </ReactFlow>
      </div>
    </DragAndDropWrapper>
  )
}
