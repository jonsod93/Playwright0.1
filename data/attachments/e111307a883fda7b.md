# Test info

- Name: Filmstaden Startpage >> Search Cities
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/StartPage.spec.ts:52:3

# Error details

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Sök stad')

    at StartPage.clearCitySearchField (/home/runner/work/Playwright0.1/Playwright0.1/pages/filmstaden_int/DefaultPageWithNavigation.ts:172:32)
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/StartPage.spec.ts:60:23
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/StartPage.spec.ts:58:5
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
  - button "Välj stad"
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
  - button "Alla dagar " [disabled]
  - button "Alla biografer " [disabled]
  - list:
    - listitem:
      - heading "Filmstaden stöder Rosa Bandet" [level=3]:
        - link "Filmstaden stöder Rosa Bandet":
          - /url: /nyhet/rosa-bandet-pa-filmstaden/
      - paragraph: Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024.
  - button "Visa fler filmer"
  - heading "Topplistan i Stockholm" [level=2]
  - list
  - button "Visa fler filmer"
  - heading "Välj dag du vill gå på bio" [level=2]
  - paragraph: Välj din biostad för att se filmer och köpa biljetter.
  - button "Välj stad"
  - heading "Utvalt" [level=2]
  - paragraph: Den 23 september går startskottet för Cancerfondens Rosa Bandet-kampanj 2024.
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
  - list
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
```

# Test source

```ts
   72 |     });
   73 |     this.citySearchNoResultsMessage = this.page.getByLabel('Välj din biostad');
   74 |     this.citySearchResults = this.page.locator(
   75 |       "span[class='text-sm font-bold']"
   76 |     );
   77 |   }
   78 |
   79 |   async clickHome() {
   80 |     await this.homeButton.click();
   81 |   }
   82 |
   83 |   async clickDiscover() {
   84 |     await this.discoverButton.click();
   85 |   }
   86 |
   87 |   async clickGoingToTheCinema() {
   88 |     await this.goingToTheCinemaButton.click();
   89 |   }
   90 |
   91 |   async clickMembership() {
   92 |     await this.membershipButton.click();
   93 |   }
   94 |
   95 |   async clickMore() {
   96 |     await this.moreButton.click();
   97 |   }
   98 |
   99 |   async clickProfile() {
  100 |     await this.profileButton.click();
  101 |   }
  102 |
  103 |   async clickLogin() {
  104 |     await this.loginButton.click();
  105 |   }
  106 |
  107 |   async clickCityPicker() {
  108 |     await this.cityPickerButton.click();
  109 |   }
  110 |
  111 |   async clickCinemas() {
  112 |     await this.goingToTheCinemaButton.click();
  113 |     await this.cinemasButton.click();
  114 |   }
  115 |
  116 |   async clickOnCinemaNow() {
  117 |     await this.goingToTheCinemaButton.click();
  118 |     await this.onCinemaNowButton.click();
  119 |   }
  120 |
  121 |   async clickUpcoming() {
  122 |     await this.goingToTheCinemaButton.click();
  123 |     await this.upcomingButton.click();
  124 |   }
  125 |
  126 |   async clickKidsAndFamily() {
  127 |     await this.goingToTheCinemaButton.click();
  128 |     await this.kidsAndFamilyButton.click();
  129 |   }
  130 |
  131 |   async clickCinemaExperience() {
  132 |     await this.goingToTheCinemaButton.click();
  133 |     await this.cinemaExperienceButton.click();
  134 |   }
  135 |
  136 |   async clickClassics() {
  137 |     await this.goingToTheCinemaButton.click();
  138 |     await this.classicsButton.click();
  139 |   }
  140 |
  141 |   async clickOffers() {
  142 |     await this.moreButton.click();
  143 |     await this.offersButton.click();
  144 |   }
  145 |
  146 |   async clickGiftcard() {
  147 |     await this.moreButton.click();
  148 |     await this.giftcardButton.click();
  149 |   }
  150 |
  151 |   async clickFoodAndDrink() {
  152 |     await this.moreButton.click();
  153 |     await this.foodAndDrinkButton.click();
  154 |   }
  155 |
  156 |   async clickNews() {
  157 |     await this.moreButton.click();
  158 |     await this.newsButton.click();
  159 |   }
  160 |
  161 |   async clickCompany() {
  162 |     await this.moreButton.click();
  163 |     await this.companyButton.click();
  164 |   }
  165 |
  166 |   async clickCustomerService() {
  167 |     await this.moreButton.click();
  168 |     await this.customerServiceButton.click();
  169 |   }
  170 |
  171 |   async clearCitySearchField() {
> 172 |     await this.citySearchField.fill('');
      |                                ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  173 |   }
  174 |
  175 |   async fillCitySearchField(cityName: string) {
  176 |     await this.citySearchField.fill(cityName);
  177 |   }
  178 |
  179 |   async selectCityFromResults(cityName: string) {
  180 |     await this.page
  181 |       .getByRole('button', { name: `Välj stad ${cityName}` })
  182 |       .click();
  183 |   }
  184 | }
  185 |
```