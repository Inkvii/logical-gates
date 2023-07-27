import { NodeProps, useEdges } from "reactflow"
import { useMemo } from "react"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import useUpdateEnabledState from "components/hooks/useUpdateEnabledState"
import { AbstractNodeProps } from "components/node/AbstractNodeProps"

export type OrNodeProps = AbstractNodeProps

export default function OrNode(props: NodeProps<OrNodeProps>) {
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
    <NodeWrapper enabled={isConditionMet} selected={props.selected} nodeId={props.id} name={"OR gate"}>
      <HandleWrapper type={"source"} count={1} />
      <div>
        <h2 className={"text-lg"}>{props.data.name}</h2>
      </div>

      <HandleWrapper type={"target"} count={2} />
    </NodeWrapper>
  )
}
