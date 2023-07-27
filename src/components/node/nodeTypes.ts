import { NodeTypes } from "reactflow"
import GeneratorNode from "components/node/GeneratorNode"
import OrNode from "components/node/OrNode"
import AndNode from "components/node/AndNode"
import NotNode from "components/node/NotNode"

export const nodeTypes: NodeTypes = {
  generator: GeneratorNode,
  or: OrNode,
  and: AndNode,
  not: NotNode,
}
