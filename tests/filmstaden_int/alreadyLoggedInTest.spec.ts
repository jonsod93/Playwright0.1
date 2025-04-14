import { test, expect} from '@playwright/test';
import { ProfilePage } from '../../pages/filmstaden_int/ProfilePage';
import { EnvironmentData } from '../../testData/environmentData';
import * as allure from "allure-js-commons";

test.describe.parallel("Authenticated tests", () => {
  test.use({ storageState: 'testData/auth.json' }); // Use the saved authentication state
  let profilePage;


  test.beforeEach(async ({ page }) => {
    profilePage = new ProfilePage(page);


    await page.goto(EnvironmentData.SIT.URL);
    //await landingPage.acceptCookies();
    //await landingPage.selectStockholm();
  });

  test.skip('Test that the auth.json file works correctly', async ({ page }) => {
    
    await test.step("Initial setup of test specific variables and tags", async () => {
      await allure.epic('Authenticated tests');
      await allure.feature('Test');
    });

    await test.step("Navigate to and verify profile page", async () => {
      await profilePage.navigateToProfilePage(EnvironmentData.SIT.URL);
      // Make sure we end up on the profile page
      await expect(async () => {
        await expect(profilePage.mainContentLocator).toContainText('Kvar till guldmedlem');
        }).toPass();
    });
    
  });
});