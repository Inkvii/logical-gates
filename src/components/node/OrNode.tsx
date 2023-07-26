import { NodeProps, useEdges, useReactFlow, useStoreApi } from "reactflow"
import { useEffect, useMemo } from "react"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import { produce } from "immer"
import { AndNodeProps } from "components/node/AndNode"

export type OrNodeProps = {
  name: string
}

export default function OrNode(props: NodeProps<OrNodeProps>) {
  const edges = useEdges()
  const flow = useReactFlow()
  const store = useStoreApi()

  const isConditionMet: boolean = useMemo(() => {
    return edges
      .filter((edge) => edge.target === props.id)
      .some((edge) => {
        return edge.animated
      })
  }, [props.id, edges])


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
        <p>[OR]</p>
        <h2 className={"text-lg"}>{props.data.name}</h2>
        <p>{isConditionMet ? "Power is ON" : "Power is OFF"}</p>
      </div>

      <HandleWrapper type={"target"} count={2} />
    </NodeWrapper>
  )
}
