import { constants } from "logic/constants"
import { LoginDetails } from "logic/LoginDetails"
import { expect, Page } from "@playwright/test"
import globalLayout from "logic/pages/globalLayout"

export async function login(page: Page, user: LoginDetails = constants.superadmin) {
  if (page.url() !== constants.url) {
    // starting point is from homepage
    await page.goto(constants.url)
  }

  if (await globalLayout.navbar.loginButton(page).isHidden()) {
    // user is already logged in
    return
  }

  await globalLayout.navbar.loginButton(page).click()
  await page.waitForURL("/auth/login**", { timeout: 3000 })

  await page.getByLabel("Email").fill(user.email)
  await page.getByLabel("Password").fill(user.password)

  await page.keyboard.press("Enter")
  await page.waitForURL(constants.url, { timeout: 5000 })
}

export async function logout(page: Page) {
  const settingsButton = globalLayout.navbar.settings.button(page)
  await settingsButton.click()
  await globalLayout.navbar.settings.items(page).getByText("Log out").click()
  await page.waitForURL(constants.url, { timeout: 5000 })
  await expect(settingsButton).toBeHidden()
}
