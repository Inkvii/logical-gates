import { Handle, NodeProps, Position, useReactFlow, useStoreApi } from "reactflow"
import { produce } from "immer"
import { twMerge } from "tailwind-merge"

export type GeneratorNodeProps = {
  name: string
  enabled: boolean
}

export default function GeneratorNode(props: NodeProps<GeneratorNodeProps>) {
  const flow = useReactFlow()
  const store = useStoreApi()
  return (
    <div className={twMerge("p-4 bg-white rounded border", props.selected && "border-primary-600")}>
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
      <Handle type="source" position={Position.Right} id="a" className={"w-4 h-4 rounded bg-secondary-600"} />
    </div>
  )
}
