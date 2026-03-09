# Test info

- Name: test
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/codegen.spec.js:3:1

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Visa saldo' })
    - locator resolved to <button disabled type="submit" class="relative *:focus-visible:outline *:focus-visible:outline-2 *:focus-visible:outline-offset-2 disabled:cursor-not-allowed duration-200 transition-colors ease-out  rounded-full *:rounded-full font-bold h-[2.75rem] text-base outline-none outline-1 -outline-offset-1 outline-input text hover:outline-2 hover:outline-border-strong hover:bg-weak focus-visible:bg-weak focus-visible:outline-input focus-visible:-outline-offset-1 focus-visible:outline-1 active:outline-2 active…>…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not enabled
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

    at /home/runner/work/Playwright0.1/Playwright0.1/tests/codegen.spec.js:13:58
```

# Page snapshot

```yaml
- paragraph: ❤️‍🔥 Är ni redo, Swifties? ❤️‍🔥 För biljetter till konsertfilmer gäller ej rätt till återköp eller byte.
- link "❤️‍🔥 Är ni redo, Swifties? ❤️‍🔥 För biljetter till konsertfilmer gäller ej rätt till återköp eller byte.":
  - /url: /foretagsbiljetter/
- navigation:
  - link "Filmstaden logotype":
    - /url: /stockholm/
    - img "Filmstaden logotype"
  - link "På bio nu":
    - /url: /pa-bio-nu/
  - button "Gå på bio "
  - link "Medlemsskapet":
    - /url: /medlem/
  - link "Företag":
    - /url: /foretag/
  - button "Mer "
  - link "Logga in menuitem logo Logga in":
    - /url: https://inte-services.cinema-api.com/redirect/externalSignUpOrIn/se?redirectUrl=https://sv-sit-marvel.filmstaden.se/mina-sidor/
    - text: Logga in
    - img "menuitem logo Logga in"
  - button "Stockholm"
