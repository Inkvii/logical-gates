import { NodeProps, useEdges, useReactFlow, useStoreApi } from "reactflow"
import { useEffect, useMemo } from "react"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import { produce } from "immer"

export type NotNodeProps = {
  name: string
  enabled: boolean
}

export default function NotNode(props: NodeProps<NotNodeProps>) {
  const edges = useEdges()
  const flow = useReactFlow()
  const store = useStoreApi()

  const isConditionMet: boolean = useMemo(() => {
    const filtered = edges.filter((edge) => edge.target === props.id)

    return (
      filtered.length > 0 &&
      filtered.every((edge) => {
        return !edge.animated
      })
    )
  }, [props.id, edges])

  useEffect(() => {
    const invertedEnabledState = isConditionMet
    flow.setNodes(
      Array.from(store.getState().nodeInternals.values()).map((node) => {
        if (node.id !== props.id) {
          return node
        }

        node.data = produce<NotNodeProps>(node.data, (draft) => {
          draft.enabled = invertedEnabledState
        })
        return node
      })
    )
    flow.setEdges(
      store.getState().edges.map((edge) => {
        if (edge.source !== props.id) return edge

        edge.animated = invertedEnabledState
        return edge
      })
    )
  }, [isConditionMet])

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
