import DraggableNode from "components/sidepanel/items/DraggableNode"
import useTheme from "components/sidepanel/items/useTheme"

const name = "Generator node"

export default function Generator() {
  const theme = useTheme()

  return (
    <DraggableNode
      itemProperties={{
        type: "generator",
        data: {
          name: "Generator node",
          enabled: false,
        },
      }}
      className={theme.wrapper}
    >
      <h2 className={theme.title}>{name}</h2>
      <p className={theme.text}>Generates constant signal from all outputs. Can be turned on/off</p>
    </DraggableNode>
  )
}
