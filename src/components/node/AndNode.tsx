import { NodeProps, useEdges } from "reactflow"
import { useMemo } from "react"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import useUpdateEnabledState from "components/hooks/useUpdateEnabledState"
import { AbstractNodeProps } from "components/node/AbstractNodeProps"
import NodeDescription from "components/node/fragment/NodeDescription"

export type AndNodeProps = AbstractNodeProps & {
  targetHandleCount?: number
}

export default function AndNode(props: NodeProps<AndNodeProps>) {
  const edges = useEdges()

  const { targetHandleCount = 2 } = props.data

  const isConditionMet: boolean = useMemo(() => {
    const filtered = edges.filter((edge) => edge.target === props.id)

    return (
      filtered.length === targetHandleCount &&
      filtered.every((edge) => {
        return edge.animated
      })
    )
  }, [props.id, edges, targetHandleCount])

  useUpdateEnabledState(props.id, isConditionMet)

  return (
    <NodeWrapper enabled={isConditionMet} selected={props.selected} nodeId={props.id} name={"AND gate"}>
      <HandleWrapper type={"source"} count={1} />
      <NodeDescription description={props.data.name} />
      <HandleWrapper type={"target"} count={targetHandleCount} />
    </NodeWrapper>
  )
}

