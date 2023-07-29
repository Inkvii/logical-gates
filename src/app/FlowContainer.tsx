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
  useEdgesState,
  useNodesState,
} from "reactflow"
import { GeneratorNodeProps } from "components/node/GeneratorNode"
import { OrNodeProps } from "components/node/OrNode"
import { AndNodeProps } from "components/node/AndNode"
import { NotNodeProps } from "components/node/InverterNode"
import { produce } from "immer"
import { createEdgeFromConnection, isValidConnection } from "util/edgeUtils"
import { generateId } from "util/nodeUtils"
import CreateNodePanel from "components/CreateNodePanel"
import { nodeTypes } from "components/node/nodeTypes"
import DragAndDropWrapper from "components/DragAndDropWrapper"

const initialNodes: Node[] = [
  {
    id: generateId(),
    position: { x: 100, y: 200 },
    type: "generator",
    data: { name: "A input", enabled: false },
  } satisfies Node<GeneratorNodeProps>,
  {
    id: generateId(),
    position: { x: 100, y: 400 },
    type: "generator",
    data: { name: "B Input", enabled: false },
  } satisfies Node<GeneratorNodeProps>,
  {
    id: generateId(),
    position: { x: 500, y: 300 },
    type: "or",
    data: {
      name: "OR gate",
      enabled: false,
    },
  } satisfies Node<OrNodeProps>,
  {
    id: generateId(),
    position: { x: 500, y: 150 },
    type: "and",
    data: {
      name: "AND gate",
      enabled: false,
    },
  } satisfies Node<AndNodeProps>,
  {
    id: generateId(),
    position: { x: 900, y: 150 },
    type: "inverter",
    data: {
      name: "NOT gate",
      enabled: false,
    },
  } satisfies Node<NotNodeProps>,
]

export default function FlowContainer() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

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
    <div className={"w-full h-dynamic-screen"} ref={wrapperRef}>
      <ReactFlowProvider>
        <DragAndDropWrapper bounds={wrapperRef.current?.getBoundingClientRect()}>
          <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onEdgeUpdate={onEdgeUpdate}
            onConnect={onConnect}
            deleteKeyCode={["Delete", "Backspace"]}
          >
            <Controls position={"bottom-right"} color={"white"} />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} className={"bg-neutral-800"} />
            <CreateNodePanel setNodes={setNodes} />
          </ReactFlow>
        </DragAndDropWrapper>
      </ReactFlowProvider>
    </div>
  )
}
