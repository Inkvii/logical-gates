import { constants } from "logic/constants"
import { LoginDetails } from "logic/LoginDetails"
import { expect, Page } from "@playwright/test"

export async function login(page: Page, user: LoginDetails = constants.superadmin) {
  if (page.url() !== constants.url) {
    // starting point is from homepage
    await page.goto(constants.url)
  }

  if (await page.getByRole("link", { name: "Go to dashboard" }).isVisible()) {
    // user is already logged in
    return
  }

  await page.getByRole("navigation").getByText("Log in").click()
  await page.waitForURL("/auth/login**", { timeout: 3000 })

  await page.getByLabel("Email").fill(user.email)
  await page.getByLabel("Password").fill(user.password)

  await page.keyboard.press("Enter")
  await page.waitForURL(constants.url, { timeout: 5000 })
}

export async function logout(page: Page) {
  const navbarUserSettings = page.getByTestId("navbar-user-settings")
  await navbarUserSettings.click()
  await page.getByRole("menuitem", { name: "Log out" }).click()
  await page.waitForURL(constants.url, { timeout: 5000 })
  await expect(navbarUserSettings).not.toBeVisible()
}
