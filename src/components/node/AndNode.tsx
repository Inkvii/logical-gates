import { NodeProps, useEdges } from "reactflow"
import { useMemo } from "react"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import useUpdateEnabledState from "components/hooks/useUpdateEnabledState"

export type AndNodeProps = {
  name: string
  enabled: boolean
  targetCount?: number
}

export default function AndNode(props: NodeProps<AndNodeProps>) {
  const edges = useEdges()

  const { targetCount = 2 } = props.data

  const isConditionMet: boolean = useMemo(() => {
    const filtered = edges.filter((edge) => edge.target === props.id)

    return (
      filtered.length === targetCount &&
      filtered.every((edge) => {
        return edge.animated
      })
    )
  }, [props.id, edges, targetCount])

  useUpdateEnabledState(props.id, isConditionMet)


  return (
    <NodeWrapper enabled={isConditionMet} selected={props.selected} nodeId={props.id}>
      <HandleWrapper type={"source"} count={1} />
      <div>
        <p>[AND]</p>
        <h2 className={"text-lg"}>{props.data.name}</h2>
        <p>{isConditionMet ? "Power is ON" : "Power is OFF"}</p>
      </div>
      <HandleWrapper type={"target"} count={targetCount} />
    </NodeWrapper>
  )
}
