import { test, expect } from '@playwright/test';
import { MailiskClient } from "mailisk";

const Environment = "https://sv-sit-marvel.filmstaden.se/"; // Set the environment to the SIT environment

test.describe("Create Account", () => {
  
  

  test("Sign up, verify email, login, cancel membership", async ({ page }, testInfo) => {
    test.setTimeout(60000); // Set timeout to 60 seconds for the whole test
    const namespace = "xw50xu01olrr";
    const mailisk = new MailiskClient({ apiKey: "umQrBAvP90qajGGk2Qv9_a4yDhyuAPcwsfPPjs7ovBY" });
    const testEmailAddress = '@xw50xu01olrr.mailisk.net' //Use for generating a specific email
    const testPassword = "1234Test1234";

    // Create a new page context for the social security number page
    const socialSecurityNumberPage = await page.context().newPage();
    let errorMessageText = '          E‑postadressen eller lösenordet är felaktigt.';

    // Navigate to the social security number page and get the number
    await socialSecurityNumberPage.goto('https://www.personnummer.nu/');
    await socialSecurityNumberPage.getByLabel('Jag samtycker').click();
    let socialSecurityNumber = await socialSecurityNumberPage.locator('body > div:nth-child(1) > main:nth-child(3) > div:nth-child(4) > p:nth-child(4)').textContent();

    // Close the social security number page
    await socialSecurityNumberPage.close();

    // Navigate to the Filmstaden page and start the sign-up process
    await page.goto('https://sv-sit-marvel.filmstaden.se/');
    await page.getByRole('button', { name: 'No thanks' }).click();
    await page.getByRole('link', { name: 'Stockholm' }).first().click();
    await page.getByRole('link', { name: 'Logga in menuitem logo Logga' }).click();
    await page.getByRole('link', { name: 'Bli medlem' }).click();
    await page.getByPlaceholder('E‑postadress').fill(testEmailAddress);
    await page.getByLabel('Skicka verifieringskod').click();

    // Wait for the verification email to arrive
    let code;
    try {
      const { data: emails } = await mailisk.searchInbox(namespace, {
        to_addr_prefix: testEmailAddress,
      });

      const email = emails[0];
      // Extract the verification code from the email
      const matches = email.text.match(/\d+/g);
      if (matches && matches.length > 1) {
        code = matches[3]; // Take the second sequence of digits
      } else {
        throw new Error("Verification code not found in the email.");
      }
      expect(code).toBeDefined();
    } catch (error) {
      console.error("Error fetching emails:", error);
      throw error; // Re-throw the error to fail the test
    }

    // Complete the first page of the sign-up process
    await page.getByPlaceholder('Verifieringskod').fill(code);
    await page.getByLabel('Verifiera koden').click();
    await page.getByPlaceholder('Nytt lösenord').fill(testPassword);
    await page.getByPlaceholder('Bekräfta lösenordet').fill(testPassword);
    await page.getByLabel('Bli medlem').click();
    await expect(page).toHaveURL("https://sv-sit-marvel.filmstaden.se/skapa-konto/");
    
    // Fill in the next signup form
    await page.getByPlaceholder('Förnamn').fill('Playwright');
    await page.getByPlaceholder('Efternamn').fill('AutomaticTest');
    await page.getByPlaceholder('Mobilnummer').fill('0737889944');
    await page.getByPlaceholder('Personnummer').fill(socialSecurityNumber);
    await page.locator('#termsAndConditions').check();
    await page.locator('#subscriptionsOptIn').check();
    await page.getByRole('button', { name: 'Fortsätt' }).click();
    await expect(page).toHaveURL("https://sv-sit-marvel.filmstaden.se/mina-sidor/");

  });
});