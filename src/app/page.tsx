import { urlTo } from "@/library/router/urlTo"
import ReactFlowShowcase from "app/_fragment/ReactFlowShowcase"
import { Routes } from "router/routes"
import Headline from "app/_fragment/Headline"
import { ButtonLink } from "@/library/button/ButtonLink"

export default function Home() {
  return (
    <main className={"flex flex-col grow relative bg-danger-300 gap-4 "}>
      <header>
        <div className={"absolute top-0 left-4 translate-y-1/4 z-10"}>
          <div className={"flex flex-col gap-4 bg-neutral-800/10 backdrop-blur rounded p-4 max-w-7xl"}>
            <Headline />
            <ButtonLink variant={"solid"} url={urlTo({ route: Routes.private.playground })}>
              Try it out
            </ButtonLink>
          </div>
        </div>
      </header>
      <ReactFlowShowcase className={"absolute inset-0"} />
    </main>
  )
}
