import { Handle, NodeProps, Position, useEdges } from "reactflow"
import { twMerge } from "tailwind-merge"
import { useMemo } from "react"

export type OrNodeProps = {
  name: string
}

export default function OrNode(props: NodeProps<OrNodeProps>) {
  const edges = useEdges()

  const isConditionMet: boolean = useMemo(() => {
    console.log("Is condition met?")
    return edges
      .filter((edge) => edge.target === props.id)
      .some((edge) => {
        return edge.animated
      })
  }, [props.id, edges])

  return (
    <div className={twMerge("p-4 bg-white rounded border", props.selected && "border-primary-600")}>
      <Handle type="source" position={Position.Right} id="x" className={"w-4 h-4 rounded bg-secondary-600"} />
      <div>
        <p>[OR]</p>
        <h2 className={"text-lg"}>{props.data.name}</h2>
        <p>{isConditionMet ? "Power is ON" : "Power is OFF"}</p>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        className={"w-4 h-4 rounded bg-primary-600 top-1/3"}
        // style={{ top: "10px" }}
      />
      <Handle type="target" position={Position.Left} id="b" className={"w-4 h-4 rounded bg-primary-600 top-2/3"} />
    </div>
  )
}
