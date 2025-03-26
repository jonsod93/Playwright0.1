import { test, expect } from '@playwright/test';
import { StartPage } from '../../pages/filmstaden_int/StartPage';

const Environment = "https://sv-sit-marvel.filmstaden.se/";

test.describe.parallel('Filmstaden Startpage', () => {

    // Block the ad script for all tests in this suite
    test.beforeEach(async ({ page }) => {
        await page.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());
    });

    test('Initial city selection', async ({ page }) => {
        // Create an instance of the Page Object
        const startPage = new StartPage(page);

        await startPage.navigateToStartPage(Environment);
        await startPage.acceptCookies();

        // Search for a town and verify results
        await startPage.searchTown('dwjao');
        await expect(page.getByRole('main')).toContainText('Inga träffar');
        await startPage.searchTown('Göteborg');
        await expect(page.getByRole('main')).toContainText('Göteborg');
        await startPage.selectTownFromResults('Göteborg');
        await expect(page.getByRole('button', { name: 'Göteborg' })).toBeVisible();
    });


    test('Search Movies', async ({ page, context }) => {
        // Create an instance of the Page Object
        const startPage = new StartPage(page);

        await startPage.navigateToStartPage(Environment);
        await startPage.acceptCookies();

        await startPage.searchTown('Göteborg');
        await startPage.selectTownFromResults('Göteborg');

        // Search for a movie and verify results
        await startPage.searchMovie('emil');
        await expect(page.getByRole('link', { name: 'emil' })).toBeVisible();
        await startPage.clickMovieLink('emil');

        await expect(page.getByRole('main')).toContainText('Emil');
        await expect(page.getByLabel('Läs mer')).toBeVisible();

        // Back to start page
        await startPage.navigateToStartPage(Environment);
        await startPage.searchMovie('fhebsuipfsehf');
        await expect(page.getByText('Ingen träff!Vi kunde inte')).toBeVisible();
        await expect(page.getByLabel('', { exact: true }).locator('div')).toContainText('Ingen träff!');
    });

    test('Search Cities', async ({ page }) => {
        // Create an instance of the Page Object
        const startPage = new StartPage(page);
    
        await startPage.navigateToStartPage(Environment);
        await startPage.acceptCookies();

        await startPage.searchTown('Göteborg');
        await startPage.selectTownFromResults('Göteborg');

        // Search for a city and verify results
        await page.getByRole('button', { name: 'Göteborg' }).click();
        await startPage.clearCitySearchField();
        await expect(page.getByLabel('Välj din biostad').getByRole('heading')).toContainText('Välj din biostad');
        await startPage.fillCitySearchField('fwaoifjawoi');
        await expect(page.getByLabel('Välj din biostad')).toContainText('Inga träffar');
        await startPage.fillCitySearchField('Alingsås');
        await expect(page.locator("span[class='text-sm font-bold']")).toContainText('Alingsås');
    });
});