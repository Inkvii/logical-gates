import { NodeProps, useReactFlow, useStoreApi } from "reactflow"
import { produce } from "immer"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"

export type GeneratorNodeProps = {
  name: string
  enabled: boolean
}

export default function GeneratorNode(props: NodeProps<GeneratorNodeProps>) {
  const flow = useReactFlow()
  const store = useStoreApi()
  return (
    <NodeWrapper enabled={props.data.enabled} selected={props.selected} nodeId={props.id}>
      <div>
        <h2 className={"text-lg"}>{props.data.name}</h2>
        <button
          className={"bg-primary-600 text-white px-2 rounded"}
          onClick={() => {
            const invertedEnabledState = !props.data.enabled
            flow.setNodes(
              Array.from(store.getState().nodeInternals.values()).map((node) => {
                if (node.id !== props.id) {
                  return node
                }

                node.data = produce<GeneratorNodeProps>(node.data, (draft) => {
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
          }}
        >
          {props.data.enabled ? "On" : "Off"}
        </button>
      </div>
      <HandleWrapper type={"source"} count={1} />
    </NodeWrapper>
  )
}
