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
            "first:[&_:is(button)]:rounded-t-xl rounded-t-xl last:[&_:is(button)]:rounded-b-xl rounded-b-xl",
            "dark:hover:[&_:is(button)]:bg-neutral-600",
            "dark:hover:[&_:is(button)]:fill-neutral-300",
            "dark:[&_:is(button)]:bg-neutral-800",
            "dark:border-neutral-400 dark:stroke-neutral-400 dark:fill-neutral-400 border transform -translate-y-[3px]",
          )}
        />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} className={"bg-neutral-50 dark:bg-neutral-800"} />
      </ReactFlow>
    </div>
  )
}
