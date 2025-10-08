# Test info

- Name: test
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/codegen.spec.js:3:1

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('heading', { name: 'Det här presentkortet har fö' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 10000ms
  - waiting for getByRole('heading', { name: 'Det här presentkortet har fö' })

    at /home/runner/work/Playwright0.1/Playwright0.1/tests/codegen.spec.js:19:85
```

# Page snapshot

```yaml
- paragraph: ❤️‍🔥 Är ni redo, Swifties? ❤️‍🔥 För biljetter till konsertfilmer gäller ej rätt till återköp eller byte.
- link "❤️‍🔥 Är ni redo, Swifties? ❤️‍🔥 För biljetter till konsertfilmer gäller ej rätt till återköp eller byte.":
  - /url: /foretagsbiljetter/
- navigation:
  - link "temp logotype":
    - /url: /stockholm/
    - img "temp logotype"
  - link "På bio nu":
    - /url: /pa-bio-nu/
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
  - list:
    - listitem:
      - heading "Presentkort" [level=1]
      - paragraph: Ge bort en bioupplevelse till någon du bryr dig om. Ett presentkort på bio passar för alla tillfällen och är alltid lika uppskattat.
      - link "Köp digitala presentkort här":
        - /url: https://filmstaden.mbxp.se/
      - heading "Köp digitala presentkort" [level=2]
      - paragraph: Vårt digitala presentkort är perfekt för dig som kanske råkat glömma köpa present till kalaset, påskäggsutdelningen eller morsdagsdrinken som du ska till om ungefär 7 minuter. Att köpa en bioupplevelse till någon är alltid uppskattat och är kanske den bästa presenten som går att få.
      - paragraph: Presentkortet levereras via mail eller sms direkt efter köp. Pengarna på presentkortet kan användas till biobiljetter, popcorn, godis och mycket mer hos Filmstaden, Svenska Bio och Cinemascenen. Ett digitalt presentkort är giltigt i två år från inköpsdatum.
      - heading "Fysiska presentkort" [level=1]
      - paragraph: Snart kan du även köpa fysiska presentkort via vår webb, men inte riktigt än. Det går att köpa fysiska presentkort på alla våra biografer samt på Pressbyrån, 7-Eleven, Cirkle K, Willys, Willys-Hemma och Coop i hela landet, samt på utvalda ICA, Hemköp och Direkten.
    - listitem
  - text: Har du redan ett presentkort och vill kolla saldo?
  - paragraph: Skriv in presentskortets nummer för att se saldo.
  - textbox "Har du redan ett presentkort och vill kolla saldo?": "20051295717"
  - button "Visa saldo"
  - dialog
  - dialog:
    - heading "Något gick fel" [level=3]
    - button ""
    - heading "Ett okänt fel uppstod när informationen skulle hämtas laddades." [level=5]
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
    - listitem:
      - link "Cookieinställningar":
        - /url: "#"
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
- text: Navigated to Presentkort
- button "Open chat":
  - img
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('test', async ({ page }) => {
   4 |   await page.goto('https://sv-sit-marvel.filmstaden.se/');
   5 |   //Landingpage
   6 |   await page.getByRole('button', { name: 'Yes it’s okay' }).click();
   7 |   await page.getByRole('link', { name: 'Stockholm' }).first().click();
   8 |   //Startpage
   9 |   await page.getByRole('button', { name: 'Mer ' }).click();
  10 |   await page.getByRole('link', { name: 'Presentkort', exact: true }).click();
  11 |   //Presentkortpage
  12 |   await page.getByRole('textbox', { name: 'Har du redan ett presentkort' }).fill('fgsdfsdfsd');
  13 |   await page.getByRole('button', { name: 'Visa saldo' }).click();
  14 |   await expect(page.getByRole('heading', { name: 'Kortet kan inte hittas' })).toBeVisible();
  15 |   await page.getByRole('button', { name: '' }).click();
  16 |   await page.getByRole('textbox', { name: 'Har du redan ett presentkort' }).fill('');
  17 |   await page.getByRole('textbox', { name: 'Har du redan ett presentkort' }).fill('20051295717');
  18 |   await page.getByRole('button', { name: 'Visa saldo' }).click();
> 19 |   await expect(page.getByRole('heading', { name: 'Det här presentkortet har fö' })).toBeVisible();
     |                                                                                     ^ Error: Timed out 10000ms waiting for expect(locator).toBeVisible()
  20 | });
  21 |
```