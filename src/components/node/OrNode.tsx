import { NodeProps, useEdges } from "reactflow"
import { useMemo } from "react"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"

export type OrNodeProps = {
  name: string
}

export default function OrNode(props: NodeProps<OrNodeProps>) {
  const edges = useEdges()

  const isConditionMet: boolean = useMemo(() => {
    return edges
      .filter((edge) => edge.target === props.id)
      .some((edge) => {
        return edge.animated
      })
  }, [props.id, edges])

  return (
    <NodeWrapper selected={props.selected} nodeId={props.id}>
      <HandleWrapper type={"source"} count={1} />
      <div>
        <p>[OR]</p>
        <h2 className={"text-lg"}>{props.data.name}</h2>
        <p>{isConditionMet ? "Power is ON" : "Power is OFF"}</p>
      </div>

      <HandleWrapper type={"target"} count={2} />
    </NodeWrapper>
  )
}
