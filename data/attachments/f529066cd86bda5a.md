# Test info

- Name: Filmstaden Startpage >> Search Movies
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/StartPage.spec.ts:23:3

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('link', { name: 'rymdimperiet' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 10000ms
  - waiting for getByRole('link', { name: 'rymdimperiet' })

    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/StartPage.spec.ts:32:39
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/StartPage.spec.ts:29:5
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
  - heading "Vilken film vill du se?" [level=1]
  - text: 
  - textbox "Vilken film vill du se?": rymdimperiet
  - button ""
  - list "rymdimperiet":
    - listitem: Ingen träff! Vi kunde inte hitta någon film utifrån din sökning
  - heading "Filmer i Stockholm" [level=2]
  - checkbox "Aktuellt" [checked]
  - text: Aktuellt
  - checkbox "Barn och familj"
  - text: Barn och familj
  - checkbox "Klassiker"
  - text: Klassiker
  - checkbox "Genre"
  - text: Genre
  - checkbox "På bio nu"
  - text: På bio nu
  - checkbox "Biopasset"
  - text: Biopasset
  - button "Alla dagar "
  - button "Alla biografer "
  - list:
    - listitem:
      - img "En rövarhistoria - Klassiker"
      - img "En rövarhistoria - Klassiker"
      - link "En rövarhistoria - Klassiker":
        - /url: /film/en-rovarhistoria-klassiker/
      - button "Klassiker" [disabled]
      - text: Romantik
    - listitem:
      - img "A Working Man"
      - img "A Working Man"
      - link "A Working Man":
        - /url: /film/a-working-man/
      - text: Action
    - listitem:
      - img "Hundmannen"
      - img "Hundmannen"
      - link "Hundmannen":
        - /url: /film/hundmannen/
      - text: Familj
    - listitem:
      - heading "Filmstaden stöder Rosa Bandet" [level=3]:
        - link "Filmstaden stöder Rosa Bandet":
          - /url: /nyhet/rosa-bandet-pa-filmstaden/
      - paragraph: Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024. Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024. Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024. HejsanHoppsan.
    - listitem:
      - img "Filmen om Siw"
      - img "Filmen om Siw"
      - link "Filmen om Siw":
        - /url: /film/filmen-om-siw/
      - text: Biografi Smygpremiär idag
    - listitem:
      - 'img "Star Wars Episode III: Revenge of the Sith - Klassiker"'
      - 'img "Star Wars Episode III: Revenge of the Sith - Klassiker"'
      - 'link "Star Wars Episode III: Revenge of the Sith - Klassiker"':
        - /url: /film/star-wars-episode-iii-revenge-of-the-sith-klassiker/
      - button "Klassiker" [disabled]
      - text: Sci-Fi
    - listitem:
      - 'link "Terminator 2: Judgment Day - Klassiker"':
        - /url: /film/terminator-2-judgment-day-klassiker/
      - button "Klassiker" [disabled]
      - text: Action
  - button "Visa fler filmer"
  - heading "Topplistan i Stockholm" [level=2]
  - list:
    - listitem:
      - img "Det stora blå - Klassiker"
      - img "Det stora blå - Klassiker"
      - img
      - text: "01"
      - img
      - link "Det stora blå - Klassiker":
        - /url: /film/det-stora-bla-klassiker/
      - button "Klassiker" [disabled]
      - text: Äventyr
  - heading "Välj dag du vill gå på bio" [level=2]
  - radio "Idag 3 sep" [checked]
  - text: Idag 3 sep
  - radio "torsdag 4 sep"
  - text: torsdag 4 sep
  - radio "fredag 5 sep"
  - text: fredag 5 sep
  - radio "lördag 6 sep"
  - text: lördag 6 sep
  - radio "söndag 7 sep"
  - text: söndag 7 sep
  - radio "måndag 8 sep"
  - text: måndag 8 sep
  - radio "fredag 12 sep"
  - text: fredag 12 sep
  - checkbox "Grand Lidingö"
  - text: Grand Lidingö
  - checkbox "Grand Stockholm"
  - text: Grand Stockholm
  - checkbox "Heron City"
  - text: Heron City
  - checkbox "Kista"
  - text: Kista
  - checkbox "Rigoletto"
  - text: Rigoletto
  - checkbox "Råsunda"
  - text: Råsunda
  - checkbox "Saga"
  - text: Saga
  - checkbox "Scandinavia"
  - text: Scandinavia
  - checkbox "Sergel"
  - text: Sergel
  - checkbox "Sickla"
  - text: Sickla
  - checkbox "Skandia"
  - text: Skandia
  - checkbox "Sture"
  - text: Sture
  - checkbox "Söder"
  - text: Söder
  - checkbox "Täby"
  - text: Täby
  - checkbox "Victoria"
  - text: Victoria
  - checkbox "Vällingby"
  - text: Vällingby
  - checkbox "Alla" [checked]
  - text: Alla
  - link "På bio nu":
    - /url: /pa-bio-nu/?date=2025-09-03
  - heading "Utvalt" [level=2]
  - paragraph: Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024. Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024. Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024. HejsanHoppsan.
  - heading "Filmstaden stöder Rosa Bandet" [level=3]:
    - link "Filmstaden stöder Rosa Bandet":
      - /url: /nyhet/rosa-bandet-pa-filmstaden/
  - img "Det har gått nästan 20 år sedan den kritikerrosade publiksuccén Gladiator (2000) kom ut på bio med Russell Crowe i huvudrollen."
  - img "Det har gått nästan 20 år sedan den kritikerrosade publiksuccén Gladiator (2000) kom ut på bio med Russell Crowe i huvudrollen."
  - paragraph: Behöver du hjälp? Klicka här!
  - heading "Lyft din gladius och gör som Maximus! Kontakta Kundservice för frågor och svar" [level=3]:
    - link "Lyft din gladius och gör som Maximus! Kontakta Kundservice för frågor och svar":
      - /url: /kundservice/fragor-och-svar/kontakta-oss/
  - heading "Kommande filmer" [level=2]
  - list:
    - listitem:
      - img "Saw XI"
      - img "Saw XI"
      - link "Saw XI":
        - /url: /film/saw-xi/
      - text: Skräck Premiär 26 september
    - listitem:
      - img "Filmen om Siw"
      - img "Filmen om Siw"
      - link "Filmen om Siw":
        - /url: /film/filmen-om-siw/
      - text: Biografi Smygpremiär idag
    - listitem:
      - link "In the Mood for Love":
        - /url: /film/in-the-mood-for-love/
      - text: Drama Smygpremiär idag
    - listitem:
      - img "The Killer"
      - img "The Killer"
      - link "The Killer":
        - /url: /film/the-killer/
      - text: Action Smygpremiär idag
    - listitem:
      - link "A Better Tomorrow":
        - /url: /film/a-better-tomorrow/
      - text: Action Premiär 4 september
  - button "Visa fler filmer"
  - heading "Mer för bioälskare" [level=2]
  - list:
    - listitem:
      - link "Erbjudanden ":
        - /url: /erbjudanden/
      - link "Bioupplevelsen ":
        - /url: /bioupplevelsen/
      - link "Genres ":
        - /url: /genre/
      - link "Se det aktuella Klassiker-programmet ":
        - /url: /klassiker-pa-bio/
      - link "Filmarkivet ":
        - /url: /filmarkivet/
  - heading "Nyheter" [level=2]
  - list:
    - listitem:
      - 'heading "Biosvepet: Martina Haag regidebuterar, och Sveriges Oscarsbidrag är utsett" [level=3]':
        - 'link "Biosvepet: Martina Haag regidebuterar, och Sveriges Oscarsbidrag är utsett"':
          - /url: /nyhet/biosvepet-martina-haag-regidebuterar-och-sveriges-oscarsbidrag-ar-utsett/
      - paragraph: 28 augusti 2025
    - listitem:
      - heading "Köp presentkort - få 50% på valfri merchandise" [level=3]:
        - link "Köp presentkort - få 50% på valfri merchandise":
          - /url: /nyhet/kop-presentkort-fa-50-pa-valfri-merchandise/
      - paragraph: 15 augusti 2025
    - listitem:
      - heading "Medlemsvisning den 11 augusti – Se Materialists före alla andra" [level=3]:
        - link "Medlemsvisning den 11 augusti – Se Materialists före alla andra":
          - /url: /nyhet/medlemsvisning-den-11-augusti-se-materialists-fore-alla-andra/
      - paragraph: 4 augusti 2025
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
- text: Navigated to Vilken film vill du se?
- button "Open chat":
  - img
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { StartPage } from '../../pages/filmstaden_int/StartPage';
   3 | import { LandingPage } from '../../pages/filmstaden_int/Landingpage';
   4 | import { MoviePage } from '../../pages/filmstaden_int/MoviePage';
   5 | import { EnvironmentData } from '../../testData/environmentData';
   6 | import * as allure from 'allure-js-commons';
   7 |
   8 | test.describe.parallel('Filmstaden Startpage', () => {
   9 |   let startPage: any;
  10 |   let landingPage: any;
  11 |   let moviePage: any;
  12 |
  13 |   test.beforeEach(async ({ page }) => {
  14 |     landingPage = new LandingPage(page);
  15 |     startPage = new StartPage(page);
  16 |     moviePage = new MoviePage(page);
  17 |
  18 |     await page.goto('/');
  19 |     await landingPage.acceptCookies();
  20 |     await landingPage.selectStockholm();
  21 |   });
  22 |
  23 |   test('Search Movies', async ({ page }) => {
  24 |     await test.step('Initial setup of test specific variables and tags', async () => {
  25 |       await allure.epic('Start page');
  26 |       await allure.feature('Search Movies');
  27 |     });
  28 |
  29 |     await test.step('Search for a movie and verify that it is found', async () => {
  30 |       await startPage.searchMovie('rymdimperiet');
  31 |       let movieTitleLocator = await startPage.getMovieTitleLink('rymdimperiet');
> 32 |       await expect(movieTitleLocator).toBeVisible();
     |                                       ^ Error: Timed out 10000ms waiting for expect(locator).toBeVisible()
  33 |     });
  34 |
  35 |     await test.step('Click the search result and verify that it leads to the correct page', async () => {
  36 |       await startPage.clickMovieLink('rymdimperiet');
  37 |       await expect(async () => {
  38 |         await expect(moviePage.mainContentLocator).toContainText('Rymdimperiet');
  39 |         await expect(moviePage.readMoreButton).toBeVisible();
  40 |       }).toPass({ timeout: 10000 });
  41 |     });
  42 |
  43 |     await test.step('Go back to startpage, search for invalid movietitle and verify error message when no movie is found', async () => {
  44 |       await startPage.clickHome();
  45 |       await startPage.searchMovie('fhebsuipfsehf');
  46 |       await expect(async () => {
  47 |         await expect(startPage.errorMessageMovieSearch).toBeVisible();
  48 |       }).toPass({ timeout: 10000 });
  49 |     });
  50 |   });
  51 |
  52 |   test('Search Cities', async ({ page }) => {
  53 |     await test.step('Initial setup of test specific variables and tags', async () => {
  54 |       await allure.epic('Start page');
  55 |       await allure.feature('Search Cities');
  56 |     });
  57 |
  58 |     await test.step('Search for cities using the city picker and verify both positive and negative results', async () => {
  59 |       await startPage.clickCityPicker();
  60 |       await startPage.clearCitySearchField();
  61 |       await expect(startPage.citySearchSidearHeading).toContainText('Välj din biostad');
  62 |       await startPage.fillCitySearchField('fwaoifjawoi');
  63 |       await expect(startPage.citySearchNoResultsMessage).toContainText('Inga träffar');
  64 |       await startPage.fillCitySearchField('Alingsås');
  65 |       await expect(startPage.citySearchResults).toContainText('Alingsås');
  66 |     });
  67 |   });
  68 | });
  69 |
```