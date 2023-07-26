import { NodeProps } from "reactflow"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import useUpdateEnabledState from "components/hooks/useUpdateEnabledState"

export type GeneratorNodeProps = {
  name: string
  enabled: boolean
}

export default function GeneratorNode(props: NodeProps<GeneratorNodeProps>) {
  const [handleOnClick] = useUpdateEnabledState(props.id, null)

  return (
    <NodeWrapper enabled={props.data.enabled} selected={props.selected} nodeId={props.id}>
      <div>
        <h2 className={"text-lg"}>{props.data.name}</h2>
        <button className={"bg-primary-600 text-white px-2 rounded"} onClick={() => handleOnClick(!props.data.enabled)}>
          {props.data.enabled ? "On" : "Off"}
        </button>
      </div>
      <HandleWrapper type={"source"} count={1} />
    </NodeWrapper>
  )
}
