import DraggableNode from "components/sidepanel/items/DraggableNode"
import useTheme from "components/sidepanel/items/useTheme"

const name = "And node"
export default function And() {
  const theme = useTheme()

  return (
    <DraggableNode
      itemProperties={{
        type: "and",
        data: {
          name: name,
          enabled: false,
        },
      }}
      className={theme.wrapper}
    >
      <h2 className={theme.title}>{name}</h2>
      <p className={theme.text}>All inputs must be turned on in order for output to be on</p>
    </DraggableNode>
  )
}
