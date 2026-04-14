import { Builder, Browser } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome.js'
import { headless } from './config.mjs'

export async function createDriver() {
  const options = new chrome.Options()
  if (headless) {
    options.addArguments('--headless=new', '--disable-gpu', '--window-size=1280,720')
  }

  return new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build()
}
