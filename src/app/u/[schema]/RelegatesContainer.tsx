"use client"

import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"
import { ReactFlowProvider } from "reactflow"
import SidePanel from "app/u/[schema]/SidePanel"
import FlowContainer from "app/u/[schema]/FlowContainer"

export default function RelegatesContainer() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ReactFlowProvider>
        <div className={"flex grow"}>
          <SidePanel />
          <FlowContainer />
        </div>
      </ReactFlowProvider>
    </DndProvider>
  )
}
