import { test, expect } from '@playwright/test';
import { LandingPage } from '../../../pages/filmstaden_int/Landingpage';
import { StartPage } from '../../../pages/filmstaden_int/StartPage';
import { LoginFlowPage } from '../../../pages/filmstaden_int/LoginFlowPage';
import { EmailHelper } from '../../../helpers/filmstaden_int/EmailHelper';
import * as allure from 'allure-js-commons';
import { TestUserLogin } from '../../../testData/testUser';
import fs from 'fs';

test.describe.parallel('2FA login', () => {
  let testEmailAddress;
  let landingPage;
  let startPage;
  let loginPage;
  let emailHelper;
  let namespace;
  let timeFrom;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    startPage = new StartPage(page);
    loginPage = new LoginFlowPage(page);
    emailHelper = new EmailHelper();
    namespace = emailHelper.getNamespace();

    await page.goto('/');
    await landingPage.acceptCookies();
    await landingPage.selectStockholm();
  });

  // Tests the proper 2Factor authentication flow
  test('2FA login', async ({ page }, testInfo) => {
    await test.step('Initial setup of variables and tags', async () => {
      await allure.epic('Login and Sign up');
      await allure.feature('Successful 2FA login');
      // Set the test email based on the browser
      testEmailAddress = `PermaUser` + testInfo.project.name + `login@${namespace}.mailisk.net`;
      // Save the start time of the test
      let testStartTime = new Date();
      // Change start time format for the email filtering later
      timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds
    });

    await test.step('Navigate to and start login', async () => {
      await startPage.clickLogin();
    });

    await test.step('Fill in login details and request verification code', async () => {
      await loginPage.fillEmail(testEmailAddress);
      await loginPage.fillPassword(TestUserLogin.password);
      await loginPage.clickLogin();
      await loginPage.clickSendCode();
    });

    await test.step('Verify the code and finish login', async () => {
      // Get the verification code from the email
      const code = await emailHelper.getLoginCode(testEmailAddress, timeFrom, namespace);
      await loginPage.fillVerificationCode(code);
      await loginPage.clickVerify();
      await loginPage.clickContinue();

      // Assert that the login was successful by checking for the user name
      await expect(async () => {
        const textContent = await page
          .getByRole('heading', { name: TestUserLogin.firstName + ' ' + TestUserLogin.lastName })
          .textContent();
        await expect(textContent).toContain(TestUserLogin.firstName + ' ' + TestUserLogin.lastName);
      }).toPass({ timeout: 5000 });
    });

    const authFilePath = 'testData/auth.json';

    if (!fs.existsSync(authFilePath) || fs.readFileSync(authFilePath, 'utf-8').trim() === '') {
      await page.context().storageState({ path: authFilePath });
    }
  });
});
