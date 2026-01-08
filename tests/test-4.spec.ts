import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByLabel('Main', { exact: true }).locator('b')).toContainText('Playwright');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Docs');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('API');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Node.js');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Community');
  await expect(page.getByLabel('Search (Command+K)')).toContainText('Search');
});
