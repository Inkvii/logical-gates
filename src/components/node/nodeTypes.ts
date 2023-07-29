import { NodeTypes, XYPosition } from "reactflow"
import GeneratorNode, { GeneratorNodeProps } from "components/node/GeneratorNode"
import OrNode, { OrNodeProps } from "components/node/OrNode"
import AndNode, { AndNodeProps } from "components/node/AndNode"
import NotNode, { NotNodeProps } from "components/node/NotNode"

export const nodeTypes: NodeTypes = {
  generator: GeneratorNode,
  or: OrNode,
  and: AndNode,
  not: NotNode,
}

type GeneratorNodeType = {
  type: "generator"
  data: GeneratorNodeProps
}

type OrNodeType = {
  type: "or"
  data: OrNodeProps
}

type AndNodeType = {
  type: "and"
  data: AndNodeProps
}

type NotNodeType = {
  type: "not"
  data: NotNodeProps
}

export type NodeFactory = { position?: XYPosition } & (GeneratorNodeType | OrNodeType | AndNodeType | NotNodeType)
