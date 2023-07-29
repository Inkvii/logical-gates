import { NodeTypes, XYPosition } from "reactflow"
import GeneratorNode, { GeneratorNodeProps } from "components/node/GeneratorNode"
import OrNode, { OrNodeProps } from "components/node/OrNode"
import AndNode, { AndNodeProps } from "components/node/AndNode"
import InverterNode, { NotNodeProps } from "components/node/InverterNode"

export const nodeTypes: NodeTypes = {
  generator: GeneratorNode,
  or: OrNode,
  and: AndNode,
  inverter: InverterNode,
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

type InverterNodeType = {
  type: "inverter"
  data: NotNodeProps
}

export type NodeFactory = { position?: XYPosition } & (GeneratorNodeType | OrNodeType | AndNodeType | InverterNodeType)
