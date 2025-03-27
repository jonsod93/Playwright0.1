import { test, expect} from '@playwright/test';
import { LandingPage } from '../../pages/filmstaden_int/Landingpage';
import { NotFoundPage } from '../../pages/filmstaden_int/404page';
import * as allure from "allure-js-commons";

const Environment = "https://sv-sit-marvel.filmstaden.se/"; // Set the environment to the SIT environment

test('404-page', async ({ page }) => {
  await allure.epic('Error Pages');
  await allure.feature('404 Page');

  // Create an instance of the Page Object
  const landingPage = new LandingPage(page);
  const notFoundPage = new NotFoundPage(page);

  await page.goto(Environment);
  await landingPage.acceptCookies();
  await notFoundPage.navigateTo404(Environment);

  await expect(page.locator('h1')).toContainText('Oj hoppsan! Nu hittade vi inte det du letar efter');
  await expect(page.getByRole('link', { name: 'Hitta film och köp biljetter' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gå till startsidan ' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Till Filmstadens kundservice ' })).toBeVisible();

  await notFoundPage.clickFindMoviesLink();
  await expect(page.locator('h1')).toContainText('På bio nu');
});