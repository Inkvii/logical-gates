import { Locator, Page } from "@playwright/test"

/**
 * Moves mouse to the center of the locator's bounding box
 * @param locator any element
 * @param page playwright page object
 */
export async function moveMouseToCenter(locator: Locator, page: Page) {
  const boundaries = await locator.boundingBox()
  if (!boundaries) throw new Error("Locator not found")
  await page.mouse.move(boundaries.x + boundaries.width / 2, boundaries.y + boundaries.height / 2)
}
