import { Node } from "reactflow"
import { AbstractNodeProps } from "components/node/AbstractNodeProps"
import { Dispatch, SetStateAction } from "react"

let index = 0

export function* idGenerator(): Generator<string, never> {
  while (true) {
    index++
    yield "" + index
  }
}

export function generateId(): string {
  return idGenerator().next().value
}

export function addNode<T extends AbstractNodeProps>(
  node: Omit<Node<T>, "id">,
  setNodes: Dispatch<SetStateAction<Node[]>>
) {
  const finalNode = { ...node, id: generateId() }

  setNodes((prev) => [...prev, finalNode])
}
