# Test info

- Name: Tests for the Showpage >> Saloninfo verification
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/showPage.spec.ts:26:3

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toContainText(expected)

Locator: locator('xpath=(//div[contains(@class,\'relative flex flex-col gap-24 rounded-2xl p-24 md:p-[2.5rem]\')])[1]')
Expected string: "Salongsinformation"
Received: <element(s) not found>
Call log:
  - expect.toContainText with timeout 10000ms
  - waiting for locator('xpath=(//div[contains(@class,\'relative flex flex-col gap-24 rounded-2xl p-24 md:p-[2.5rem]\')])[1]')

    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/showPage.spec.ts:45:44
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/showPage.spec.ts:38:5
```

# Page snapshot

```yaml
- main:
  - link "Filmstaden logotype":
    - /url: /stockholm/
    - img "Filmstaden logotype"
  - text: "Standard Rad 5, Plats 73 Ordinarie 179.00 kr Premium Rad 5, Plats 74 Ordinarie 209.00 kr 3D-glasögon 2 st 40.00 kr Summa: 428.00 kr Syntolkning via app, XL - vår största duk"
  - heading "Superman" [level=1]
  - text: Eng tal, Sve text I dag 4 nov, kl 12:00 Filmstaden Täby, Salong 5
  - link "Logga in och samla poäng":
    - /url: https://inte-services.cinema-api.com/redirect/externalSignUpOrIn/se?redirectUrl=https://sv-sit-marvel.filmstaden.se/bokning/kop/200f1ec6-dcb2-4f3f-a3ec-df9d5e424389/
  - button ""
  - heading "Rubrik" [level=4]
  - paragraph: Nu kan du få det! Det enda du behöver göra är att köpa en biljett och bla bla bla bla bla bla och du har chans att vinna!
  - paragraph:
    - link "Läs mer om villkoren här":
      - /url: /familj/barnens-biodag-pa-filmstaden/
  - heading "Servering" [level=4]
  - paragraph: Njut en god drink eller en kall öl från vår barmeny medan du tittar på filmen. Kom ihåg att åldersgränsen för inträde är 18 år.
  - heading "Välj antal biljetter" [level=2]
  - paragraph: Ordinarie
  - button "-": 
  - spinbutton "Ordinarie" [disabled]: "2"
  - button "+": 
  - paragraph: Pensionär
  - paragraph: Pensionärserbjudande - 10% rabatt
  - button "-" [disabled]: 
  - spinbutton "Pensionär" [disabled]: "0"
  - button "+": 
  - heading "Välj antal 3D-glasögon" [level=2]
  - paragraph: 3D-glasögon
  - paragraph: 20 kr/st
  - button "-": 
  - spinbutton "3D-glasögon" [disabled]: "2"
  - button "+" [disabled]: 
  - heading "Välj platser" [level=2]
  - text: Rad 5, Plats 73,74
  - img
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - img
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Rad 5, Plats 73,74"
  - checkbox "Välj skilda platser"
  - text: Välj skilda platser
  - img
  - text: Ditt val
  - img
  - text: Upptagen
  - img
  - text: Rullstol Standard
  - img
  - text: Plus
  - img
  - text: VIP
  - img
  - text: Recliner
  - img
  - text: Recliner+
  - img
  - text: Premium
  - img
  - text: Daybed Soffa
  - button "Salongsinformation"
  - dialog:
    - heading "Salongsinformation" [level=3]
    - button ""
    - paragraph: "Salongen har 162 platser på 10 rader. Gång finns på båda sidorna av salongen och lutningen är god. Dukstorlek: 13,7m x 5,7m. Plusstolar finns på rad 7 (40 kr extra/stol), VIP-stolar finns på rad 10 (70 kr extra/stol). Salongen har digitalt 7.1 ljud."
    - paragraph: Salongen är anpassad för rullstol och har hörslingor med SLS-teknik. För reservation av rullstolsplatser, ring 08-56 26 00 00.
    - button "Stäng"
  - dialog
  - dialog
  - dialog
  - heading "Använd rabattkod" [level=2]
  - text: Rabatt- och biljettkoder, biokort samt biopasset.
  - button "Lös in in rabattkod"
  - dialog
  - heading "Biljettleverans" [level=2]
  - paragraph: För biljetter och bokningsbekräftelse.
  - text: Ange en e-postadress
  - textbox "Ange en e-postadress"
  - heading "Betalning" [level=2]
  - paragraph: All data krypteras
  - separator
  - heading "Använd presentkort" [level=3]
  - text: Har du ett presentkort? Använd den för ditt köp.
  - button "Lös in ditt presentkortsnummer"
  - separator
  - dialog
  - heading "Välj betalsätt" [level=3]
  - list:
    - listitem:
      - radio "Kort" [checked]
      - text: Kort
    - listitem:
      - radio "Swish"
      - text: Swish
  - separator
  - checkbox "Jag är medveten om att filmen är tillåten från 11 år. Barn som har fyllt 7 år får dock medfölja i vuxens (18 år) sällskap."
  - paragraph: Jag är medveten om att filmen är tillåten från 11 år. Barn som har fyllt 7 år får dock medfölja i vuxens (18 år) sällskap.
  - button "Fortsätt till kortbetalning"
  - paragraph:
    - text: Genom att fortsätta godkänner du
    - link "Filmstadens köpvillkor":
      - /url: /kundservice/fragor-och-svar/villkor-och-policies/filmstadens-kopvillkor/
    - text: .
  - paragraph:
    - text: Läs om hur vi värnar om din integritet i
    - link "Filmstadens personuppgiftspolicy":
      - /url: /kundservice/fragor-och-svar/villkor-och-policies/personuppgiftspolicy/
  - dialog
  - dialog
- text: Navigated to Se "Superman" på bio - Köp biobiljett online | Filmstaden
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
  26 |   test('Saloninfo verification', async ({ page }) => {
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
> 45 |       await expect(showPage.dialogLocator).toContainText('Salongsinformation');
     |                                            ^ Error: Timed out 10000ms waiting for expect(locator).toContainText(expected)
  46 |       await showPage.closeSalonInformationButton();
  47 |     });
  48 |   });
  49 | });
  50 |
```