"use client"

import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"
import SidePanel from "app/playground/SidePanel"
import FlowContainer from "app/playground/FlowContainer"
import { ReactFlowProvider } from "reactflow"

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
