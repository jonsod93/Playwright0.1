import { test, expect } from '@playwright/test';
import { StartPage } from '../../pages/filmstaden_int/StartPage';
import * as allure from "allure-js-commons";
import { LandingPage } from '../../pages/filmstaden_int/Landingpage';

const Environment = "https://sv-sit-marvel.filmstaden.se/";

test.describe.parallel('Filmstaden Startpage', () => {
    let startPage;
    let landingPage;

    // Block the ad script for all tests in this suite
    test.beforeEach(async ({ page }) => {
        await page.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());
        landingPage = new LandingPage(page);
        startPage = new StartPage(page);
    });

    test('Initial city selection', async ({ page }) => {
        await allure.epic('Start page');
        await allure.feature('Initial city selection');

        await page.goto(Environment);
        await startPage.acceptCookies();

        // Search for a town and verify results
        await startPage.searchTown('dwjao');
        await expect(page.getByRole('main')).toContainText('Inga träffar');
        await startPage.searchTown('Göteborg');
        await expect(page.getByRole('main')).toContainText('Göteborg');
        await startPage.selectTownFromResults('Göteborg');
        await expect(page.getByRole('button', { name: 'Göteborg' })).toBeVisible();
    });


    test('Search Movies', async ({ page }) => {
        await allure.epic('Start page');
        await allure.feature('Search Movies');

        await page.goto(Environment);
        await startPage.acceptCookies();

        await startPage.searchTown('Göteborg');
        await startPage.selectTownFromResults('Göteborg');

        // Search for a movie and verify results
        await startPage.searchMovie('emil');
        await expect(page.getByRole('link', { name: 'emil' })).toBeVisible();
        await startPage.clickMovieLink('emil');

        await expect (async () => {
            await expect(page.getByRole('main')).toContainText('Emil');
            await expect(page.getByLabel('Läs mer')).toBeVisible();
        }).toPass({timeout: 10000});

        await expect (async () => {
            // Back to start page
            await startPage.mainNavigation.clickHome();
            await startPage.searchMovie('fhebsuipfsehf');
            await expect(page.getByText('Ingen träff!Vi kunde inte')).toBeVisible();
            await expect(page.getByLabel('', { exact: true }).locator('div')).toContainText('Ingen träff!');
        }).toPass({timeout: 10000})
    });

    test('Search Cities', async ({ page }) => {
        await allure.epic('Start page');
        await allure.feature('Search Cities');
    
        await page.goto(Environment);
        await landingPage.acceptCookies();

        await landingPage.searchTown('Göteborg');
        await landingPage.selectTownFromResults('Göteborg');

        // Search for a city and verify results
        await startPage.mainNavigation.clickCityPicker();
        await startPage.mainNavigation.clearCitySearchField();
        await expect(page.getByLabel('Välj din biostad').getByRole('heading')).toContainText('Välj din biostad');
        await startPage.mainNavigation.fillCitySearchField('fwaoifjawoi');
        await expect(page.getByLabel('Välj din biostad')).toContainText('Inga träffar');
        await startPage.mainNavigation.fillCitySearchField('Alingsås');
        await expect(page.locator("span[class='text-sm font-bold']")).toContainText('Alingsås');
    });
});