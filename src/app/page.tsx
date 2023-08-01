"use client"

import Link from "next/link"
import { urlTo } from "router/router"
import Routes from "router/routes"
import ReactFlowShowcase from "app/ReactFlowShowcase"
import Image from "next/image"
import { ReactNode } from "react"

export default function Home() {
  return (
    <main className={"text-white px-6 flex flex-col gap-4"}>
      <div className={"-mx-6 relative"}>
        <div className={"absolute top-0 left-2 translate-y-1/4 z-10"}>
          <div className={"flex flex-col gap-4 bg-neutral-800/10 backdrop-blur rounded p-4 max-w-7xl"}>
            <Headline />
            <ActionButton>Try it out</ActionButton>
          </div>
        </div>
        <ReactFlowShowcase />
      </div>
      <Introduction />
    </main>
  )
}

function Headline() {
  return (
    <div className={""}>
      <h1
        className={
          "text-6xl leading-tight font-semibold bg-gradient-to-r from-primary-200 to-primary-600 bg-clip-text text-transparent"
        }
      >
        Relegates
      </h1>
      <h4>A visualisation tool for connecting logic gate nodes. </h4>
    </div>
  )
}

function ActionButton(props: { children: ReactNode }) {
  return (
    <Link
      href={urlTo(Routes.playground, {}, {})}
      className={"bg-primary-600 text-white rounded px-4 py-2 w-fit block hover:brightness-110"}
    >
      {props.children}
    </Link>
  )
}

function Introduction() {
  return (
    <div className={"space-y-4 block pb-8"}>
      <div className={"prose dark:prose-invert"}>
        <h2 className={""}>How does it work?</h2>
        <p>
          Use individual node types and their connections to create edge graph. Each graph should start with at least
          one input node and one output node. Any nodes between them create logical graph path.{" "}
        </p>
        <p>
          Each node can have inputs and/or outputs that is used for connecting two nodes together via an edge. Basic
          rule is that only <strong>one edge</strong> can be connected to node&apos;s output.
        </p>
      </div>
      <div className={"w-full max-w-[1000px] relative object-cover aspect-[2.43/1]"}>
        <Image src={"/nodeInfo.PNG"} alt={"Node description"} fill={true} />
      </div>
      <div className={"prose dark:prose-invert"}>
        <h2>What is the purpose?</h2>
        <p>
          Sometimes, creating complicated <code>if</code> statements force people to grab pen and paper and start
          calculating all the states. This tool might help with visualisation.
        </p>
        <p>Or there is an idea of logical circuit that needs to be tested out.</p>
        <p>Perhaps as helping tool when introducing people to boolean algebra?</p>
      </div>
      <ActionButton>Go to playground</ActionButton>
    </div>
  )
}
