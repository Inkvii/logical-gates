import DraggableNode from "components/sidepanel/items/DraggableNode"
import useTheme from "components/sidepanel/items/useTheme"

const name = "Inverter node"

export default function Inverter() {
  const theme = useTheme()

  return (
    <DraggableNode
      itemProperties={{
        type: "inverter",
        data: {
          name: "Inverter node",
          enabled: false,
        },
      }}
      className={theme.wrapper}
    >
      <h2 className={theme.title}>{name}</h2>
      <p className={theme.text}>Output is defined as negation of input</p>
    </DraggableNode>
  )
}
