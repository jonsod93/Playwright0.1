import { test, expect } from '@playwright/test';
import { MailiskClient } from "mailisk";

test.describe("User Account Tests", () => {
  let page;
  let testEmailAddress;
  const testPassword = "1234Test1234";
  const namespace = "xw50xu01olrr";
  const mailisk = new MailiskClient({ apiKey: "umQrBAvP90qajGGk2Qv9_a4yDhyuAPcwsfPPjs7ovBY" });
  const errorMessageText = 'E‑postadressen eller lösenordet är felaktigt.';

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context and page
    const context = await browser.newContext();
    page = await context.newPage();

    // Generate a unique email address
    testEmailAddress = `test.${Date.now()}@${namespace}.mailisk.net`;

    // Navigate to the social security number page and get the number
    const socialSecurityNumberPage = await context.newPage();
    await socialSecurityNumberPage.goto('https://www.personnummer.nu/');
    await socialSecurityNumberPage.getByLabel('Jag samtycker').click();
    const socialSecurityNumber = await socialSecurityNumberPage.locator('body > div:nth-child(1) > main:nth-child(3) > div:nth-child(4) > p:nth-child(4)').textContent();
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


    // Complete the sign-up process
    await page.getByPlaceholder('Verifieringskod').fill(code);
    await page.getByLabel('Verifiera koden').click();
    await page.getByPlaceholder('Nytt lösenord').fill(testPassword);
    await page.getByPlaceholder('Bekräfta lösenordet').fill(testPassword);
    await page.getByLabel('Bli medlem').click();
    await expect(page).toHaveURL("https://sv-sit-marvel.filmstaden.se/skapa-konto/");
    
    // Fill in the next signup form
    await page.getByPlaceholder('Förnamn').fill('Förnamn');
    await page.getByPlaceholder('Efternamn').fill('Efternamn');
    await page.getByPlaceholder('Mobilnummer').fill('0737889944');
    await page.getByPlaceholder('Personnummer').fill(socialSecurityNumber);
    await page.locator('#termsAndConditions').check();
    await page.locator('#subscriptionsOptIn').check();
    await page.getByRole('button', { name: 'Fortsätt' }).click();
    await expect(page).toHaveURL("https://sv-sit-marvel.filmstaden.se/mina-sidor/");
  });

  test("Check 'Mina sidor'", async () => {
    // Navigate to 'Mina sidor'
    await page.goto('https://sv-sit-marvel.filmstaden.se/mina-sidor/');
    await expect(page).toHaveURL("https://sv-sit-marvel.filmstaden.se/mina-sidor/");

    // Perform actions and assertions on 'Mina sidor'
    await page.getByRole('button', { name: ' Kundkommunikation' }).click();
    await expect(page.getByLabel('Kundkommunikation')).toContainText('Medlemsinformation och filmnyheter');
    await page.getByLabel('Påminnelser, aktuella hä').uncheck();
    await page.getByLabel('Inbjudningar och tävlingar').uncheck();
    await page.getByLabel('Biljettsläpp och erbjudanden').uncheck();
    await page.getByLabel('Medlemsinformation och').uncheck();
    await expect(page.getByLabel('Medlemsinformation och')).not.toBeChecked();
    await expect(page.getByLabel('Biljettsläpp och erbjudanden')).not.toBeChecked();
    await expect(page.getByLabel('Inbjudningar och tävlingar')).not.toBeChecked();
    await expect(page.getByLabel('Påminnelser, aktuella hä')).not.toBeChecked();

    // Add a friend and check that the friend is added
    await page.getByRole('button', { name: ' Poängdelning med vänner' }).click();
    await page.getByPlaceholder('XXX-XXX').fill('GF3UR2');
    await page.getByPlaceholder('Namn').fill('Phoxfake');
    await page.getByRole('button', { name: 'Lägg till ny vän' }).click();
    await expect(page.getByLabel('Phoxfake')).not.toBeChecked();
  });

  test.afterAll(async () => {
    // Cancel the membership
    await page.getByRole('button', { name: 'Avsluta medlemskap' }).click();
    await expect(page.getByRole('dialog')).toContainText('Är du säker på att du vill avsluta medlemskap?');
    await page.getByRole('button', { name: 'Ja, avsluta mitt konto' }).click();

    // Try to login with the deleted account
    await page.getByRole('link', { name: 'Logga in menuitem logo Logga' }).click();
    await page.locator("//input[@id='signInName']").fill(testEmailAddress);
    await page.locator("//input[@id='password']").fill(testPassword);
    await page.locator("#next").click();

    // Loop that is used to check if the error message is displayed and if it is, it will break the loop, this is needed due to caching issues on the site
    while (true) {
      await page.waitForTimeout(1000);
      if (await page.locator("div[class='error pageLevel'] p").filter({ hasText: errorMessageText }).count() > 0) {
        break; // Exit the loop immediately if the condition is met
      }
      await page.goBack();
      if (await page.locator("div[class='error pageLevel'] p").filter({ hasText: errorMessageText }).count() > 0) {
        break; // Exit the loop immediately if the condition is met
      }
      await page.locator("//input[@id='signInName']").fill(testEmailAddress);
      if (await page.locator("div[class='error pageLevel'] p").filter({ hasText: errorMessageText }).count() > 0) {
        break; // Exit the loop immediately if the condition is met
      }
      await page.locator("//input[@id='password']").fill(testPassword);
      if (await page.locator("div[class='error pageLevel'] p").filter({ hasText: errorMessageText }).count() > 0) {
        break; // Exit the loop immediately if the condition is met
      }
      await page.locator("#next").click();
    }
    await expect(page.locator("div[class='error pageLevel'] p")).toContainText(errorMessageText);
    // Cancel the login attempt
    await page.getByRole('link', { name: 'Avbryt' }).click();
    await expect(page).toHaveURL('https://sv-sit-marvel.filmstaden.se/');
  });
});