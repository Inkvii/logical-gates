import { LogicGateSchema } from "server/repository/LogicGateSchema"
import ListItem from "app/u/ListItem"
import CreateNewItem from "app/u/CreateNewItem"

export type Props = {
  schemas: LogicGateSchema[]
}
export default function LogicGateSchemaGrid(props: Props) {
  return (
    <ul className={"grid grid-fill-15 gap-4"}>
      <CreateNewItem />
      {props.schemas.map((schema) => (
        <ListItem schema={schema} key={schema.name} />
      ))}
    </ul>
  )
}
