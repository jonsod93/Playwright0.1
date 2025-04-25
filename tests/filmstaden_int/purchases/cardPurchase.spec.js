import { test, expect } from '@playwright/test';
import { LandingPage } from '../../../pages/filmstaden_int/Landingpage';
import { StartPage } from '../../../pages/filmstaden_int/StartPage';
import { MoviePage } from '../../../pages/filmstaden_int/MoviePage';
import { ShowPage } from '../../../pages/filmstaden_int/ShowPage';
import { NetsPage } from '../../../pages/filmstaden_int/NetsPage';
import { ReceiptPage } from '../../../pages/filmstaden_int/ReceiptPage';
import { TestUser } from '../../../testData/testUser';
import { ValidVisa } from '../../../testData/paymentOptions';
import { EnvironmentData } from '../../../testData/environmentData';
import * as allure from 'allure-js-commons';

test.describe.parallel('Unauthenticated Card Purchase Tests', () => {
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

    await page.goto('/');
    await landingPage.acceptCookies();
    await landingPage.selectStockholm();
  });

  test('Card purchase successful', async ({ page }) => {
    await test.step('Initial setup of variables and tags', async () => {
      await allure.epic('Purchases');
      await allure.feature('Successful Card Purchase');
    });

    await test.step('Navigate to a movie with shows', async () => {
      await startPage.selectRandomMovie();
      await moviePage.selectFirstAvailableShowtime(
        startPage.selectRandomMovie.bind(startPage)
      );
    });

    await test.step('Select 1 ticket and fill in required fields', async () => {
      await showPage.selectOneTicket();
      await expect(showPage.amountOfTicketsLabel).toContainText('1 st');
      await showPage.fillEmail(TestUser.email);
      await showPage.acceptAgeLimit();
      await showPage.startPayment();
    });

    await test.step('Make the purchase at Nets', async () => {
      await netsPage.completePayment(
        ValidVisa.number,
        ValidVisa.month,
        ValidVisa.year,
        ValidVisa.CVC
      );
    });

    await test.step('Control that you end up on the receiptpage', async () => {
      await expect(async () => {
        await expect(receiptPage.referensNumberTitleLabel).toContainText(
          'Referensnummer'
        );
      }).toPass({ timeout: 15000 });
    });
  });

  test('No Email Error', async ({ page }) => {
    await allure.epic('Purchases');
    await allure.feature('No Email in checkout');

    await test.step('Navigate to a suitable movie', async () => {
      await startPage.selectRandomMovie();
      await moviePage.selectFirstAvailableShowtime(
        startPage.selectRandomMovie.bind(startPage)
      );
    });

    await test.step('Select 1 ticket and fill in necessary fields', async () => {
      await showPage.acceptAgeLimit();
      await showPage.startPayment();
      await expect(async () => {
        await expect(
          page.locator(
            "//div[contains(text(),'Felaktigt format på e-postadress')]"
          )
        ).toContainText('Felaktigt format på e-postadress');
      }).toPass({ timeout: 5000 });
    });
  });
});
