import { NodeProps, useEdges, useReactFlow, useStoreApi } from "reactflow"
import { useEffect, useMemo } from "react"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import { produce } from "immer"

export type AndNodeProps = {
  name: string
  enabled: boolean
  targetCount?: number
}

export default function AndNode(props: NodeProps<AndNodeProps>) {
  const edges = useEdges()
  const flow = useReactFlow()
  const store = useStoreApi()

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

  useEffect(() => {
    const result = isConditionMet
    flow.setNodes(
      Array.from(store.getState().nodeInternals.values()).map((node) => {
        if (node.id !== props.id) {
          return node
        }

        node.data = produce<AndNodeProps>(node.data, (draft) => {
          draft.enabled = result
        })
        return node
      })
    )
    flow.setEdges(
      store.getState().edges.map((edge) => {
        if (edge.source !== props.id) return edge

        edge.animated = result
        return edge
      })
    )
  }, [isConditionMet])

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
