# Test info

- Name: Unauthenticated Card Purchase Tests >> Card purchase successful
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/cardPurchase.spec.js:34:3

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
   2 | import { LandingPage } from '../../../pages/filmstaden_int/Landingpage';
   3 | import { StartPage } from '../../../pages/filmstaden_int/StartPage';
   4 | import { MoviePage } from '../../../pages/filmstaden_int/MoviePage';
   5 | import { ShowPage } from '../../../pages/filmstaden_int/ShowPage';
   6 | import { NetsPage } from '../../../pages/filmstaden_int/NetsPage';
   7 | import { ReceiptPage } from '../../../pages/filmstaden_int/ReceiptPage';
   8 | import { TestUser } from '../../../testData/testUser';
   9 | import { ValidVisa } from '../../../testData/paymentOptions';
  10 | import { EnvironmentData } from '../../../testData/environmentData';
  11 | import * as allure from 'allure-js-commons';
  12 |
  13 | test.describe.parallel('Unauthenticated Card Purchase Tests', () => {
  14 |   let landingPage;
  15 |   let startPage;
  16 |   let moviePage;
  17 |   let showPage;
  18 |   let netsPage;
  19 |   let receiptPage;
  20 |
  21 |   test.beforeEach(async ({ page }) => {
  22 |     landingPage = new LandingPage(page);
  23 |     startPage = new StartPage(page);
  24 |     moviePage = new MoviePage(page);
  25 |     showPage = new ShowPage(page);
  26 |     netsPage = new NetsPage(page);
  27 |     receiptPage = new ReceiptPage(page);
  28 |
  29 |     await page.goto('/');
  30 |     await landingPage.acceptCookies();
  31 |     await landingPage.selectStockholm();
  32 |   });
  33 |
> 34 |   test('Card purchase successful', async ({ page }) => {
     |   ^ Error: browserType.launch: Executable doesn't exist at /home/runner/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
  35 |     await test.step('Initial setup of variables and tags', async () => {
  36 |       await allure.epic('Purchases');
  37 |       await allure.feature('Successful Card Purchase');
  38 |     });
  39 |
  40 |     await test.step('Navigate to a movie with shows', async () => {
  41 |       await startPage.selectRandomMovie();
  42 |       await moviePage.selectFirstAvailableShowtime(
  43 |         startPage.selectRandomMovie.bind(startPage)
  44 |       );
  45 |     });
  46 |
  47 |     await test.step('Select 1 ticket and fill in required fields', async () => {
  48 |       await showPage.selectOneTicket();
  49 |       await expect(showPage.amountOfTicketsLabel).toContainText('1 st');
  50 |       await showPage.fillEmail(TestUser.email);
  51 |       await showPage.acceptAgeLimit();
  52 |       await showPage.startPayment();
  53 |     });
  54 |
  55 |     await test.step('Make the purchase at Nets', async () => {
  56 |       await netsPage.completePayment(
  57 |         ValidVisa.number,
  58 |         ValidVisa.month,
  59 |         ValidVisa.year,
  60 |         ValidVisa.CVC
  61 |       );
  62 |     });
  63 |
  64 |     await test.step('Control that you end up on the receiptpage', async () => {
  65 |       await expect(async () => {
  66 |         await expect(receiptPage.referensNumberTitleLabel).toContainText(
  67 |           'Referensnummer'
  68 |         );
  69 |       }).toPass({ timeout: 15000 });
  70 |     });
  71 |   });
  72 |
  73 |   test('No Email Error', async ({ page }) => {
  74 |     await allure.epic('Purchases');
  75 |     await allure.feature('No Email in checkout');
  76 |
  77 |     await test.step('Navigate to a suitable movie', async () => {
  78 |       await startPage.selectRandomMovie();
  79 |       await moviePage.selectFirstAvailableShowtime(
  80 |         startPage.selectRandomMovie.bind(startPage)
  81 |       );
  82 |     });
  83 |
  84 |     await test.step('Select 1 ticket and fill in necessary fields', async () => {
  85 |       await showPage.acceptAgeLimit();
  86 |       await showPage.startPayment();
  87 |       await expect(async () => {
  88 |         await expect(
  89 |           page.locator(
  90 |             "//div[contains(text(),'Felaktigt format på e-postadress')]"
  91 |           )
  92 |         ).toContainText('Felaktigt format på e-postadress');
  93 |       }).toPass({ timeout: 5000 });
  94 |     });
  95 |   });
  96 | });
  97 |
```