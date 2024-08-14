import { twMerge } from "tailwind-merge"

export default function Headline() {
  return (
    <div>
      <h1
        className={twMerge(
          "text-6xl leading-tight font-semibold",
          "bg-gradient-to-r bg-clip-text",
          "from-primary-600 dark:from-primary-200",
          "to-primary-900 dark:to-primary-600",
          "text-transparent dark:text-transparent"
        )}
      >
        Relegates
      </h1>
      <h4 className={"dark:text-neutral-50"}>A visualisation tool for connecting logic gate nodes. </h4>
      <div className={"max-w-lg space-y-2 pt-8"}>
        <p>
          Use individual node types and their connections to create edge graph. Each graph should start with at least
          one input node and one output node. Any nodes between them create logical graph path.
        </p>
        <p>
          Each node can have inputs and/or outputs that is used for connecting two nodes together via an edge. Basic
          rule is that only <strong>one edge</strong> can be connected to node&apos;s output.
        </p>
      </div>
    </div>
  )
}
