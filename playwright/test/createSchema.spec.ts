import { expect, Page, test } from "@playwright/test"
import { constants } from "logic/constants"
import globalLayout from "logic/pages/globalLayout"
import { login, logout } from "logic/authentication"
import userPage from "logic/pages/userPage"
import { moveMouseToCenter } from "logic/mouseUtils"
import schemaPage from "logic/pages/schemaPage"

test.beforeEach(async ({ page }) => {
  await page.goto(constants.url)
  await login(page, constants.superadmin)

  await moveMouseToCenter(globalLayout.navbar.categories(page).getByText("Schemas"), page)

  const navbarPopup = globalLayout.navbar.categoryPopup(page)

  await navbarPopup.isVisible()
  await navbarPopup.getByRole("link", { name: "User" }).click()

  await page.waitForURL("/u")
  await navbarPopup.isHidden()
})

test.afterEach(async ({ page }) => {
  await logout(page)
})

test("User email is visible in heading", async ({ page }) => {
  await expect(userPage.heading(page)).toHaveText(`User ${constants.superadmin.email}`)
  await expect(userPage.items.new(page)).toBeVisible()
})

test("Create new schema, save it and then delete it", async ({ page }) => {
  const schemaName = "My supreme schema"

  await userPage.items.new(page).click()
  await page.waitForURL("/u/new")

  await createNodesOnCanvas(page)
  await saveSchemaAs(page, schemaName)

  await page.goto(`/u`)
  const schemaWrapper = userPage.items.existing(page).filter({ hasText: schemaName })
  await expect(schemaWrapper).toBeVisible()

  await schemaWrapper.getByRole("button").click()
  await page.getByRole("button", { name: "Delete" }).click()

  await expect(schemaWrapper).toBeHidden()
})

/**
 * Expects /u/{schema} url
 * Creates nodes on presumably blank canvas
 * @param page page from test case
 */
async function createNodesOnCanvas(page: Page) {
  await schemaPage
    .nodes(page)
    .getByRole("heading", {
      name: "Generator node",
      exact: true,
    })
    .dragTo(schemaPage.canvas(page), { targetPosition: { x: 0, y: 0 } })
  await schemaPage
    .nodes(page)
    .getByRole("heading", {
      name: "Generator node",
      exact: true,
    })
    .dragTo(schemaPage.canvas(page), { targetPosition: { x: 0, y: 200 } })
  await schemaPage
    .nodes(page)
    .getByRole("heading", {
      name: "Or node",
      exact: true,
    })
    .dragTo(schemaPage.canvas(page), { targetPosition: { x: 300, y: 100 } })
  await schemaPage
    .nodes(page)
    .getByRole("heading", {
      name: "Output result",
      exact: true,
    })
    .dragTo(schemaPage.canvas(page), { targetPosition: { x: 600, y: 100 } })

  await schemaPage.node.handle(page, "1", "a", "source").dragTo(schemaPage.node.handle(page, "3", "a", "target"))
  await schemaPage.node.handle(page, "2", "b", "source").dragTo(schemaPage.node.handle(page, "3", "b", "target"))
  await schemaPage.node.handle(page, "3", "a", "source").dragTo(schemaPage.node.handle(page, "4", "a", "target"))

  await expect(schemaPage.node.node(page, "4").locator("> div")).toHaveClass(/danger/)

  await schemaPage.node.node(page, "1").getByTestId("button").click()
  await expect(schemaPage.node.node(page, "1").locator("> div")).toHaveClass(/success/)
  await expect(schemaPage.node.node(page, "4").locator("> div")).toHaveClass(/success/)
}

/**
 * Expects /u/{schema} url
 * Saves current schema under specified name
 * @param page page from test case
 * @param schemaName name of the schema
 */
async function saveSchemaAs(page: Page, schemaName: string) {
  await schemaPage.saveSchemaButton(page).click()

  await page.getByLabel("Schema name").fill(schemaName)
  await page.getByRole("button", { name: "Submit" }).click()

  await page.getByRole("dialog").isHidden()

  await globalLayout.toaster
    .items(page)
    .filter({ hasText: "Schema saved" })
    .waitFor({ state: "visible", timeout: 1000 })
  expect(await globalLayout.toaster.items(page).count()).toEqual(1)
}
