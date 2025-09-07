# Test info

- Name: Tests for the Showpage >> Saloninfo verification
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/showPage.spec.ts:26:3

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Salong' }).first()

    at MoviePage.selectFirstAvailableShowtime (/home/runner/work/Playwright0.1/Playwright0.1/pages/filmstaden_int/MoviePage.ts:26:38)
    at ShowPage.findShowWithSalonInformation (/home/runner/work/Playwright0.1/Playwright0.1/pages/filmstaden_int/ShowPage.ts:128:7)
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/showPage.spec.ts:40:7
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/showPage.spec.ts:38:5
```

# Page snapshot

```yaml
- main:
  - link "Filmstaden logotype":
    - /url: /stockholm/
    - img "Filmstaden logotype"
  - text: "Summa: 298.00 kr Ordinarie 2 st 298.00 kr"
  - heading "De ljudlösa" [level=1]
  - text: Dan tal, Eng tal, Sve tal, Ara tal, Sve text I dag 7 sep, kl 12:00 Filmstaden Kista, Salong 9
  - link "Logga in och samla poäng":
    - /url: https://inte-services.cinema-api.com/redirect/externalSignUpOrIn/se?redirectUrl=https://sv-sit-marvel.filmstaden.se/bokning/kop/701343d5-0135-4282-b453-89fd1bddcd79/
  - button ""
  - heading "Rubrik" [level=4]
  - paragraph: Nu kan du få det! Det enda du behöver göra är att köpa en biljett och bla bla bla bla bla bla och du har chans att vinna!
  - paragraph:
    - link "Läs mer om villkoren här":
      - /url: /familj/barnens-biodag-pa-filmstaden/
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
  - heading "Välj platser" [level=2]
  - text: "Vi har förvalt de bästa platserna. Byt plats genom att dra markören. Valda platser: Rad 3 Plats 30-31"
  - img
  - img
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - img
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - img
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - img
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - img
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - 'checkbox "Valda platser: Rad 3 Plats 30-31"'
  - checkbox "Välj skilda platser"
  - text: Välj skilda platser
  - img
  - text: Ditt val Ordinarie
  - img
  - text: Upptagen
  - img
  - text: Rullstol
  - button "Salongsinformation"
  - dialog
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
  - checkbox "Jag är medveten om att filmen är tillåten från 15 år. Barn som har fyllt 11 år får dock medfölja i vuxens (18 år) sällskap. Ålder ska kunna styrkas med giltig legitimation."
  - paragraph: Jag är medveten om att filmen är tillåten från 15 år. Barn som har fyllt 11 år får dock medfölja i vuxens (18 år) sällskap. Ålder ska kunna styrkas med giltig legitimation.
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
- text: Navigated to Se "De ljudlösa" på bio - Köp biobiljett online | Filmstaden
```

# Test source

```ts
   1 | import { DefaultPageWithNavigation } from './DefaultPageWithNavigation';
   2 |
   3 | export class MoviePage extends DefaultPageWithNavigation {
   4 |   private showtimeLinks: any;
   5 |   private showtimeLinkSeatPlaceholder: any;
   6 |   public mainContentLocator: any;
   7 |   public readMoreButton: any;
   8 |
   9 |   constructor(page: any) {
  10 |     super(page);
  11 |     this.showtimeLinks = this.page.getByRole('link', { name: 'Salong' });
  12 |     this.showtimeLinkSeatPlaceholder = this.page.locator("(//span[contains(text(),'_')])[1]");
  13 |     this.mainContentLocator = this.page.getByRole('main');
  14 |     this.readMoreButton = this.page.getByRole('button', { name: 'Läs mer' });
  15 |   }
  16 |
  17 |   async selectFirstAvailableShowtime(selectRandomMovieMethod: () => Promise<void>) {
  18 |     let showsCount = await this.showtimeLinks.count();
  19 |     while (!(showsCount > 0)) {
  20 |       await this.clickHome();
  21 |       await this.page.waitForLoadState('networkidle');
  22 |       await selectRandomMovieMethod();
  23 |       showsCount = await this.showtimeLinks.count();
  24 |     }
  25 |     await this.showtimeLinkSeatPlaceholder.waitFor({ state: 'detached' });
> 26 |     await this.showtimeLinks.first().click();
     |                                      ^ Error: locator.click: Test timeout of 60000ms exceeded.
  27 |     await this.page.waitForLoadState('networkidle');
  28 |   }
  29 | }
  30 |
```