import { NodeProps, useEdges } from "reactflow"
import { useMemo } from "react"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import useUpdateEnabledState from "components/hooks/useUpdateEnabledState"
import { AbstractNodeProps } from "components/node/AbstractNodeProps"
import NodeDescription from "components/node/fragment/NodeDescription"

export type OutputNodeProps = AbstractNodeProps

export default function OutputNode(props: NodeProps<OutputNodeProps>) {
  const edges = useEdges()

  const isConditionMet: boolean = useMemo(() => {
    return edges
      .filter((edge) => edge.target === props.id)
      .some((edge) => {
        return edge.animated
      })
  }, [props.id, edges])

  useUpdateEnabledState(props.id, isConditionMet)

  return (
    <NodeWrapper enabled={isConditionMet} selected={props.selected} nodeId={props.id} name={"Output"}>
      <NodeDescription description={props.data.name} />
      <HandleWrapper type={"target"} count={1} />
    </NodeWrapper>
  )
}
