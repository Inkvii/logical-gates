import { Handle, NodeProps, Position, useReactFlow, useStoreApi } from "reactflow"
import { produce } from "immer"

export type InputNodeProps = {
  name: string
  enabled: boolean
}

export default function InputNode(props: NodeProps<InputNodeProps>) {
  const flow = useReactFlow()
  const store = useStoreApi()
  return (
    <div className={"p-4 bg-white rounded"}>
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

                node.data = produce<InputNodeProps>(node.data, (draft) => {
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
      <Handle type="source" position={Position.Right} id="a" className={"w-4 h-4 rounded bg-secondary-600"} />
    </div>
  )
}
