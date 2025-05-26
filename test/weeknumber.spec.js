const { test, expect } = require('@playwright/test');
const { getWeekNumber, formatDate } = require('../src/weeknumber');

test.describe('week number', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
    await page.waitForSelector('h1');
  });

  test('is displayed correctly', async ({ page }) => {
    const contents = page.locator('h1');
    await new Promise(resolve => setTimeout(resolve, 3000));
    await expect(contents).toHaveText(getWeekNumber().toString());
  });

  test('changes date format when selected', async ({ page }) => {
    await page.waitForSelector('select');
    
    // Check default format is ISO
    const dateDisplay = page.locator('p');
    const currentDate = new Date();
    await expect(dateDisplay).toHaveText(formatDate(currentDate, 'ISO'));
    
    // Change to US format
    await page.selectOption('select', 'US');
    await expect(dateDisplay).toHaveText(formatDate(currentDate, 'US'));
    
    // Change to EU format
    await page.selectOption('select', 'EU');
    await expect(dateDisplay).toHaveText(formatDate(currentDate, 'EU'));
  });
});
