"use client"
import { useCallback } from "react"
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  Node,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from "reactflow"
import InputNode, { InputNodeProps } from "components/node/InputNode"

const nodeTypes: NodeTypes = { input: InputNode }

const initialNodes: Node[] = [
  { id: "1", position: { x: 50, y: 50 }, data: { label: "First node (1)" } },
  { id: "2", position: { x: 150, y: 100 }, data: { label: "Second node (2)" } },
  {
    id: "3",
    position: { x: 100, y: 200 },
    type: "input",
    data: { name: "My name", enabled: false },
  } satisfies Node<InputNodeProps>,
]

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }]

export default function FlowContainer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: any) => {
      setEdges((eds) => addEdge(params, eds))
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
