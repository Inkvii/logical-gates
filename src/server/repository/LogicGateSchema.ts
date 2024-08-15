import { Edge, Node } from "reactflow"

export type LogicGatePayload = {
  nodes: Node[]
  edges: Edge[]
}

export type LogicGateSchema = {
  name: string
  payload: LogicGatePayload
  author: string
  updatedTimestamp: number
}
