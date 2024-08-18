import { Page } from "@playwright/test"

export default {
  nodes: (page: Page) => page.getByTestId("node-types-list"),
  canvas: (page: Page) => page.locator(".react-flow__pane"),
  saveSchemaButton: (page: Page) => page.getByRole("button", { name: "Save logic schema" }),

  node: {
    handle: (page: Page, nodeId: string, handleId: string, orientation: "source" | "target") =>
      page.locator(`[data-id='${nodeId}-${handleId}-${orientation}']`),
    node: (page: Page, nodeId: string) => page.getByTestId(`rf__node-${nodeId}`),
  },
}
