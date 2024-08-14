import DraggableNode from "components/sidepanel/items/DraggableNode"
import useTheme from "components/sidepanel/items/useTheme"

const name = "Or node"

export default function Or() {
  const theme = useTheme()

  return (
    <DraggableNode
      itemProperties={{
        type: "or",
        data: {
          name: "Or node",
          enabled: false,
        },
      }}
      className={theme.wrapper}
    >
      <h2 className={theme.title}>{name}</h2>
      <p className={theme.text}>At least one input must be turned on in order for output to be on</p>
    </DraggableNode>
  )
}
