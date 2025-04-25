import { test, expect } from '@playwright/test';
import { StartPage } from '../../pages/filmstaden_int/StartPage';
import { LandingPage } from '../../pages/filmstaden_int/Landingpage';
import { MoviePage } from '../../pages/filmstaden_int/MoviePage';
import { EnvironmentData } from '../../testData/environmentData';
import * as allure from 'allure-js-commons';

test.describe.parallel('Filmstaden Startpage', () => {
  let startPage: any;
  let landingPage: any;
  let moviePage: any;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    startPage = new StartPage(page);
    moviePage = new MoviePage(page);

    await page.goto('/');
    await landingPage.acceptCookies();
    await landingPage.selectStockholm();
  });

  test('Search Movies', async ({ page }) => {
    await test.step('Initial setup of test specific variables and tags', async () => {
      await allure.epic('Start page');
      await allure.feature('Search Movies');
    });

    await test.step('Search for a movie and verify that it is found', async () => {
      await startPage.searchMovie('emil');
      let movieTitleLocator = await startPage.getMovieTitleLink('emil');
      await expect(movieTitleLocator).toBeVisible();
    });

    await test.step('Click the search result and verify that it leads to the correct page', async () => {
      await startPage.clickMovieLink('emil');
      await expect(async () => {
        await expect(moviePage.mainContentLocator).toContainText('Emil');
        await expect(moviePage.readMoreButton).toBeVisible();
      }).toPass({ timeout: 10000 });
    });

    await test.step('Go back to startpage, search for invalid movietitle and verify error message when no movie is found', async () => {
      await startPage.clickHome();
      await startPage.searchMovie('fhebsuipfsehf');
      await expect(async () => {
        await expect(startPage.errorMessageMovieSearch).toBeVisible();
      }).toPass({ timeout: 10000 });
    });
  });

  test('Search Cities', async ({ page }) => {
    await test.step('Initial setup of test specific variables and tags', async () => {
      await allure.epic('Start page');
      await allure.feature('Search Cities');
    });

    await test.step('Search for cities using the city picker and verify both positive and negative results', async () => {
      await startPage.clickCityPicker();
      await startPage.clearCitySearchField();
      await expect(startPage.citySearchSidearHeading).toContainText('Välj din biostad');
      await startPage.fillCitySearchField('fwaoifjawoi');
      await expect(startPage.citySearchNoResultsMessage).toContainText('Inga träffar');
      await startPage.fillCitySearchField('Alingsås');
      await expect(startPage.citySearchResults).toContainText('Alingsås');
    });
  });
});
