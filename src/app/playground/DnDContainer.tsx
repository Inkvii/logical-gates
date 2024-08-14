"use client"

import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"
import SidePanel from "app/playground/SidePanel"
import FlowContainer from "app/playground/FlowContainer"

export default function DnDContainer() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={"flex"}>

        <SidePanel />
        <FlowContainer />
      </div>
    </DndProvider>
  )
}