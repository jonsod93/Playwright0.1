# Test info

- Name: Unauthenticated Card Purchase Tests >> Card purchase successful
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/cardPurchase.spec.js:33:3

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toContainText(expected)

Locator: locator('//h6[normalize-space()=\'Referensnummer\']')
Expected string: "Referensnummer"
Received: <element(s) not found>
Call log:
  - expect.toContainText with timeout 10000ms
  - waiting for locator('//h6[normalize-space()=\'Referensnummer\']')
    - waiting for" https://test.epayment.nets.eu/Terminal/default.aspx?merchantId=436785&transactionId=fc817a08e7594461aa28ff24ca0a3ebf" navigation to finish...
    - navigated to "https://sv-sit-marvel.filmstaden.se/bokning/kvitto-svenska-bio/?showId=8cd0ce66-b264-4d78-968c-d47b0c5fb207&rid=ec7d6404-bd18-4434-b903-6db960b6d322&payment=PAYMENTCARD&transactionId=fc817a08e7594461…"


Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/cardPurchase.spec.js:68:10
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/cardPurchase.spec.js:63:16
```

# Page snapshot

```yaml
- navigation:
  - link "Svenska bio logotyp":
    - /url: /stockholm/
    - img "Svenska bio logotyp"
  - link "Upptäck":
    - /url: /stockholm/
  - button "Gå på bio "
  - button "Mer "
  - button "Stockholm"
- main:
  - heading "Tack för din order" [level=1]
  - text: Vi ses i biomörkret!
  - heading "Biljetter och orderbekräftelse har skickats till" [level=2]
  - paragraph: phox.warlock7@mailinator.com
  - heading "Referensnummer" [level=2]
  - paragraph: DYLXEBBCFBSU
  - paragraph: Observera att du inte får medlemspoäng för besök i denna biograf.
  - link "Visa biljetter":
    - /url: /bokning/mina-e-biljetter/?reference=DYLXEBBCFBSU
  - heading "Liknande filmer" [level=2]
  - list:
    - listitem:
      - img "Ballerina"
      - img "Ballerina"
      - link "Ballerina":
        - /url: /film/ballerina/
    - listitem:
      - img "F1"
      - img "F1"
      - link "F1":
        - /url: /film/f1/
    - listitem:
      - img "Jurassic World Rebirth"
      - img "Jurassic World Rebirth"
      - link "Jurassic World Rebirth":
        - /url: /film/jurassic-world-rebirth/
    - listitem:
      - link "Superman":
        - /url: /film/superman/
    - listitem:
      - img "Akira - Klassiker"
      - img "Akira - Klassiker"
      - link "Akira - Klassiker":
        - /url: /film/akira-klassiker/
    - listitem:
      - img "Greenland"
      - img "Greenland"
      - link "Greenland":
        - /url: /film/greenland/
    - listitem:
      - img "Honest Thief"
      - img "Honest Thief"
      - link "Honest Thief":
        - /url: /film/honest-thief/
    - listitem:
      - img "Rymdimperiet slår tillbaka - Klassiker"
      - img "Rymdimperiet slår tillbaka - Klassiker"
      - link "Rymdimperiet slår tillbaka - Klassiker":
        - /url: /film/rymdimperiet-slar-tillbaka-klassiker/
- contentinfo:
  - heading "Gäster" [level=2]
  - list:
    - listitem:
      - link "Kundservice":
        - /url: /svenska-bio/kundservice/fragor-och-svar/
    - listitem:
      - link "Grupp- eller rullstolsbokning":
        - /url: /svenska-bio/kundservice/fragor-och-svar/svenska-bio/grupp-eller-rullstolsbokning/
    - listitem:
      - link "Läs mer om Filmpanelen ":
        - /url: https://site.panels.synoint.com/filmpanelen/?utm_campaign=webpage_footer
    - listitem:
      - link "Alla våra biostäder":
        - /url: /alla-biostader/
    - listitem:
      - link "Alla våra biografer":
        - /url: /biografer/
  - heading "Företag" [level=2]
  - list:
    - listitem:
      - link "Event & Konferens":
        - /url: /svenska-bio/event-och-konferens/
    - listitem:
      - link "Om Svenska Bio":
        - /url: /om-svenska-bio/
    - listitem:
      - link "Bioreklam":
        - /url: /om-svenska-bio/bioreklam/
  - heading "Personuppgifter" [level=2]
  - list:
    - listitem:
      - link "Personuppgiftspolicy":
        - /url: /svenska-bio/kundservice/fragor-och-svar/svenska-bio/villkor-och-policies/svenska-bio/villkor-och-policies/personuppgiftspolicy/
    - listitem:
      - link "Dina rättigheter":
        - /url: /svenska-bio/kundservice/fragor-och-svar/svenska-bio/villkor-och-policies/svenska-bio/villkor-och-policies/dina-rattigheter/
    - listitem:
      - link "Cookiepolicy":
        - /url: /svenska-bio/kundservice/fragor-och-svar/svenska-bio/villkor-och-policies/svenska-bio/villkor-och-policies/cookiepolicy/
  - heading "Sociala medier" [level=2]
  - list:
    - listitem:
      - link "Facebook ":
        - /url: https://www.facebook.com/svenskabio/
    - listitem:
      - link "Instagram ":
        - /url: https://www.instagram.com/svenskabio/
  - separator
  - img "Svenska bio logotyp"
  - paragraph: Svenska Bio ©2021.
