import { test } from '@playwright/test';

test.skip('Login and save authentication state', async ({ page }) => {
  await allure.severity(Severity.CRITICAL);
  await page.goto('https://example.com/login43534');
  await page.fill('#username', 'your-username');
  await page.fill('#password', 'your-password');
  await page.click('button[type="submit"]');

  // Wait for navigation or confirmation of successful login
  await page.waitForURL('https://example.com/dashboard');

  // Save the authentication state to a file
  await page.context().storageState({ path: 'auth.json' });
});