"use client"
import { useCallback } from "react"
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  MiniMap,
  Node,
  NodeTypes,
  OnConnect,
  useEdgesState,
  useNodesState,
} from "reactflow"
import GeneratorNode, { GeneratorNodeProps } from "components/node/GeneratorNode"
import OrNode, { OrNodeProps } from "components/node/OrNode"
import AndNode from "components/node/AndNode"

const nodeTypes: NodeTypes = {
  generator: GeneratorNode,
  or: OrNode,
  and: AndNode,
}

const initialNodes: Node[] = [
  {
    id: "3",
    position: { x: 100, y: 200 },
    type: "generator",
    data: { name: "A input", enabled: false },
  } satisfies Node<GeneratorNodeProps>,
  {
    id: "4",
    position: { x: 100, y: 400 },
    type: "generator",
    data: { name: "B Input", enabled: false },
  } satisfies Node<GeneratorNodeProps>,
  {
    id: "5",
    position: { x: 300, y: 300 },
    type: "or",
    data: {
      name: "OR gate",
    },
  } satisfies Node<OrNodeProps>,
  {
    id: "6",
    position: { x: 300, y: 150 },
    type: "and",
    data: {
      name: "AND gate",
    },
  } satisfies Node<OrNodeProps>,
]

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2", animated: true }]

export default function FlowContainer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect: OnConnect = useCallback(
    (connection: Connection) => {
      setEdges((edges) => addEdge(connection, edges))
    },
    [setEdges]
  )

  return (
    <div className={"w-full h-dynamic-80"}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}
