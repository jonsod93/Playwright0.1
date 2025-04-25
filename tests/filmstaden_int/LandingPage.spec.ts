import { test, expect } from '@playwright/test';
import { LandingPage } from '../../pages/filmstaden_int/Landingpage';
import { EnvironmentData } from '../../testData/environmentData';
import * as allure from 'allure-js-commons';

test.describe.parallel('Filmstaden Startpage', () => {
  let landingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);

    await page.goto('/');
    await landingPage.acceptCookies();
  });

  test('Initial city selection', async ({ page }) => {
    await test.step('Initial setup of test specific variables and tags', async () => {
      await allure.epic('Landing page');
      await allure.feature('Initial city selection');
    });

    await test.step('Search for towns and verify both negative and positive outcome', async () => {
      await landingPage.searchTown('dwjao');
      await expect(landingPage.mainContentLocator).toContainText(
        'Inga träffar'
      );
      await landingPage.searchTown('Göteborg');
      await expect(landingPage.mainContentLocator).toContainText('Göteborg');
      await landingPage.selectTownFromResults('Göteborg');
      await expect(landingPage.goteborgButton).toBeVisible();
    });
  });
});
