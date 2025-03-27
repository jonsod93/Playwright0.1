import { test, expect } from '@playwright/test';
import { LandingPage } from '../../../pages/filmstaden_int/Landingpage';
import { StartPage } from '../../../pages/filmstaden_int/StartPage';
import { MoviePage } from '../../../pages/filmstaden_int/MoviePage';
import { ShowPage } from '../../../pages/filmstaden_int/ShowPage';
import { NetsPage } from '../../../pages/filmstaden_int/NetsPage';
import { ReceiptPage } from '../../../pages/filmstaden_int/ReceiptPage';
import { EmailHelper } from '../../../helpers/filmstaden_int/EmailHelper';
import * as allure from "allure-js-commons";

const Environment = "https://sv-sit-marvel.filmstaden.se/";

test.describe.parallel("Discount code purchases", () => {
  let landingPage;
  let startPage;
  let moviePage;
  let showPage;
  let netsPage;
  let receiptPage;
  let emailHelper

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    startPage = new StartPage(page);
    moviePage = new MoviePage(page);
    showPage = new ShowPage(page);
    netsPage = new NetsPage(page);
    receiptPage = new ReceiptPage(page);
    emailHelper = new EmailHelper();    // Not needed??

    await page.goto(Environment);
    await landingPage.acceptCookies();
    await landingPage.selectStockholm();
  });

  test('Discountcode FR purchase + control the confirmation email', async ({ page }, testInfo) => {
    await allure.epic('Purchases');
    await allure.feature('Successful full discount');

    //SETUP
    test.setTimeout(90000); // Set timeout to 90 seconds for the whole test
    const namespace = await emailHelper.getNamespace();
    let testEmailAddress = `test.${Date.now()}`+testInfo.project.name+`FRpurchase@${namespace}.mailisk.net`;

    // Save the start time of the test
    let testStartTime = new Date();
    // Change start time format for the email filtering later
    let timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds
    let refNumber;
  
    await test.step("Navigate to a suitable movie", async () => {
      await expect(page.locator('#gatsby-focus-wrapper')).toContainText('Logga in'); // Check if the page is the correct one and that the user is not logged in
      await startPage.selectRandomMovie();
      await moviePage.selectFirstAvailableShowtime(startPage);
    });

    await test.step("Select 1 ticket and fill in necessary fields", async () => {
      
      //Make sure there are Ordinarie tickets available for sale
      await expect(async () => {
        await expect(page.getByRole('main')).toContainText('Ordinarie');
      }).toPass({timeout: 10000});

      await showPage.selectOneTicket();
      //Double check to make sure the amount of tickets is 1
      await expect(page.locator("//div[@class='shrink-0 text-right font-bold']")).toContainText('1 st');
      await showPage.fillEmail(testEmailAddress);
      await showPage.acceptAgeLimit();
    });
    
    await test.step("Verify discount error message and add a correct discount code", async () => { 
      await showPage.openDiscountPopup();
      await showPage.expandDiscountInfo();
      await expect(page.getByLabel('Probem med rabattkoden')).toBeVisible();
      await expect(page.getByLabel('Probem med rabattkoden')).toContainText('Endast ett erbjudande per biljett');

      await showPage.fillDiscountCode('faresgrdsg');
      await showPage.activateDiscountCode();
      await expect(page.locator('form')).toContainText('Rabatten hittades inte');
      await showPage.fillDiscountCode('FR');
      await showPage.activateDiscountCode();
      await expect(page.getByRole('main')).toContainText('0.00 kr');
      await expect(page.getByRole('main')).toContainText('Ingen betalnings behövs. Njut av din filmupplevelse!');
    });
    
    await test.step("Finish the purchase and control tickets", async () => {
      
      await showPage.finishWithoutPaying();
      //Make sure you end up on the receipt page and save the reference number for email verification later
      await expect(page.locator("//h6[normalize-space()='Referensnummer']")).toContainText('Referensnummer');
      refNumber = await receiptPage.getReferenceNumber();
      await receiptPage.clickShowTickets();
      await expect(page.getByRole('main'),).toContainText('Antal biobiljetter:');
      await receiptPage.backToStart();
      await expect(page.getByRole('main')).toContainText('Vilken film vill du se?');
    });

    await test.step("Verify the verification email", async () => {
      // Extract text content without HTML tags
      const emailContent = await emailHelper.getEmailContent(testEmailAddress, timeFrom, namespace);
      if (!emailContent) {
        throw new Error("Email content not found.");
      }
      // Check that the email contains the correct reference number and price
      await expect(emailContent).toContain(refNumber);
      await expect(emailContent).toContain("0,00 kr");
    });
      
  });

});