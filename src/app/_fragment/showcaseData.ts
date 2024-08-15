import { Connection, Edge, Node } from "reactflow"
import { GeneratorNodeProps } from "components/react-flow/node/GeneratorNode"
import { OrNodeProps } from "components/react-flow/node/OrNode"
import { AndNodeProps } from "components/react-flow/node/AndNode"
import { OutputNodeProps } from "components/react-flow/node/OutputNode"
import { NotNodeProps } from "components/react-flow/node/InverterNode"
import { createEdgeId } from "util/edgeUtils"

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 50, y: 250 },
    type: "generator",
    data: { name: "Throw a dice", enabled: true },
  } satisfies Node<GeneratorNodeProps>,
  {
    id: "2",
    position: { x: 500, y: 50 },
    type: "or",
    data: {
      name: "Is the dice weighted?",
      enabled: false,
    },
  } satisfies Node<OrNodeProps>,
  {
    id: "3",
    position: { x: 400, y: 200 },
    type: "and",
    data: {
      name: "Opponents don't suspect anything",
      enabled: false,
    },
  } satisfies Node<AndNodeProps>,
  {
    id: "4",
    position: { x: 700, y: 200 },
    type: "outputResult",
    data: {
      name: "The dice falls on six",
      enabled: false,
    },
  } satisfies Node<OutputNodeProps>,
  {
    id: "5",
    position: { x: 150, y: 50 },
    type: "inverter",
    data: {
      name: "Are you feeling lucky?",
      enabled: false,
    },
  } satisfies Node<NotNodeProps>,
]

export const initialEdges: Edge[] = [
  { source: "1", sourceHandle: "a", target: "2", targetHandle: "b" },
  { source: "1", sourceHandle: "b", target: "3", targetHandle: "b" },
  { source: "2", sourceHandle: "a", target: "3", targetHandle: "a" },
  { source: "3", sourceHandle: "a", target: "4", targetHandle: "a" },
  { source: "1", sourceHandle: "a", target: "5", targetHandle: "a" },
  { source: "5", sourceHandle: "a", target: "2", targetHandle: "a" },
].map(
  (connection: Connection) =>
    ({
      id: createEdgeId(connection),
      source: connection.source!,
      sourceHandle: connection.sourceHandle,
      target: connection.target!,
      targetHandle: connection.targetHandle,
      animated: true,
    }) satisfies Edge
)
