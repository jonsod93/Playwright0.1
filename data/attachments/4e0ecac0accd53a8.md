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
    - waiting for" https://test.epayment.nets.eu/Terminal/default.aspx?merchantId=436756&transactionId=207c3e79f8a54638afe58f30f8b47e99" navigation to finish...
    - navigated to "https://sv-sit-marvel.filmstaden.se/bokning/kvitto-filmstaden/?showId=c2e0d5ad-2770-4d18-a84d-3c051687d212&rid=8b007b02-761c-40c1-ad81-e327916ed59a&payment=PAYMENTCARD&transactionId=207c3e79f8a54638a…"


Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/cardPurchase.spec.js:68:10
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/cardPurchase.spec.js:63:16
```

# Page snapshot

```yaml
- navigation:
  - link "temp logotype":
    - /url: /stockholm/
    - img "temp logotype"
  - link "Upptäck":
    - /url: /stockholm/
  - button "Gå på bio "
  - link "Medlemsskapet":
    - /url: /medlem/
  - button "Mer "
  - link "Logga in menuitem logo Logga in":
    - /url: https://inte-services.cinema-api.com/redirect/externalSignUpOrIn/se?redirectUrl=https://sv-sit-marvel.filmstaden.se/mina-sidor/
    - text: Logga in
    - img "menuitem logo Logga in"
  - button "Stockholm"
- main:
  - dialog:
    - heading "Betalningen kunde inte genomföras" [level=3]
    - button ""
    - heading "Banken godkände inte transaktionen." [level=5]
- contentinfo:
  - heading "Om oss" [level=2]
  - list:
    - listitem:
      - link "Jobba hos oss ":
        - /url: https://jobb.filmstaden.se/
    - listitem:
      - link "Press ":
        - /url: https://www.mynewsdesk.com/se/filmstaden-ab/
    - listitem:
      - link "Om Filmstaden":
        - /url: /kundservice/fragor-och-svar/fragor-och-svar/om-filmstaden/
    - listitem:
      - link "Filmpanelen":
        - /url: /filmpanelen/
    - listitem:
      - link "Alla våra biostäder":
        - /url: /alla-biostader/
    - listitem:
      - link "Alla våra biografer":
        - /url: /biografer/
  - heading "För företag" [level=2]
  - list:
    - listitem:
      - link "Företagsbiljetter":
        - /url: /foretagsbiljetter/
    - listitem:
      - link "Möten & Event ":
        - /url: https://moten.filmstaden.se/
    - listitem:
      - link "Bioreklam ":
        - /url: https://media.filmstaden.se/
    - listitem:
      - link "Föreningsbiljetten":
        - /url: /foreningsbiljetten/
  - heading "Hjälp & kontakt" [level=2]
  - list:
    - listitem:
      - link "Kundservice":
        - /url: /kundservice/fragor-och-svar/
    - listitem:
      - link "Tillgänglig bio":
        - /url: /tillganglig-bio/
    - listitem:
      - link "Personuppgiftspolicy":
        - /url: /kundservice/fragor-och-svar/villkor-och-policies/personuppgiftspolicy/
    - listitem:
      - link "Cookiepolicy":
        - /url: /kundservice/fragor-och-svar/villkor-och-policies/cookiepolicy/
    - listitem:
      - link "Kontakta oss":
        - /url: /kundservice/kontakta-oss/
  - heading "Sociala medier" [level=2]
  - list:
    - listitem:
      - link "Instagram ":
        - /url: https://www.instagram.com/filmstaden_ab/
    - listitem:
      - link "Facebook ":
        - /url: https://www.facebook.com/filmstadenab
    - listitem:
      - link "LinkedIn ":
        - /url: https://se.linkedin.com/company/filmstaden
  - separator
  - img "Filmstaden logotype"
  - paragraph: Filmstaden ©2021. En del av Odeon Cinemas Group
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