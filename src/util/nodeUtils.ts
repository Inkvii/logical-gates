import { Node } from "reactflow"
import { AbstractNodeProps } from "components/react-flow/AbstractNodeProps"
import { Dispatch, SetStateAction } from "react"

export function addNode<T extends AbstractNodeProps>(
  node: Omit<Node<T>, "id">,
  setNodes: Dispatch<SetStateAction<Node[]>>
) {
  setNodes((prev) => {
    // set state for id generator
    const sortedIndexesDesc = prev.map((node) => parseInt(node.id)).toSorted((a, b) => b - a)
    const nextIndex = (sortedIndexesDesc[0] ?? 0) + 1

    const finalNode = { ...node, id: nextIndex.toString() }
    return [...prev, finalNode]
  })
}
