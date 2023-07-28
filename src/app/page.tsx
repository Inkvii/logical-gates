import FlowContainer from "app/FlowContainer"
import SidePanel from "app/SidePanel"

export default function Home() {
  return (
    <main className={"flex h-dynamic-screen"}>
      <SidePanel />
      <FlowContainer />
    </main>
  )
}
