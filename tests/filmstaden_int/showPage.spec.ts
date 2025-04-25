import { test, expect } from '@playwright/test';
import { LandingPage } from '../../pages/filmstaden_int/Landingpage';
import { StartPage } from '../../pages/filmstaden_int/StartPage';
import { MoviePage } from '../../pages/filmstaden_int/MoviePage';
import { ShowPage } from '../../pages/filmstaden_int/ShowPage';
import { EnvironmentData } from '../../testData/environmentData';
import * as allure from 'allure-js-commons';

test.describe.parallel('Tests for the Showpage', () => {
  let landingPage;
  let startPage;
  let moviePage;
  let showPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    startPage = new StartPage(page);
    moviePage = new MoviePage(page);
    showPage = new ShowPage(page);

    await page.goto('/');
    await landingPage.acceptCookies();
    await landingPage.selectStockholm();
  });

  test('Saloninfo verification', async ({ page }) => {
    await test.step('Initial setup of test specific variables and tags', async () => {
      await allure.epic('Showpage');
      await allure.feature('Information about the salon');
    });

    await test.step('Navigate to a movie with shows', async () => {
      await expect(startPage.loginButton).toBeVisible();
      await startPage.selectRandomMovie();
      await moviePage.selectFirstAvailableShowtime(startPage.selectRandomMovie.bind(startPage));
    });

    await test.step('Control the salon information', async () => {
      //Not all shows have salon information, so we need to check if the button is present before clicking it
      await showPage.findShowWithSalonInformation(
        moviePage.selectFirstAvailableShowtime.bind(moviePage),
        startPage.selectRandomMovie.bind(startPage)
      );
      await showPage.clickSalonInformationButton();
      await expect(showPage.dialogLocator).toContainText('Salongsinformation');
      await showPage.closeSalonInformationButton();
    });
  });
});
