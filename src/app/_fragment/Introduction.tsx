import Image from "next/image"
import { ButtonLink } from "@/library/button/ButtonLink"
import { urlTo } from "@/library/router/urlTo"
import { Routes } from "router/routes"

export default function Introduction() {
  return (
    <div className={"space-y-4 block py-8"}>
      <div className={"max-w-lg space-y-2"}>
        <h2>How does it work?</h2>
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
      <div className={"max-w-lg space-y-2"}>
        <h2>What is the purpose?</h2>
        <p>
          Sometimes, creating complicated <code>if</code> statements force people to grab pen and paper and start
          calculating all the states. This tool might help with visualisation.
        </p>
        <p>Or there is an idea of logical circuit that needs to be tested out.</p>
        <p>Perhaps as helping tool when introducing people to boolean algebra?</p>
      </div>
      <ButtonLink variant={"solid"} url={urlTo({ route: Routes.private.playground })}>
        Go to playground
      </ButtonLink>
    </div>
  )
}
