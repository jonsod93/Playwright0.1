# Test info

- Name: Unauthenticated Card Purchase Tests >> Card purchase successful
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/cardPurchase.spec.js:33:3

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('div[class=\'group/poster\']').nth(6)
    - locator resolved to <div class="group/poster">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    102 × waiting for element to be visible, enabled and stable
        - element is not visible
      - retrying click action
        - waiting 500ms

    at StartPage.selectRandomMovie (/home/runner/work/Playwright0.1/Playwright0.1/pages/filmstaden_int/StartPage.ts:45:46)
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/cardPurchase.spec.js:40:23
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/purchases/cardPurchase.spec.js:39:16
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
  - button "Alla dagar "
  - button "Alla biografer "
  - list:
    - listitem:
      - img "Babyteeth"
      - img "Babyteeth"
      - link "Babyteeth":
        - /url: /film/babyteeth/
      - text: Komedi
    - listitem:
      - img "Guardians of the Galaxy Vol. 3"
      - img "Guardians of the Galaxy Vol. 3"
      - link "Guardians of the Galaxy Vol. 3":
        - /url: /film/guardians-of-the-galaxy-vol-3/
      - text: Action
    - listitem:
      - img "The Secrets We Keep"
      - img "The Secrets We Keep"
      - link "The Secrets We Keep":
        - /url: /film/the-secrets-we-keep/
      - text: Drama
    - listitem:
      - heading "Filmstaden stöder Rosa Bandet" [level=3]:
        - link "Filmstaden stöder Rosa Bandet":
          - /url: /nyhet/rosa-bandet-pa-filmstaden/
      - paragraph: Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024. Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024. Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024. HejsanHoppsan.
    - listitem:
      - img "Familjen Bigfoot"
      - img "Familjen Bigfoot"
      - link "Familjen Bigfoot":
        - /url: /film/familjen-bigfoot/
      - text: Komedi
    - listitem:
      - img "Toy Story 4"
      - img "Toy Story 4"
      - link "Toy Story 4":
        - /url: /film/toy-story-4/
      - text: Animerat
    - listitem:
      - img "Röjar-Ralf kraschar internet"
      - img "Röjar-Ralf kraschar internet"
      - link "Röjar-Ralf kraschar internet":
        - /url: /film/rojar-ralf-kraschar-internet/
      - text: Animerat
  - button "Visa fler filmer"
  - heading "Topplistan i Stockholm" [level=2]
  - list:
    - listitem:
      - img "Babyteeth"
      - img "Babyteeth"
      - img
      - text: "01"
      - img
      - link "Babyteeth":
        - /url: /film/babyteeth/
      - text: Komedi
    - listitem:
      - img "Guardians of the Galaxy Vol. 3"
      - img "Guardians of the Galaxy Vol. 3"
      - img
      - text: "02"
      - img
      - link "Guardians of the Galaxy Vol. 3":
        - /url: /film/guardians-of-the-galaxy-vol-3/
      - text: Action
    - listitem:
      - img "Toy Story 4"
      - img "Toy Story 4"
      - img
      - text: "03"
      - img
      - link "Toy Story 4":
        - /url: /film/toy-story-4/
      - text: Animerat
    - listitem:
      - img "Mästerdetektiven Sherlock Gnomes"
      - img "Mästerdetektiven Sherlock Gnomes"
      - img
      - text: "04"
      - img
      - link "Mästerdetektiven Sherlock Gnomes":
        - /url: /film/masterdetektiven-sherlock-gnomes/
      - text: Animerat
    - listitem:
      - img "Emil i Lönneberga - Klassiker"
      - img "Emil i Lönneberga - Klassiker"
      - img
      - text: "05"
      - img
      - link "Emil i Lönneberga - Klassiker":
        - /url: /film/emil-i-lonneberga-klassiker/
      - text: Familj
    - listitem:
      - img "Antebellum"
      - img "Antebellum"
      - img
      - text: "06"
      - img
      - link "Antebellum":
        - /url: /film/antebellum/
      - text: Skräck
    - listitem:
      - img "Spring Uje spring"
      - img "Spring Uje spring"
      - img
      - text: "07"
      - img
      - link "Spring Uje spring":
        - /url: /film/spring-uje-spring/
      - text: Drama
    - listitem:
      - img "Summerland"
      - img "Summerland"
      - img
      - text: "08"
      - img
      - link "Summerland":
        - /url: /film/summerland/
      - text: Drama
    - listitem:
      - img "A Clockwork Orange - Klassiker"
      - img "A Clockwork Orange - Klassiker"
      - img
      - text: "09"
      - img
      - link "A Clockwork Orange - Klassiker":
        - /url: /film/a-clockwork-orange-klassiker/
      - text: Drama
    - listitem:
      - img "Katternas rike - Klassiker"
      - img "Katternas rike - Klassiker"
      - img
      - text: "10"
      - img
      - link "Katternas rike - Klassiker":
        - /url: /film/katternas-rike-klassiker/
      - text: Animerat
  - button "Visa fler filmer"
  - heading "Välj dag du vill gå på bio" [level=2]
  - radio "Idag 29 aug" [checked]
  - text: Idag 29 aug
  - radio "lördag 30 aug"
  - text: lördag 30 aug
  - radio "söndag 31 aug"
  - text: söndag 31 aug
  - radio "måndag 1 sep"
  - text: måndag 1 sep
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
    - /url: /pa-bio-nu/?date=2025-08-29
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
      - img "Gaucho Gaucho"
      - img "Gaucho Gaucho"
      - link "Gaucho Gaucho":
        - /url: /film/gaucho-gaucho/
      - text: Dokumentär Premiär 26 september
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
      - heading "Medlemsvisning den 7 april – Se The Amateur före alla andra" [level=3]:
        - link "Medlemsvisning den 7 april – Se The Amateur före alla andra":
          - /url: /nyhet/medlemsvisning-den-7-april-se-the-amateur-fore-alla-andra/
      - paragraph: 24 mars 2025
    - listitem:
      - heading "Köp biljett och få ett Jetpack-tillägg i Minecraft!" [level=3]:
        - link "Köp biljett och få ett Jetpack-tillägg i Minecraft!":
          - /url: /nyhet/kop-biljett-och-fa-ett-jetpack-tillagg-i-minecraft/
      - paragraph: 21 mars 2025
    - listitem:
      - 'heading "Biosvepet: Modiga monsteragenter, svenska superhjältar och vårens galnaste actionkomedi" [level=3]':
        - 'link "Biosvepet: Modiga monsteragenter, svenska superhjältar och vårens galnaste actionkomedi"':
          - /url: /nyhet/biosvepet-modiga-monsteragenter-svenska-superhjaltar-och-varens-galnaste-actionk/
      - paragraph: 20 mars 2025
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
   1 | import { DefaultPageWithNavigation } from './DefaultPageWithNavigation';
   2 |
   3 | export class StartPage extends DefaultPageWithNavigation {
   4 |   private moviePosters: any;
   5 |   private movieSearchField: any;
   6 |   public mainContentLocator: any;
   7 |   public errorMessageMovieSearch: any;
   8 |
   9 |   constructor(page: any) {
  10 |     super(page);
  11 |     this.moviePosters = this.page.locator("div[class='group/poster']");
  12 |     this.movieSearchField = this.page.getByPlaceholder('Sök på filmens namn');
  13 |     this.mainContentLocator = this.page.getByRole('main');
  14 |     this.errorMessageMovieSearch = this.page.getByText('Ingen träff!Vi kunde inte');
  15 |   }
  16 |
  17 |   async selectTownFromResults(townName: string) {
  18 |     await this.page
  19 |       .locator('ul')
  20 |       .filter({ hasText: new RegExp(`^${townName}$`) })
  21 |       .getByRole('link')
  22 |       .click();
  23 |   }
  24 |
  25 |   async searchMovie(movieName: string) {
  26 |     await this.movieSearchField.fill(movieName);
  27 |   }
  28 |
  29 |   async getMovieTitleLink(movieName: string) {
  30 |     let locator = await this.page.getByRole('link', { name: movieName });
  31 |     return locator;
  32 |   }
  33 |
  34 |   async clickMovieLink(movieName: string) {
  35 |     await this.page.getByRole('link', { name: movieName }).click();
  36 |     await this.page.waitForLoadState('networkidle');
  37 |   }
  38 |
  39 |   async clearMovieSearchField() {
  40 |     await this.movieSearchField.fill('');
  41 |   }
  42 |
  43 |   async selectRandomMovie() {
  44 |     let randomMovie = Math.floor(Math.random() * 7);
> 45 |     await this.moviePosters.nth(randomMovie).click();
     |                                              ^ Error: locator.click: Test timeout of 60000ms exceeded.
  46 |     await this.page.waitForLoadState('networkidle');
  47 |     return randomMovie;
  48 |   }
  49 | }
  50 |
```