"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('uses await in a Playwright test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await (0, test_1.expect)(page).toHaveTitle(/Playwright/);
    let value = await getExampleValue();
    (0, test_1.expect)(value).toBe('abc');
});
async function getExampleValue() {
    return 'abc';
}
