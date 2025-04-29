# Test info

- Name: Filmstaden Startpage >> Initial city selection
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/LandingPage.spec.ts:16:3

# Error details

```
Error: browserType.launch: Executable doesn't exist at /home/runner/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { LandingPage } from '../../pages/filmstaden_int/Landingpage';
   3 | import { EnvironmentData } from '../../testData/environmentData';
   4 | import * as allure from 'allure-js-commons';
   5 |
   6 | test.describe.parallel('Filmstaden Startpage', () => {
   7 |   let landingPage;
   8 |
   9 |   test.beforeEach(async ({ page }) => {
  10 |     landingPage = new LandingPage(page);
  11 |
  12 |     await page.goto('/');
  13 |     await landingPage.acceptCookies();
  14 |   });
  15 |
> 16 |   test('Initial city selection', async ({ page }) => {
     |   ^ Error: browserType.launch: Executable doesn't exist at /home/runner/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
  17 |     await test.step('Initial setup of test specific variables and tags', async () => {
  18 |       await allure.epic('Landing page');
  19 |       await allure.feature('Initial city selection');
  20 |     });
  21 |
  22 |     await test.step('Search for towns and verify both negative and positive outcome', async () => {
  23 |       await landingPage.searchTown('dwjao');
  24 |       await expect(landingPage.mainContentLocator).toContainText(
  25 |         'Inga träffar'
  26 |       );
  27 |       await landingPage.searchTown('Göteborg');
  28 |       await expect(landingPage.mainContentLocator).toContainText('Göteborg');
  29 |       await landingPage.selectTownFromResults('Göteborg');
  30 |       await expect(landingPage.goteborgButton).toBeVisible();
  31 |     });
  32 |   });
  33 | });
  34 |
```