import { NodeProps } from "reactflow"
import NodeWrapper from "components/wrapper/NodeWrapper"
import HandleWrapper from "components/wrapper/HandleWrapper"
import useUpdateEnabledState from "components/hooks/useUpdateEnabledState"
import { AbstractNodeProps } from "components/node/AbstractNodeProps"
import NodeDescription from "components/node/fragment/NodeDescription"

export type GeneratorNodeProps = AbstractNodeProps

export default function GeneratorNode(props: NodeProps<GeneratorNodeProps>) {
  const [handleOnClick] = useUpdateEnabledState(props.id, null)

  return (
    <NodeWrapper enabled={props.data.enabled} selected={props.selected} nodeId={props.id} name={"Generator"}>
      <div>
        <NodeDescription description={props.data.name} />
        <button
          className={"bg-primary-600 text-white px-2 rounded nodrag"}
          onClick={() => handleOnClick(!props.data.enabled)}
        >
          {props.data.enabled ? "On" : "Off"}
        </button>
      </div>
      <HandleWrapper type={"source"} count={2} />
    </NodeWrapper>
  )
}