- main:
  - heading "Vilken film vill du se?" [level=1]
  - text: 
  - textbox "Vilken film vill du se?"
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
  - checkbox "Stickbio"
  - text: Stickbio
  - button "Alla dagar "
  - button "Alla biografer "
  - list:
    - listitem:
      - link "Five Nights at Freddy's 2":
        - /url: /film/five-nights-at-freddys-2/
      - text: Skräck
    - listitem:
      - img "Stargate - en julberättelse"
      - img "Stargate - en julberättelse"
      - link "Stargate - en julberättelse":
        - /url: /film/stargate-en-julberattelse/
      - text: Drama
    - listitem:
      - img "Egghead Republic"
      - img "Egghead Republic"
      - link "Egghead Republic":
        - /url: /film/egghead-republic/
      - text: Sci-Fi
    - listitem:
      - heading "Eternity – på bio från 28 november" [level=3]:
        - link "Eternity – på bio från 28 november":
          - /url: https://www.filmstaden.se/film/eternity/
      - paragraph: Vem skulle du vilja ta med dig in i evigheten?
    - listitem:
      - img "Mästaren och Margarita"
      - img "Mästaren och Margarita"
      - link "Mästaren och Margarita":
        - /url: /film/mastaren-och-margarita/
      - text: Drama
    - listitem:
      - 'img "Sisu: Road to Revenge"'
      - 'img "Sisu: Road to Revenge"'
      - 'link "Sisu: Road to Revenge"':
        - /url: /film/sisu-road-to-revenge/
      - text: Action
    - listitem:
      - img "Regnmannen"
      - img "Regnmannen"
      - link "Regnmannen":
        - /url: /film/regnmannen/
      - button "50% med Biopasset" [disabled]
      - text: Drama
  - button "Visa fler filmer"
  - heading "Topplistan i Stockholm" [level=2]
  - list:
    - listitem:
      - img "Vermiglio - en familjekrönika från alperna"
      - img "Vermiglio - en familjekrönika från alperna"
      - img
      - text: "01"
      - img
      - link "Vermiglio - en familjekrönika från alperna":
        - /url: /film/vermiglio-en-familjekronika-fran-alperna/
      - text: Drama
    - listitem:
      - img "Mästaren och Margarita"
      - img "Mästaren och Margarita"
      - img
      - text: "02"
      - img
      - link "Mästaren och Margarita":
        - /url: /film/mastaren-och-margarita/
      - text: Drama
    - listitem:
      - img "Tere Ishk Mein"
      - img "Tere Ishk Mein"
      - img
      - text: "03"
      - img
      - link "Tere Ishk Mein":
        - /url: /film/tere-ishk-mein/
      - text: Romantik
    - listitem:
      - img "Operation bäver"
      - img "Operation bäver"
      - img
      - text: "04"
      - img
      - link "Operation bäver":
        - /url: /film/operation-baver/
      - text: Familj
    - listitem:
      - img "120 Bahadur"
      - img "120 Bahadur"
      - img
      - text: "05"
      - img
      - link "120 Bahadur":
        - /url: /film/120-bahadur/
      - text: Action
    - listitem:
      - img "Bert sabbar allt"
      - img "Bert sabbar allt"
      - img
      - text: "06"
      - img
      - link "Bert sabbar allt":
        - /url: /film/bert-sabbar-allt/
      - text: Komedi
    - listitem:
      - img
      - text: "07"
      - img
      - link "Good Boy":
        - /url: /film/good-boy/
      - text: Skräck
    - listitem:
      - img
      - text: "08"
      - img
      - 'link "Jujutsu Kaisen: Execution"':
        - /url: /film/jujutsu-kaisen-execution/
      - text: Anime
    - listitem:
      - 'img "Wicked: For Good"'
      - 'img "Wicked: For Good"'
      - img
      - text: "09"
      - img
      - 'link "Wicked: For Good"':
        - /url: /film/wicked-for-good/
      - text: Äventyr
    - listitem:
      - img
      - text: "10"
      - img
      - 'link "Chainsaw Man - The Movie: Reze Arc"':
        - /url: /film/chainsaw-man-the-movie-reze-arc/
      - text: Anime
  - button "Visa fler filmer"
  - heading "Välj dag du vill gå på bio" [level=2]
  - radio "Idag 9 mar" [checked]
  - text: Idag 9 mar
  - radio "tisdag 10 mar"
  - text: tisdag 10 mar
  - radio "onsdag 11 mar"
  - text: onsdag 11 mar
  - radio "torsdag 12 mar"
  - text: torsdag 12 mar
  - radio "fredag 13 mar"
  - text: fredag 13 mar
  - radio "lördag 14 mar"
  - text: lördag 14 mar
  - radio "söndag 15 mar"
  - text: söndag 15 mar
  - radio "måndag 16 mar"
  - text: måndag 16 mar
  - radio "tisdag 31 mar"
  - text: tisdag 31 mar
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
    - /url: /pa-bio-nu/?date=2026-03-09
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
      - link "How to Make a Killing":
        - /url: /film/how-to-make-a-killing/
      - text: Thriller Premiär 13 mars
    - listitem:
      - img "Labyrinth"
      - img "Labyrinth"
      - link "Labyrinth":
        - /url: /film/labyrinth/
      - text: Fantasy Premiär 13 mars
    - listitem:
      - img "Minnen av honom"
      - img "Minnen av honom"
      - link "Minnen av honom":
        - /url: /film/minnen-av-honom/
      - text: Romantik Premiär 13 mars
    - listitem:
      - link "V för Vendetta - Klassiker":
        - /url: /film/v-for-vendetta-klassiker/
      - button "Klassiker" [disabled]
      - text: Action Premiär 17 mars
    - listitem:
      - 'img "Billie Eilish - Hit Me Hard and Soft: The Tour"'
      - 'img "Billie Eilish - Hit Me Hard and Soft: The Tour"'
      - 'link "Billie Eilish - Hit Me Hard and Soft: The Tour"':
        - /url: /film/billie-eilish-hit-me-hard-and-soft-the-tour/
      - text: Musik Premiär 20 mars
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
      - 'heading "An offer you can''t refuse: Se biopublikens mest önskade klassiker" [level=3]':
        - 'link "An offer you can''t refuse: Se biopublikens mest önskade klassiker"':
          - /url: /nyhet/an-offer-you-cant-refuse-se-biopublikens-mest-onskade-klassiker/
      - paragraph: 9 januari 2026
    - listitem:
      - heading "Vinn ett helt år på bio!" [level=3]:
        - link "Vinn ett helt år på bio!":
          - /url: /nyhet/vinn-ett-helt-ar-pa-bio/
      - paragraph: 19 december 2025
    - listitem:
      - 'heading "Medlemserbjudande: Anaconda Combo" [level=3]':
        - 'link "Medlemserbjudande: Anaconda Combo"':
          - /url: /nyhet/medlemserbjudande-anaconda-combo/
      - paragraph: 19 december 2025
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
    - listitem:
      - link "Test-sida":
        - /url: /test/
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
- text: Navigated to Vilken film vill du se?
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
> 13 |   await page.getByRole('button', { name: 'Visa saldo' }).click();
     |                                                          ^ Error: locator.click: Test timeout of 60000ms exceeded.
  14 |   await expect(page.getByRole('heading', { name: 'Kortet kan inte hittas' })).toBeVisible();
  15 |   await page.getByRole('button', { name: '' }).click();
  16 |   await page.getByRole('textbox', { name: 'Har du redan ett presentkort' }).fill('');
  17 |   await page.getByRole('textbox', { name: 'Har du redan ett presentkort' }).fill('20051295717');
  18 |   await page.getByRole('button', { name: 'Visa saldo' }).click();
  19 |   await expect(page.getByRole('heading', { name: 'Det här presentkortet har fö' })).toBeVisible();
  20 | });
  21 |
```