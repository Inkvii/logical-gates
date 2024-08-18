import { Page } from "@playwright/test"

export default {
  navbar: {
    categories: (page: Page) => page.getByRole("navigation", { name: "Main", exact: true }),
    categoryPopup: (page: Page) => page.getByTestId("navigation-content"),
    loginButton: (page: Page) => page.getByRole("navigation").getByText("Log in"),
    logo: (page: Page) => page.getByRole("navigation").getByText("Relegates", { exact: true }),
    settings: {
      button: (page: Page) => page.getByTestId("navbar-user-settings"),
      items: (page: Page) => page.getByRole("menuitem"),
    },
  },
  toaster: {
    items: (page: Page) => page.getByLabel("Notifications (F8)").locator("li"),
  },
}
