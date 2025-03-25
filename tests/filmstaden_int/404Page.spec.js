import { test, expect} from '@playwright/test';
import { NotFoundPage } from '../../pages/filmstaden_int/404page';

const Environment = "https://sv-sit-marvel.filmstaden.se/"; // Set the environment to the SIT environment

test('404-page', async ({ page, context }) => {
  // Block the ad script
  await context.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());

  // Create an instance of the Page Object
  const notFoundPage = new NotFoundPage(page);

  // Use the Page Object methods
  await notFoundPage.navigateTo404(Environment);
  await notFoundPage.acceptCookies();

  // Assertions in the spec file
  await expect(page.locator('h1')).toContainText('Oj hoppsan! Nu hittade vi inte det du letar efter');
  await expect(page.getByRole('link', { name: 'Hitta film och köp biljetter' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gå till startsidan ' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Till Filmstadens kundservice ' })).toBeVisible();

  await notFoundPage.clickFindMoviesLink();
  await expect(page.locator('h1')).toContainText('På bio nu');
});