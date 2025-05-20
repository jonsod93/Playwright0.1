import { test, expect } from '@playwright/test';
import { LandingPage } from '../../../pages/filmstaden_int/Landingpage';
import { StartPage } from '../../../pages/filmstaden_int/StartPage';
import { LoginFlowPage } from '../../../pages/filmstaden_int/LoginFlowPage';
import { SignUpFlowPage } from '../../../pages/filmstaden_int/SignUpFlowPage';
import { ProfilePage } from '../../../pages/filmstaden_int/ProfilePage';
import { EmailHelper } from '../../../helpers/filmstaden_int/EmailHelper';
import { TestUserGeneric } from '../../../testData/testUser';
import { EnvironmentData } from '../../../testData/environmentData';
import * as allure from 'allure-js-commons';

test.describe.parallel('2FA tests', () => {
  let landingPage;
  let startPage;
  let loginPage;
  let signUpPage;
  let profilePage;
  let emailHelper;
  let namespace;
  let socialSecurityNumber;
  let timeFrom;
  let testEmailAddress;
  const country = 'se';

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    startPage = new StartPage(page);
    loginPage = new LoginFlowPage(page);
    signUpPage = new SignUpFlowPage(page);
    profilePage = new ProfilePage(page);
    emailHelper = new EmailHelper();
    namespace = await emailHelper.getNamespace();

    await page.goto('/');
    await landingPage.acceptCookies();
    await landingPage.selectStockholm();
  });

  // Tests the 2Factor sign up and deletion of account
  test('Create and delete account', async ({ page, request }, testInfo) => {
    await test.step('Initial setup of variables and tags', async () => {
      await allure.epic('Login and Sign up');
      await allure.feature('Create and delete account');
      test.setTimeout(90000); // Set timeout to 90 seconds for the whole test
      // Save the start time of the test
      let testStartTime = new Date();
      timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds
      // Set the test email based on date and browser, making sure it's always unique for each test run and browser
      testEmailAddress = `test.${Date.now()}.${testInfo.project.name}.login@${namespace}.mailisk.net`;
    });

    await test.step('Navigate to and start Sign Up Flow', async () => {
      await startPage.clickLogin();
      await loginPage.clickSignUpButton();
    });

    await test.step('First signup step: Fill Email and verify with email code', async () => {
      await signUpPage.fillEmail(testEmailAddress);
      await signUpPage.clickSendCode();
      const code = await emailHelper.getSignUpCode(testEmailAddress, timeFrom, namespace);
      await signUpPage.fillCode(code);
      await signUpPage.clickVerifyCode();
    });

    await test.step('Second signup step: Fill Password and Confirm Password', async () => {
      await signUpPage.fillPassword(TestUserGeneric.password);
      await signUpPage.fillConfirmPassword(TestUserGeneric.password);
      await signUpPage.clickContinue();
    });

    await test.step('Third signup step: Provide the rest of user information and finish signup', async () => {
      await expect(page).toHaveURL('/skapa-konto/');
      await signUpPage.fillFirstName(TestUserGeneric.firstName);
      await signUpPage.fillLastName(TestUserGeneric.lastName);
      await signUpPage.fillPhoneNumber(TestUserGeneric.phoneNumber);
      socialSecurityNumber = await signUpPage.getSocialSecurityNumber();
      //socialSecurityNumber = "950103-1638"; // Hardcoded social security number for now
      await signUpPage.fillSSN(socialSecurityNumber);
      await signUpPage.acceptTerms();
      await signUpPage.acceptSubscription();
      await signUpPage.finishSignUpWithRetries();

      // Make sure we end up on the profile page
      await expect(async () => {
        await expect(page).toHaveURL('/mina-sidor/');
      }).toPass();
    });

    await test.step('Verify the QR-Code functionality', async () => {
      await profilePage.clickQR();
      await expect(profilePage.QRCodeInfoLocator).toBeVisible();
      await profilePage.closeQR();
    });

    await test.step('Verify the profile accordion', async () => {
      await profilePage.clickProfileAccordion();
      await expect(profilePage.formContentLocator).toContainText('Återställ lösenord här');
      await expect(profilePage.formContentLocator).toContainText('Byt din e-postadress här');
      await expect(profilePage.savePhoneNumberButton).toContainText('Spara telefonnummer');
    });

    await test.step('Verify the communication accordion', async () => {
      await profilePage.clickCommunicationAccordion();
      await expect(profilePage.communicationLabel).toContainText('Medlemsinformation och filmnyheter');
      await profilePage.uncheckReminders();
      await profilePage.uncheckCompetitions();
      await profilePage.uncheckTicketReleases();
      await profilePage.uncheckMembershipInfo();
      await expect(profilePage.membershipInformationCheckbox).not.toBeChecked();
      await expect(profilePage.ticketReleasesCheckbox).not.toBeChecked();
      await expect(profilePage.competitionsCheckbox).not.toBeChecked();
      await expect(profilePage.remindersCheckbox).not.toBeChecked();
    });

    await test.step('Verify the friend accordion', async () => {
      await profilePage.clickFriendsAccordion();
      await profilePage.fillFriendCode('GF3UR2');
      await profilePage.fillFriendName('PhoxFake');
      await profilePage.clickAddFriend();
      await expect(page.getByLabel('Phoxfake')).not.toBeChecked();
    });

    await test.step('Delete the account and verify that it is gone', async () => {
      // Save the userID and build the API URL for checking if the user exists
      let userID = await profilePage.getUserID();
      await expect(userID).toBeDefined();
      await expect(userID).toMatch(/^[A-Z0-9]{6}$/); // Example assertion to check the format
      const apiUrl = `https://inte-services.cinema-api.com/Preference/validatefriend/${country}?code=${userID}`;

      // Cancel the membership
      await profilePage.clickCancelMembership();
      await expect(async () => {
        await expect(profilePage.cancelMembershipDialogLocator).toContainText(
          'Är du säker på att du vill avsluta medlemskap?'
        );
      }).toPass();
      await profilePage.clickConfirmCancel();

      // Check that the user is deleted
      await expect(async () => {
        // Make the API call to check if the user exists
        const response = await request.get(apiUrl);
        await expect(response.status()).toBe(200);
        const responseBody = await response.json();
        await expect(responseBody).toBeFalsy(); // Check that the user does not exist anymore
      }).toPass({ timeout: 10000 });
    });
  });
});
