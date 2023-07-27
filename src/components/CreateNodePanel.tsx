import { Dispatch, SetStateAction } from "react"
import { Node, Panel } from "reactflow"
import { AndNodeProps } from "components/node/AndNode"
import { addNode } from "util/nodeUtils"

export default function CreateNodePanel(props: { setNodes: Dispatch<SetStateAction<Node[]>> }) {
  return (
    <Panel position={"top-left"}>
      <button
        className={"bg-neutral-600 text-white px-4 py-2"}
        onClick={() => {
          addNode<AndNodeProps>(
            {
              position: { x: 500, y: 150 },
              type: "and",
              data: {
                name: "AND gate",
                enabled: false,
              },
            },
            props.setNodes
          )
        }}
      >
        Add AND node
      </button>
    </Panel>
  )
}
