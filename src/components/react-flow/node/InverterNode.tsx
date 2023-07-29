import { NodeProps, useEdges } from "reactflow"
import { useMemo } from "react"
import NodeWrapper from "components/react-flow/wrapper/NodeWrapper"
import HandleWrapper from "components/react-flow/wrapper/HandleWrapper"
import useUpdateEnabledState from "components/hooks/useUpdateEnabledState"
import { AbstractNodeProps } from "components/react-flow/AbstractNodeProps"
import NodeDescription from "components/react-flow/node/fragment/NodeDescription"

export type NotNodeProps = AbstractNodeProps

export default function InverterNode(props: NodeProps<NotNodeProps>) {
  const edges = useEdges()

  const isConditionMet: boolean = useMemo(() => {
    const filtered = edges.filter((edge) => edge.target === props.id)

    return (
      filtered.length > 0 &&
      filtered.every((edge) => {
        return !edge.animated
      })
    )
  }, [props.id, edges])

  useUpdateEnabledState(props.id, isConditionMet)

  return (
    <NodeWrapper enabled={isConditionMet} selected={props.selected} nodeId={props.id} name={"Inverter"}>
      <HandleWrapper type={"source"} count={1} />
      <NodeDescription description={props.data.name} />
      <HandleWrapper type={"target"} count={1} />
    </NodeWrapper>
  )
}
