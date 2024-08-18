import { expect, test } from "@playwright/test"
import { constants } from "logic/constants"
import { login, logout } from "logic/authentication"
import globalLayout from "logic/pages/globalLayout"

test.beforeEach(async ({ page }) => {
  await page.goto(constants.url)
})

test("Unauthorised user should NOT see navigation", async ({ page }) => {
  await expect(globalLayout.navbar.loginButton(page)).toBeVisible()
  await expect(globalLayout.navbar.categories(page)).toBeHidden({ timeout: 1000 })
})

test("Unauthorised user should be able to access public pages", async ({ page }) => {
  await page.goto("/auth/login")
  expect(await page.title()).toEqual("Log in page")

  await page.goto("/")
  expect(await page.title()).toEqual("Relegates")
})

test("Unauthorised user should NOT access private pages", async ({ page }) => {
  await page.goto("/u")
  await page.waitForURL("/auth/login**")

  await page.goto("/u/unknownSchema")
  await page.waitForURL("/auth/login**")
})

test("Log in and out successfully", async ({ page }) => {
  await login(page)
  await logout(page)
})

test("Log in and go to protected page", async ({ page }) => {
  await login(page)
  await page.goto("/u")
  await page.waitForURL("/u")

  await logout(page)
})
