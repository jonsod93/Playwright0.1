# Test info

- Name: Discount code purchases >> Discountcode FR purchase + control the confirmation email
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/discountCodePurchase.spec.ts:42:3

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
   8 | import { EmailHelper } from '../../../helpers/filmstaden_int/EmailHelper';
   9 | import { DiscountCodes } from '../../../testData/paymentOptions';
   10 | import { EnvironmentData } from '../../../testData/environmentData';
   11 | import * as allure from 'allure-js-commons';
   12 |
   13 | test.describe.parallel('Discount code purchases', () => {
   14 |   let landingPage;
   15 |   let startPage;
   16 |   let moviePage;
   17 |   let showPage;
   18 |   let netsPage;
   19 |   let receiptPage;
   20 |   let emailHelper;
   21 |   let testEmailAddress;
   22 |   let refNumber;
   23 |   let timeFrom;
   24 |   let namespace;
   25 |
   26 |   test.beforeEach(async ({ page }) => {
   27 |     landingPage = new LandingPage(page);
   28 |     startPage = new StartPage(page);
   29 |     moviePage = new MoviePage(page);
   30 |     showPage = new ShowPage(page);
   31 |     netsPage = new NetsPage(page);
   32 |     receiptPage = new ReceiptPage(page);
   33 |     emailHelper = new EmailHelper();
   34 |
   35 |     namespace = await emailHelper.getNamespace();
   36 |
   37 |     await page.goto('/');
   38 |     await landingPage.acceptCookies();
   39 |     await landingPage.selectStockholm();
   40 |   });
   41 |
>  42 |   test('Discountcode FR purchase + control the confirmation email', async ({
      |   ^ Error: browserType.launch: Executable doesn't exist at /home/runner/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
   43 |     page,
   44 |   }, testInfo) => {
   45 |     await test.step('Initial setup of test specific variables and tags', async () => {
   46 |       await allure.epic('Purchases');
   47 |       await allure.feature('Successful full discount');
   48 |
   49 |       test.setTimeout(90000); // Set timeout to 90 seconds for the whole test
   50 |
   51 |       testEmailAddress =
   52 |         `test.${Date.now()}` +
   53 |         testInfo.project.name +
   54 |         `FRpurchase@${namespace}.mailisk.net`;
   55 |
   56 |       // Save the start time of the test
   57 |       let testStartTime = new Date();
   58 |       // Change start time format for the email filtering later
   59 |       timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds
   60 |     });
   61 |
   62 |     await test.step('Navigate to a movie with shows', async () => {
   63 |       await expect(startPage.loginButton).toBeVisible();
   64 |       await startPage.selectRandomMovie();
   65 |       await moviePage.selectFirstAvailableShowtime(
   66 |         startPage.selectRandomMovie.bind(startPage)
   67 |       );
   68 |     });
   69 |
   70 |     await test.step('Select 1 ticket and fill in necessary fields', async () => {
   71 |       //Make sure there are Ordinarie tickets available for sale
   72 |       await expect(async () => {
   73 |         await expect(showPage.mainContentLocator).toContainText('Ordinarie');
   74 |       }).toPass({ timeout: 10000 });
   75 |
   76 |       await showPage.selectOneTicket();
   77 |       //Double check to make sure the amount of tickets is 1
   78 |       await expect(showPage.amountOfTicketsLabel).toContainText('1 st');
   79 |       await showPage.fillEmail(testEmailAddress);
   80 |       await showPage.acceptAgeLimit();
   81 |     });
   82 |
   83 |     await test.step('Verify discount error message and add a correct discount code', async () => {
   84 |       await showPage.openDiscountPopup();
   85 |       await showPage.expandDiscountInfo();
   86 |       await expect(showPage.discountCodeInfo).toBeVisible();
   87 |       await expect(showPage.discountCodeInfo).toContainText(
   88 |         'Endast ett erbjudande per biljett'
   89 |       );
   90 |
   91 |       await showPage.fillDiscountCode(DiscountCodes.invalid.code);
   92 |       await showPage.activateDiscountCode();
   93 |       await expect(showPage.formLocator).toContainText(
   94 |         'Rabatten hittades inte'
   95 |       );
   96 |       await showPage.fillDiscountCode(DiscountCodes.free.code);
   97 |       await showPage.activateDiscountCode();
   98 |       await expect(showPage.mainContentLocator).toContainText(
   99 |         DiscountCodes.free.pagePriceAfterDiscount
  100 |       );
  101 |       await expect(showPage.mainContentLocator).toContainText(
  102 |         'Ingen betalnings behövs. Njut av din filmupplevelse!'
  103 |       );
  104 |     });
  105 |
  106 |     await test.step('Finish the purchase and control tickets', async () => {
  107 |       await showPage.finishWithoutPaying();
  108 |       //Make sure you end up on the receipt page and save the reference number for email verification later
  109 |       await expect(receiptPage.referensNumberTitleLabel).toContainText(
  110 |         'Referensnummer'
  111 |       );
  112 |       refNumber = await receiptPage.getReferenceNumber();
  113 |       await receiptPage.clickShowTickets();
  114 |       await expect(receiptPage.mainContentLocator).toContainText(
  115 |         'Antal biobiljetter:'
  116 |       );
  117 |       await receiptPage.backToStart();
  118 |       await expect(receiptPage.mainContentLocator).toContainText(
  119 |         'Vilken film vill du se?'
  120 |       );
  121 |     });
  122 |
  123 |     await test.step('Verify the verification email', async () => {
  124 |       // Extract text content from email without HTML tags
  125 |       const emailContent = await emailHelper.getEmailContent(
  126 |         testEmailAddress,
  127 |         timeFrom,
  128 |         namespace
  129 |       );
  130 |       if (!emailContent) {
  131 |         throw new Error('Email content not found.');
  132 |       }
  133 |       // Check that the email contains the correct reference number and price
  134 |       await expect(emailContent).toContain(refNumber);
  135 |       await expect(emailContent).toContain(
  136 |         DiscountCodes.free.mailPriceAfterDiscount
  137 |       );
  138 |     });
  139 |   });
  140 | });
  141 |
```