import { NodeProps } from "reactflow"
import NodeWrapper from "components/react-flow/wrapper/NodeWrapper"
import HandleWrapper from "components/react-flow/wrapper/HandleWrapper"
import useUpdateEnabledState from "components/hooks/useUpdateEnabledState"
import { AbstractNodeProps } from "components/react-flow/AbstractNodeProps"
import NodeDescription from "components/react-flow/node/fragment/NodeDescription"
import { Button } from "@/library/button/Button"

export type GeneratorNodeProps = AbstractNodeProps

export default function GeneratorNode(props: NodeProps<GeneratorNodeProps>) {
  const [handleOnClick] = useUpdateEnabledState(props.id, null)

  return (
    <NodeWrapper enabled={props.data.enabled} selected={props.selected} nodeId={props.id} name={"Generator"}>
      <div>
        <NodeDescription description={props.data.name} />
        <Button
          variant={"solid"}
          className={"px-2 nodrag"}
          size={"none"}
          hue={props.data.enabled ? "success" : "danger"}
          onPress={() => handleOnClick(!props.data.enabled)}
        >
          {props.data.enabled ? "On" : "Off"}
        </Button>
      </div>
      <HandleWrapper type={"source"} count={2} />
    </NodeWrapper>
  )
}
