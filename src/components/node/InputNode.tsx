import { Handle, Position } from "reactflow"

type Props = {
  data: {
    name: string
    description: string
  }
}

export default function InputNode(props: Props) {
  return (
    <div className={"p-4 bg-white border rounded"}>
      <Handle type="target" position={Position.Top} />
      <div>
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" className={"w-4 bg-secondary-600"} style={{ left: 10 }} />
    </div>
  )
}
