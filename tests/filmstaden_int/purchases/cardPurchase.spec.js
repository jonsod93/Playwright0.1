import { test, expect } from '@playwright/test';
import { LandingPage } from '../../../pages/filmstaden_int/Landingpage';
import { StartPage } from '../../../pages/filmstaden_int/StartPage';
import { MoviePage } from '../../../pages/filmstaden_int/MoviePage';
import { ShowPage } from '../../../pages/filmstaden_int/ShowPage';
import { NetsPage } from '../../../pages/filmstaden_int/NetsPage';
import { ReceiptPage } from '../../../pages/filmstaden_int/ReceiptPage';
import * as allure from "allure-js-commons";

const Environment = "https://sv-sit-marvel.filmstaden.se/";

test.describe.parallel("Unauthenticated Card Purchase Tests", () => {
  let landingPage;
  let startPage;
  let moviePage;
  let showPage;
  let netsPage;
  let receiptPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    startPage = new StartPage(page);
    moviePage = new MoviePage(page);
    showPage = new ShowPage(page);
    netsPage = new NetsPage(page);
    receiptPage = new ReceiptPage(page);

    await page.goto(Environment);
    await landingPage.acceptCookies();
    await landingPage.selectStockholm();
  });

  test('Card purchase successful', async ({ page }) => {
    await allure.epic('Purchases');
    await allure.feature('Successful Card Purchase');

    await test.step("Navigate to a suitable movie", async () => {
      await startPage.selectRandomMovie();
      await moviePage.selectFirstAvailableShowtime(startPage);
    });

    await test.step("Select 1 ticket and fill in necessary fields", async () => {
      await showPage.selectOneTicket();
      await expect(page.locator("//div[@class='shrink-0 text-right font-bold']")).toContainText('1 st');
      await showPage.fillEmail('phox.warlock7@mailinator.com');
      await showPage.acceptAgeLimit();
      await showPage.startPayment();
    });

    await test.step("Make the purchase at Nets", async () => {
      await netsPage.completePayment('4925000000000004', '12', '30', '123');
    });

    await test.step("Control the purchase and tickets", async () => {
        await expect(async () => {
            await expect(page.locator("//h6[normalize-space()='Referensnummer']")).toContainText('Referensnummer');
        }).toPass({timeout: 15000});
    });
  });

  test('No Email Error', async ({ page }) => {
    await allure.epic('Purchases');
    await allure.feature('No Email in checkout');
    
    await test.step("Navigate to a suitable movie", async () => {
      await startPage.selectRandomMovie();
      await moviePage.selectFirstAvailableShowtime(startPage);
    });

    await test.step("Select 1 ticket and fill in necessary fields", async () => {
      await showPage.acceptAgeLimit();
      await showPage.startPayment();
      await expect(async () => {
        await expect(page.locator("//div[contains(text(),'Felaktigt format på e-postadress')]")).toContainText('Felaktigt format på e-postadress');
    }).toPass({timeout: 5000});
    });

  });

});