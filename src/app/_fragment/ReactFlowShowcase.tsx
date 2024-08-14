"use client"
import ReactFlow, { Background, BackgroundVariant, Controls, useEdgesState, useNodesState } from "reactflow"
import { initialEdges, initialNodes } from "app/_fragment/showcaseData"
import { twMerge } from "tailwind-merge"
import { nodeTypes } from "components/react-flow/nodeTypes"

export default function ReactFlowShowcase(props: { className?: string }) {
  const [nodes] = useNodesState(initialNodes)
  const [edges] = useEdgesState(initialEdges)

  return (
    <div className={twMerge("w-full h-[400px]", props.className)}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        fitView={true}
        nodesFocusable={false}
        edgesFocusable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
      >
        <Controls
          position={"bottom-right"}
          className={twMerge(
            "dark:bg-neutral-800 dark:border-neutral-400 dark:stroke-white dark:fill-white border transform -translate-y-[3px]",
          )}
          showInteractive={false}
        />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} className={"dark:bg-neutral-800"} />
      </ReactFlow>
    </div>
  )
}
