"use client"

import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"
import { Edge, Node, ReactFlowProvider } from "reactflow"
import SidePanel from "app/u/[schema]/SidePanel"
import FlowContainer from "app/u/[schema]/FlowContainer"

export type Props = {
  nodes: Node[]
  edges: Edge[]
}
export default function RelegatesContainer(props: Props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ReactFlowProvider>
        <div className={"flex grow"}>
          <SidePanel />
          <FlowContainer nodes={props.nodes} edges={props.edges} />
        </div>
      </ReactFlowProvider>
    </DndProvider>
  )
}
