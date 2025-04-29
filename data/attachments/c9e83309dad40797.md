# Test info

- Name: Tests for the Showpage >> Saloninfo verification
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/showPage.spec.ts:26:3

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
   3 | import { StartPage } from '../../pages/filmstaden_int/StartPage';
   4 | import { MoviePage } from '../../pages/filmstaden_int/MoviePage';
   5 | import { ShowPage } from '../../pages/filmstaden_int/ShowPage';
   6 | import { EnvironmentData } from '../../testData/environmentData';
   7 | import * as allure from 'allure-js-commons';
   8 |
   9 | test.describe.parallel('Tests for the Showpage', () => {
  10 |   let landingPage;
  11 |   let startPage;
  12 |   let moviePage;
  13 |   let showPage;
  14 |
  15 |   test.beforeEach(async ({ page }) => {
  16 |     landingPage = new LandingPage(page);
  17 |     startPage = new StartPage(page);
  18 |     moviePage = new MoviePage(page);
  19 |     showPage = new ShowPage(page);
  20 |
  21 |     await page.goto('/');
  22 |     await landingPage.acceptCookies();
  23 |     await landingPage.selectStockholm();
  24 |   });
  25 |
> 26 |   test('Saloninfo verification', async ({ page }) => {
     |   ^ Error: browserType.launch: Executable doesn't exist at /home/runner/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
  27 |     await test.step('Initial setup of test specific variables and tags', async () => {
  28 |       await allure.epic('Showpage');
  29 |       await allure.feature('Information about the salon');
  30 |     });
  31 |
  32 |     await test.step('Navigate to a movie with shows', async () => {
  33 |       await expect(startPage.loginButton).toBeVisible();
  34 |       await startPage.selectRandomMovie();
  35 |       await moviePage.selectFirstAvailableShowtime(startPage.selectRandomMovie.bind(startPage));
  36 |     });
  37 |
  38 |     await test.step('Control the salon information', async () => {
  39 |       //Not all shows have salon information, so we need to check if the button is present before clicking it
  40 |       await showPage.findShowWithSalonInformation(
  41 |         moviePage.selectFirstAvailableShowtime.bind(moviePage),
  42 |         startPage.selectRandomMovie.bind(startPage)
  43 |       );
  44 |       await showPage.clickSalonInformationButton();
  45 |       await expect(showPage.dialogLocator).toContainText('Salongsinformation');
  46 |       await showPage.closeSalonInformationButton();
  47 |     });
  48 |   });
  49 | });
  50 |
```