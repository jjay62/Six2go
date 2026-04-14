/**
 * Smoke: open product page /products/1.
 * Requires: Chrome, dev server (`npm run dev`).
 *
 *   npm run test:e2e
 *   E2E_BASE_URL=http://localhost:3000 npm run test:e2e
 *   E2E_HEADLESS=1 npm run test:e2e
 */

import assert from 'node:assert/strict'
import { By, until } from 'selenium-webdriver'
import { baseUrl } from './config.mjs'
import { createDriver } from './driver.mjs'

async function main() {
  const driver = await createDriver()
  try {
    await driver.get(`${baseUrl}/products/1`)
    await driver.wait(until.elementLocated(By.css('body')), 10_000)

    const body = await driver.findElement(By.css('body'))
    const text = await body.getText()
    assert.ok(text.length > 0, 'product page should have visible text')

    console.log('/products/1 successfully loaded')
  } finally {
    await driver.quit()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
