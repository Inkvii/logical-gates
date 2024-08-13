import { expect, test } from "@playwright/test"
import { constants } from "logic/constants"
import { login, logout } from "logic/authentication"
import { moveMouseToCenter } from "logic/mouseUtils"

test.beforeEach(async ({ page }) => {
  await page.goto(constants.url)
  await login(page)
})

test.afterEach(async ({ page }) => {
  await logout(page)
})

test("Home page - sorting should work", async ({ page }) => {
  await page.getByRole("button", { name: "Test it" }).hover()

  const navigationContent = page.getByTestId("navigation-content")
  await navigationContent.isVisible()
  await moveMouseToCenter(navigationContent, page)

  await navigationContent.getByRole("link", { name: "Playground" }).click()
  await navigationContent.isHidden()

  await page.waitForURL("/playground")
  await expect(page.getByRole("heading", { name: "Playground" })).toBeVisible()
})
