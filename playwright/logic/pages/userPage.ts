import { Page } from "@playwright/test"

export default {
  breadcrumbs: (page: Page) => page.getByTestId("breadcrumbs"),
  heading: (page: Page) => page.getByTestId("main-header").getByRole("heading"),
  items: {
    all: (page: Page) => page.getByTestId("schema-items-list").getByRole("listitem"),
    new: (page: Page) => page.getByTestId("schema-items-list").getByTestId("new-item"),
    existing: (page: Page) => page.getByTestId("schema-items-list").getByTestId("existing-item"),
  },
}
