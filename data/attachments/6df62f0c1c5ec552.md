# Test info

- Name: 2FA login >> 2FA login
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/loginAndSignUp/loginFlow.spec.js:32:3

# Error details

```
Error: browserType.launch: Executable doesn't exist at /home/runner/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { LandingPage } from '../../../pages/filmstaden_int/Landingpage';
   3 | import { StartPage } from '../../../pages/filmstaden_int/StartPage';
   4 | import { LoginFlowPage } from '../../../pages/filmstaden_int/LoginFlowPage';
   5 | import { EmailHelper } from '../../../helpers/filmstaden_int/EmailHelper';
   6 | import * as allure from 'allure-js-commons';
   7 | import { TestUserLogin } from '../../../testData/testUser';
   8 | import fs from 'fs';
   9 |
  10 | test.describe.parallel('2FA login', () => {
  11 |   let testEmailAddress;
  12 |   let landingPage;
  13 |   let startPage;
  14 |   let loginPage;
  15 |   let emailHelper;
  16 |   let namespace;
  17 |   let timeFrom;
  18 |
  19 |   test.beforeEach(async ({ page }) => {
  20 |     landingPage = new LandingPage(page);
  21 |     startPage = new StartPage(page);
  22 |     loginPage = new LoginFlowPage(page);
  23 |     emailHelper = new EmailHelper();
  24 |     namespace = emailHelper.getNamespace();
  25 |
  26 |     await page.goto('/');
  27 |     await landingPage.acceptCookies();
  28 |     await landingPage.selectStockholm();
  29 |   });
  30 |
  31 |   // Tests the proper 2Factor authentication flow
> 32 |   test('2FA login', async ({ page }, testInfo) => {
     |   ^ Error: browserType.launch: Executable doesn't exist at /home/runner/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
  33 |     await test.step('Initial setup of variables and tags', async () => {
  34 |       await allure.epic('Login and Sign up');
  35 |       await allure.feature('Successful 2FA login');
  36 |       // Set the test email based on the browser
  37 |       testEmailAddress = `PermaUser` + testInfo.project.name + `login@${namespace}.mailisk.net`;
  38 |       // Save the start time of the test
  39 |       let testStartTime = new Date();
  40 |       // Change start time format for the email filtering later
  41 |       timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds
  42 |     });
  43 |
  44 |     await test.step('Navigate to and start login', async () => {
  45 |       await startPage.clickLogin();
  46 |     });
  47 |
  48 |     await test.step('Fill in login details and request verification code', async () => {
  49 |       await loginPage.fillEmail(testEmailAddress);
  50 |       await loginPage.fillPassword(TestUserLogin.password);
  51 |       await loginPage.clickLogin();
  52 |       await loginPage.clickSendCode();
  53 |     });
  54 |
  55 |     await test.step('Verify the code and finish login', async () => {
  56 |       // Get the verification code from the email
  57 |       const code = await emailHelper.getLoginCode(testEmailAddress, timeFrom, namespace);
  58 |       await loginPage.fillVerificationCode(code);
  59 |       await loginPage.clickVerify();
  60 |       await loginPage.clickContinue();
  61 |
  62 |       // Assert that the login was successful by checking for the user name
  63 |       await expect(async () => {
  64 |         const textContent = await page
  65 |           .getByRole('heading', { name: TestUserLogin.firstName + ' ' + TestUserLogin.lastName })
  66 |           .textContent();
  67 |         await expect(textContent).toContain(TestUserLogin.firstName + ' ' + TestUserLogin.lastName);
  68 |       }).toPass({ timeout: 5000 });
  69 |     });
  70 |
  71 |     const authFilePath = 'testData/auth.json';
  72 |
  73 |     if (!fs.existsSync(authFilePath) || fs.readFileSync(authFilePath, 'utf-8').trim() === '') {
  74 |       await page.context().storageState({ path: authFilePath });
  75 |     }
  76 |   });
  77 | });
  78 |
```