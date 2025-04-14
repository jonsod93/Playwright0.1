import { test, expect } from '@playwright/test';
import { LandingPage } from '../../../pages/filmstaden_int/Landingpage';
import { StartPage } from '../../../pages/filmstaden_int/StartPage';
import { MoviePage } from '../../../pages/filmstaden_int/MoviePage';
import { ShowPage } from '../../../pages/filmstaden_int/ShowPage';
import { NetsPage } from '../../../pages/filmstaden_int/NetsPage';
import { ReceiptPage } from '../../../pages/filmstaden_int/ReceiptPage';
import { EmailHelper } from '../../../helpers/filmstaden_int/EmailHelper';
import { DiscountCodes } from '../../../testData/paymentOptions';
import { EnvironmentData } from '../../../testData/environmentData';
import * as allure from "allure-js-commons";

test.describe.parallel("Discount code purchases", () => {
  let landingPage;
  let startPage;
  let moviePage;
  let showPage;
  let netsPage;
  let receiptPage;
  let emailHelper
  let testEmailAddress;
  let refNumber;
  let timeFrom;
  let namespace;



  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    startPage = new StartPage(page);
    moviePage = new MoviePage(page);
    showPage = new ShowPage(page);
    netsPage = new NetsPage(page);
    receiptPage = new ReceiptPage(page);
    emailHelper = new EmailHelper();

    namespace = await emailHelper.getNamespace();

    await page.goto(EnvironmentData.SIT.URL);
    await landingPage.acceptCookies();
    await landingPage.selectStockholm();
  });

  test('Discountcode FR purchase + control the confirmation email', async ({ page }, testInfo) => {
    await test.step("Initial setup of test specific variables and tags", async () => {
      await allure.epic('Purchases');
      await allure.feature('Successful full discount');
  
      test.setTimeout(90000); // Set timeout to 90 seconds for the whole test
      
      testEmailAddress = `test.${Date.now()}`+testInfo.project.name+`FRpurchase@${namespace}.mailisk.net`;
  
      // Save the start time of the test
      let testStartTime = new Date();
      // Change start time format for the email filtering later
      timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds
    });

    await test.step("Navigate to a movie with shows", async () => {
      await expect(startPage.loginButton).toBeVisible();
      await startPage.selectRandomMovie();
      await moviePage.selectFirstAvailableShowtime(startPage.selectRandomMovie.bind(startPage));
    });

    await test.step("Select 1 ticket and fill in necessary fields", async () => {
      
      //Make sure there are Ordinarie tickets available for sale
      await expect(async () => {
        await expect(showPage.mainContentLocator).toContainText('Ordinarie');
      }).toPass({timeout: 10000});

      await showPage.selectOneTicket();
      //Double check to make sure the amount of tickets is 1
      await expect(showPage.amountOfTicketsLabel).toContainText('1 st');
      await showPage.fillEmail(testEmailAddress);
      await showPage.acceptAgeLimit();
    });
    
    await test.step("Verify discount error message and add a correct discount code", async () => { 
      await showPage.openDiscountPopup();
      await showPage.expandDiscountInfo();
      await expect(showPage.discountCodeInfo).toBeVisible();
      await expect(showPage.discountCodeInfo).toContainText('Endast ett erbjudande per biljett');

      await showPage.fillDiscountCode(DiscountCodes.invalid.code);
      await showPage.activateDiscountCode();
      await expect(showPage.formLocator).toContainText('Rabatten hittades inte');
      await showPage.fillDiscountCode(DiscountCodes.free.code);
      await showPage.activateDiscountCode();
      await expect(showPage.mainContentLocator).toContainText(DiscountCodes.free.pagePriceAfterDiscount);
      await expect(showPage.mainContentLocator).toContainText('Ingen betalnings behövs. Njut av din filmupplevelse!');
    });
    
    await test.step("Finish the purchase and control tickets", async () => {
      
      await showPage.finishWithoutPaying();
      //Make sure you end up on the receipt page and save the reference number for email verification later
      await expect(receiptPage.referensNumberTitleLabel).toContainText('Referensnummer');
      refNumber = await receiptPage.getReferenceNumber();
      await receiptPage.clickShowTickets();
      await expect(receiptPage.mainContentLocator).toContainText('Antal biobiljetter:');
      await receiptPage.backToStart();
      await expect(receiptPage.mainContentLocator).toContainText('Vilken film vill du se?');
    });

    await test.step("Verify the verification email", async () => {
      // Extract text content from email without HTML tags
      const emailContent = await emailHelper.getEmailContent(testEmailAddress, timeFrom, namespace);
      if (!emailContent) {
        throw new Error("Email content not found.");
      }
      // Check that the email contains the correct reference number and price
      await expect(emailContent).toContain(refNumber);
      await expect(emailContent).toContain(DiscountCodes.free.mailPriceAfterDiscount);
    });
      
  });

});