import DraggableNode from "components/sidepanel/items/DraggableNode"
import useTheme from "components/sidepanel/items/useTheme"

const name = "Output result"

export default function OutputResult() {
  const theme = useTheme()

  return (
    <DraggableNode
      itemProperties={{
        type: "outputResult",
        data: {
          name: "Output result node",
          enabled: false,
        },
      }}
      className={theme.wrapper}
    >
      <h2 className={theme.title}>{name}</h2>
      <p className={theme.text}>Ending node</p>
    </DraggableNode>
  )
}
