import { test, expect} from '@playwright/test';
import { LandingPage } from '../../pages/filmstaden_int/Landingpage';
import { NotFoundPage } from '../../pages/filmstaden_int/404page';
import { EnvironmentData } from '../../testData/environmentData';
import * as allure from "allure-js-commons";

test.describe.parallel("404-page tests", () => {
  let landingPage;
  let notFoundPage

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    notFoundPage = new NotFoundPage(page);

    await page.goto(EnvironmentData.SIT.URL);
    await landingPage.acceptCookies();
    await landingPage.selectStockholm();
  });

  test('Test that 404-page has the correct elements', async ({ page }) => {
    
    await test.step("Initial setup of test specific variables and tags", async () => {
      await allure.epic('Error Pages');
      await allure.feature('404 Page');
    });

    await test.step("Navigate to and verify 404-page", async () => {
      await notFoundPage.navigateTo404(EnvironmentData.SIT.URL);
      await expect(notFoundPage.pageTitle).toContainText('Oj hoppsan! Nu hittade vi inte det du letar efter');
      await expect(notFoundPage.findMoviesLink).toBeVisible();
      await expect(notFoundPage.goToStartLink).toBeVisible();
      await expect(notFoundPage.customerServiceLink).toBeVisible();
    });
    
    await test.step("Verify link from 404-page works correctly", async () => {
      await notFoundPage.clickFindMoviesLink();
      await expect(notFoundPage.pageTitle).toContainText('På bio nu');
    });
  });
});