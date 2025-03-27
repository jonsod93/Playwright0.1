import { test, expect } from '@playwright/test';





  test('Salongsinfo verification', async ({ page }) => {
    //SETUP
    let randomMovie = Math.floor(Math.random() * 7); // Generate a random number between 0 and 6
    
    async function retryFindingShows() {
      await page.goto(Environment);
      randomMovie = Math.floor(Math.random() * 7); // Generate a new random number between 0 and 6
      await page.locator("div[class='group/poster']").nth(randomMovie).click(); // Click on the Nth movie

      while (!(await page.locator("//li//li//li//li[1]//a[1]").count() > 0)) { // Loop until a movie that actually has a date is selected
        await page.waitForTimeout(500);
        await page.locator("(//a)[1]").click(); // Click on the main navigation back to the startpage
        randomMovie = Math.floor(Math.random() * 7); // Generate a new random number between 0 and 6
        await page.locator("div[class='group/poster']").nth(randomMovie).click(); // Click on the Nth movie
        await page.waitForTimeout(250);
      };
      await page.locator("//li//li//li//li[1]//a[1]").nth(0).click(); // Click on the first available date
    }

    await test.step("Navigate to a suitable movie", async () => {
      await navigateToStockholm(page);
      await page.locator("div[class='group/poster']").nth(randomMovie).click(); // Click on the Nth movie

      while (!(await page.locator("//li//li//li//li[1]//a[1]").count() > 0)) { // Loop until a movie that actually has a date is selected
        await page.waitForTimeout(500);
        await page.locator("(//a)[1]").click(); // Click on the main navigation back to the startpage
        randomMovie = Math.floor(Math.random() * 7); // Generate a new random number between 0 and 6
        await page.locator("div[class='group/poster']").nth(randomMovie).click(); // Click on the Nth movie
        await page.waitForTimeout(250);
      };
      await page.locator("//li//li//li//li[1]//a[1]").nth(0).click(); // Click on the first available date
    });
  
    await test.step("Control the salongsinformattion", async () => {

      let salongsinfoButton = await page.getByRole('button', { name: 'Salongsinformation' }).count();
      while (salongsinfoButton === 0) {
        await retryFindingShows();
        await page.waitForTimeout(1000);
        salongsinfoButton = await page.getByRole('button', { name: 'Salongsinformation' }).count();
      }
      await page.getByRole('button', { name: 'Salongsinformation' }).click();
      await expect(page.getByRole('dialog')).toContainText('Salongsinformation');
      await page.getByRole('button', { name: 'Stäng' }).click();

    });
  });