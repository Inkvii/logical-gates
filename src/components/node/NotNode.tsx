import { NodeProps, useEdges } from "reactflow"
import { useMemo } from "react"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import useUpdateEnabledState from "components/hooks/useUpdateEnabledState"

export type NotNodeProps = {
  name: string
  enabled: boolean
}

export default function NotNode(props: NodeProps<NotNodeProps>) {
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
    <NodeWrapper enabled={isConditionMet} selected={props.selected} nodeId={props.id}>
      <HandleWrapper type={"source"} count={1} />
      <div>
        <p>[NOT]</p>
        <h2 className={"text-lg"}>{props.data.name}</h2>
        <p>{isConditionMet ? "Power is ON" : "Power is OFF"}</p>
      </div>
      <HandleWrapper type={"target"} count={1} />
    </NodeWrapper>
  )
}