- button "Open chat":
  - img
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
  10 | import * as allure from 'allure-js-commons';
  11 |
  12 | test.describe.parallel('Unauthenticated Card Purchase Tests', () => {
  13 |   let landingPage;
  14 |   let startPage;
  15 |   let moviePage;
  16 |   let showPage;
  17 |   let netsPage;
  18 |   let receiptPage;
  19 |
  20 |   test.beforeEach(async ({ page }) => {
  21 |     landingPage = new LandingPage(page);
  22 |     startPage = new StartPage(page);
  23 |     moviePage = new MoviePage(page);
  24 |     showPage = new ShowPage(page);
  25 |     netsPage = new NetsPage(page);
  26 |     receiptPage = new ReceiptPage(page);
  27 |
  28 |     await page.goto('/');
  29 |     await landingPage.acceptCookies();
  30 |     await landingPage.selectStockholm();
  31 |   });
  32 |
  33 |   test('Card purchase successful', async ({ page }) => {
  34 |     await test.step('Initial setup of variables and tags', async () => {
  35 |       await allure.epic('Purchases');
  36 |       await allure.feature('Successful Card Purchase');
  37 |     });
  38 |
  39 |     await test.step('Navigate to a movie with shows', async () => {
  40 |       await startPage.selectRandomMovie();
  41 |       await moviePage.selectFirstAvailableShowtime(
  42 |         startPage.selectRandomMovie.bind(startPage)
  43 |       );
  44 |     });
  45 |
  46 |     await test.step('Select 1 ticket and fill in required fields', async () => {
  47 |       await showPage.selectOneTicket();
  48 |       await expect(showPage.amountOfTicketsLabel).toContainText('1 st');
  49 |       await showPage.fillEmail(TestUser.email);
  50 |       await showPage.acceptAgeLimit();
  51 |       await showPage.startPayment();
  52 |     });
  53 |
  54 |     await test.step('Make the purchase at Nets', async () => {
  55 |       await netsPage.completePayment(
  56 |         ValidVisa.number,
  57 |         ValidVisa.month,
  58 |         ValidVisa.year,
  59 |         ValidVisa.CVC
  60 |       );
  61 |     });
  62 |
  63 |     await test.step('Control that you end up on the receiptpage', async () => {
  64 |       await expect(async () => {
  65 |         await expect(receiptPage.referensNumberTitleLabel).toContainText(
  66 |           'Referensnummer'
  67 |         );
> 68 |       }).toPass({ timeout: 15000 });
     |          ^ Error: Timed out 10000ms waiting for expect(locator).toContainText(expected)
  69 |     });
  70 |   });
  71 |
  72 |   test('No Email Error', async ({ page }) => {
  73 |     await allure.epic('Purchases');
  74 |     await allure.feature('No Email in checkout');
  75 |
  76 |     await test.step('Navigate to a suitable movie', async () => {
  77 |       await startPage.selectRandomMovie();
  78 |       await moviePage.selectFirstAvailableShowtime(
  79 |         startPage.selectRandomMovie.bind(startPage)
  80 |       );
  81 |     });
  82 |
  83 |     await test.step('Select 1 ticket and fill in necessary fields', async () => {
  84 |       await showPage.acceptAgeLimit();
  85 |       await showPage.startPayment();
  86 |       await expect(async () => {
  87 |         await expect(
  88 |           page.locator(
  89 |             "//div[contains(text(),'Felaktigt format på e-postadress')]"
  90 |           )
  91 |         ).toContainText('Felaktigt format på e-postadress');
  92 |       }).toPass({ timeout: 5000 });
  93 |     });
  94 |   });
  95 | });
  96 |
```