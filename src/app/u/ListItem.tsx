"use client"
import { LogicGateSchema } from "server/repository/LogicGateSchema"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { urlTo } from "@/library/router/urlTo"
import { Routes } from "router/routes"
import { formatDatetime } from "@/library/utils/dateUtils"
import { Button as ReactAriaButton } from "react-aria-components"
import { X } from "@phosphor-icons/react/dist/ssr"
import IconConstants from "@/library/utils/IconConstants"
import { deleteSchema } from "app/u/action"
import ConfirmationDialog from "@/library/dialog/ConfirmationDialog"
import { Description } from "@radix-ui/react-dialog"

export default function ListItem(props: { schema: LogicGateSchema }) {
  return (
    <li
      className={twMerge(
        "primary",
        "border rounded",
        "dark:bg-hue-950",
        "dark:border-hue-800",
        "focusable focus-within:ring hover:ring transition-all",
        "relative"
      )}
      data-testid={"existing-item"}
    >
      <Link
        href={urlTo({ route: Routes.private.userSchema, pathParams: { schema: props.schema.name }, queryParams: {} })}
      >
        <div className={"p-4"}>
          <h2>{props.schema.name}</h2>
          <p>{formatDatetime(props.schema.updatedTimestamp)}</p>
        </div>
      </Link>
      <ConfirmationDialog
        trigger={
          <ReactAriaButton className={"absolute top-2 right-2 neutral hover:danger focusable rounded"}>
            <X size={IconConstants.md} className={"fill-hue-400 dark:fill-hue-600 transition-all duration-500"} />
          </ReactAriaButton>
        }
        title={"Delete logic schema"}
        hue={"danger"}
        decline={{ children: "Cancel" }}
        accept={{
          children: "Delete",
          onPress: async () => {
            await deleteSchema(props.schema.name)
          },
        }}
      >
        <Description>
          Deleting <code className={"inline text-danger-600 dark:text-danger-400 px-1"}>{props.schema.name}</code>{" "}
          cannot be undone. Are you sure?
        </Description>
      </ConfirmationDialog>
    </li>
  )
}
