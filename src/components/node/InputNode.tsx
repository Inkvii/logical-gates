import { Handle, NodeProps, Position, useReactFlow, useStoreApi } from "reactflow"

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
            flow.setNodes(
              Array.from(store.getState().nodeInternals.values()).map((node) => {
                if (node.id === props.id) {
                  node.data = {
                    ...node.data,
                    enabled: !node.data.enabled,
                  }
                }
                return node
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
