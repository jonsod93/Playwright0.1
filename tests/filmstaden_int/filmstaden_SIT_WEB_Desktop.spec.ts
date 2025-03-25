import { test, expect} from '@playwright/test';
import { MailiskClient } from "mailisk";
import { NotFoundPage } from '../../pages/filmstaden_int/404page';

const Environment = "https://sv-sit-marvel.filmstaden.se/"; // Set the environment to the SIT environment

//test.describe.configure({ retries: 2 });

test('Control giftcard-saldo', async ({ page, context }) => {
  // Block the ad script
  await context.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());
  
  //This test would be better if we had a specific present card that ALWAYS had a specific balance
  await page.goto(Environment);
  await page.getByRole('button', { name: 'Yes it’s okay' }).click();
  await page.getByRole('link', { name: 'Stockholm' }).first().click();
  
  //await page.waitForSelector('#i2');
  //await page.waitForSelector('button:has-text("Stäng")');
  //await page.getByRole('button', { name: 'Stäng' }).click();
 
  await page.getByRole('button', { name: 'Mer ' }).click();
  await page.getByRole('link', { name: 'Presentkort' }).click();
  await page.getByPlaceholder('Presentkortsnummer').fill('fsfesfse');
  await page.getByRole('button', { name: 'Visa saldo' }).click();
  await page.waitForTimeout(3000);
  await expect(page.getByRole('dialog')).toContainText('Kortet kan inte hittas');
  await page.getByRole('button', { name: '' }).click();
  await page.getByPlaceholder('Presentkortsnummer').fill('48395577913');
  await page.getByRole('button', { name: 'Visa saldo' }).click();
  await expect(page.getByRole('dialog')).toContainText('Presentkortssaldo');
  await expect(page.getByText('Presentkortssaldo')).toBeVisible();
  await page.getByText('Presentkortssaldo').click({
    button: 'right'
  });
  await page.getByRole('button', { name: '' }).click();
  await expect(page.getByRole('main')).toContainText('Presentkort');
});

test('Search town and movies', async ({ page, context }) => {
  // Block the ad script
  await context.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());

  await page.goto(Environment);
  await page.getByRole('button', { name: 'Yes it’s okay' }).click();
  await page.getByRole('textbox').fill('dwjao');
  await expect(page.getByRole('main')).toContainText('Inga träffar');
  await page.getByRole('textbox').fill('Göteborg');
  await expect(page.getByRole('main')).toContainText('Göteborg');
  await page.locator('ul').filter({ hasText: /^Göteborg$/ }).getByRole('link').click();

  await page.getByPlaceholder('Sök på filmens namn').fill('star wars');
  await expect(page.getByRole('link', { name: 'Star Wars: The Rise of' })).toBeVisible();
  await page.getByRole('link', { name: 'Star Wars: The Rise of' }).click();
  await expect(page.getByRole('main')).toContainText('Star Wars');
  await expect(page.getByLabel('Läs mer')).toBeVisible();
  await page.locator('(//a)[1]').click();
  await page.getByPlaceholder('Sök på filmens namn').fill('fhebsuipfsehf');
  await expect(page.getByText('Ingen träff!Vi kunde inte')).toBeVisible();
  await expect(page.getByLabel('', { exact: true }).locator('div')).toContainText('Ingen träff!');
  await page.getByRole('button', { name: '' }).click();

  await page.getByRole('button', { name: 'Göteborg' }).click();
  await page.getByPlaceholder('Sök stad').fill('');
  await expect(page.getByLabel('Välj din biostad').getByRole('heading')).toContainText('Välj din biostad');
  await page.getByPlaceholder('Sök stad').fill('fwaoifjawoi');
  await expect(page.getByLabel('Välj din biostad')).toContainText('Inga träffar');
  await page.getByPlaceholder('Sök stad').press('ControlOrMeta+a');
  await page.getByPlaceholder('Sök stad').fill('Göteborg');
  await page.getByPlaceholder('Sök stad').press('ControlOrMeta+a');
  await page.getByPlaceholder('Sök stad').fill('alingsås');
  await page.getByRole('button', { name: 'Välj stad Alingsås' }).click();
  await expect(page.locator('#gatsby-focus-wrapper')).toContainText('Alingsås');

});

test.describe.parallel("Unauthenticated tests purchases in Stockholm", () => {
  
  // Block the ad script for all tests in this suite
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    await context.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());
  });

  test('Card purchase', async ({ page, context }) => {

   // test.setTimeout(60000); // Set timeout to 60 seconds for the whole test
    let randomMovie = Math.floor(Math.random() * 7); // Generate a random number between 0 and 6
    
    await page.goto(Environment);
    await page.getByRole('button', { name: 'Yes it’s okay' }).click();
    await page.getByRole('link', { name: 'Stockholm' }).first().click();
    await expect(page.locator('#gatsby-focus-wrapper')).toContainText('Logga in');
    await page.locator("div[class='group/poster']").nth(randomMovie).click(); // Click on the Nth movie
  
    while (!(await page.locator("//li//li//li//li[1]//a[1]").count() > 0)) { // Loop until a movie that actually have a date is selected
      await page.waitForTimeout(500);
      await page.locator("(//a)[1]").click(); // Click on the main navigation back to the startpage
      randomMovie = Math.floor(Math.random() * 7); // Generate a new random number between 0 and 6
      await page.locator("div[class='group/poster']").nth(randomMovie).click(); // Click on the Nth movie
      await page.waitForTimeout(250);
    };
    await page.locator("//li//li//li//li[1]//a[1]").nth(0).click(); // Click on the first available date
  
    await expect(page.getByRole('main')).toContainText('Ordinarie');
  
    // Loop until ordinarie tickets is equal to 1
    while ((await page.locator('#stepper-inputfield_Ordinarie').inputValue()) !== "1") { 
      await page.locator('//span[@class="icomoon icon-collapse-solid  inline-block align-middle text-icon-size-40 w-[2.5rem] h-[2.5rem] leading-none"]').nth(0).click(); //first - button
      const inputValue = await page.locator('#stepper-inputfield_Ordinarie').inputValue();
      if (inputValue == "0") { // Check if the ordinarie tickets is 0
        await page.locator('//span[@class="icomoon icon-expand-solid  inline-block align-middle text-icon-size-40 w-[2.5rem] h-[2.5rem] leading-none"]').nth(0).click(); //first + button
      };
    };
    
    await expect(page.locator("//div[@class='shrink-0 text-right font-bold']")).toContainText('1 st');
  

    /* Check salongsinfo
    This should be broken out to a test of itself and it needs a while loop to check for
    a show that actually have salongsinfo
    await page.getByRole('button', { name: 'Salongsinformation' }).click();
    await expect(page.getByRole('dialog')).toContainText('Salongsinformation');
    await page.getByRole('button', { name: 'Stäng' }).click();
    */

    await page.getByPlaceholder('Fyll i din e-postadress').fill('phox.warlock7@mailinator.com');
    await page.waitForTimeout(500);
    
  
    // Check if the age limit acceptance is present
    if (await page.locator('label').filter({ hasText: 'Jag är medveten om att filmen' }).count() > 0) { 
      await page.locator('label').filter({ hasText: 'Jag är medveten om att filmen' }).first().click(); // Click the acceptance of the age limit
    } else if (await page.locator('label').filter({ hasText: 'Jag intygar att alla i sä' }).count() > 0) {
      await page.locator('label').filter({ hasText: 'Jag intygar att alla i sä' }).first().click(); // Click the acceptance of the age limit
    };
  
    //Navigera vidare till Nets och genomför köp
    await page.getByRole('button', { name: 'Fortsätt till kortbetalning' }).click();
    await expect(page.locator('#NETSHeader')).toContainText('Betala med kontokort');
    await page.getByPlaceholder('0000 0000 0000').fill('4925000000000004');
    await page.getByLabel('month').selectOption('12');
    await page.getByLabel('year').selectOption('28');
    await page.getByPlaceholder('000', { exact: true }).fill('123');
    await page.getByRole('button', { name: 'Betala' }).click();
  
    //Kontrollera köpets referensnummer
    await expect(page.locator("//h6[normalize-space()='Referensnummer']")).toContainText('Referensnummer');
    await page.getByRole('link', { name: 'Visa biljetter' }).click();
    await expect(page.getByRole('main'),).toContainText('Antal biobiljetter:');
    await page.getByRole('link', { name: ' Till filmstaden.se' }).click();
    await expect(page.getByRole('main')).toContainText('Vilken film vill du se?');
    
  });

  test('Discountcode FR purchase + control the confirmation email', async ({ page, context }, testInfo) => {
    
    test.setTimeout(90000); // Set timeout to 90 seconds for the whole test
    const namespace = "jdifc2r0pd1o";
    const mailisk = new MailiskClient({ apiKey: "umQrBAvP90qajGGk2Qv9_a4yDhyuAPcwsfPPjs7ovBY" });
   // let slowExpect = expect.configure({ timeout: 10000 }); // Set timeout to 10 seconds for individual expect calls
    let randomMovie = Math.floor(Math.random() * 7); // Generate a random number between 0 and 6
    let testEmailAddress = `test.${Date.now()}`+testInfo.project.name+`FRpurchase@${namespace}.mailisk.net`;

    // Save the start time of the test
    let testStartTime = new Date();
    // Change start time format for the email filtering later
    let timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds
  
    //Open both the filmstaden page
    await page.goto(Environment);
  
    //Accept cookies and navigate to the Stockholm startpage
    await page.getByRole('button', { name: 'Yes it’s okay' }).click();
    await page.getByRole('link', { name: 'Stockholm' }).first().click();
    await expect(page.locator('#gatsby-focus-wrapper')).toContainText('Logga in'); // Check if the page is the correct one and that the user is not logged in
    await page.locator("div[class='group/poster']").nth(randomMovie).click(); // Click on the Nth movie
  
    // Loop until a movie that actually have shows available is found and selected
    while (!(await page.locator("//li//li//li//li[1]//a[1]").count() > 0)) { 
      await page.waitForTimeout(500);
      await page.locator("(//a)[1]").click(); // Click on the main navigation back to the startpage
      randomMovie = Math.floor(Math.random() * 7); // Generate a new random number between 0 and 6
      await page.locator("div[class='group/poster']").nth(randomMovie).click(); // Click on the Nth movie
      await page.waitForTimeout(250);
    };
  
    // Click on the first available date/show
    await page.locator("//li//li//li//li[1]//a[1]").first().click();
  
    //Make sure there are Ordinarie tickets available for sale
    await expect(page.getByRole('main')).toContainText('Ordinarie');
  
    // Loop until ordinarie tickets is equal to 1
    while ((await page.locator('#stepper-inputfield_Ordinarie').inputValue()) !== "1") { 
      await page.locator('//span[@class="icomoon icon-collapse-solid  inline-block align-middle text-icon-size-40 w-[2.5rem] h-[2.5rem] leading-none"]').nth(0).click(); //first - button
      const inputValue = await page.locator('#stepper-inputfield_Ordinarie').inputValue();
      if (inputValue === "0") {
        await page.locator('//span[@class="icomoon icon-expand-solid  inline-block align-middle text-icon-size-40 w-[2.5rem] h-[2.5rem] leading-none"]').nth(0).click(); //first + button
      }
    };
    
    //Double check to make sure the amount of tickets is 1
    await expect(page.locator("//div[@class='shrink-0 text-right font-bold']")).toContainText('1 st');
  
    //Test discount error message and add a correct discount code
    await test.step("Control discount error message and add a correct discount code", async () => { 
      await page.getByRole('button', { name: 'Lös in in rabattkod' }).click();
      await page.getByRole('button', { name: ' Probem med rabattkoden' }).click();
      await expect(page.getByLabel('Probem med rabattkoden')).toBeVisible();
      await expect(page.getByLabel('Probem med rabattkoden')).toContainText('Endast ett erbjudande per biljett');
      await page.getByPlaceholder('Ange kod').fill('faresgrdsg');
      await page.getByRole('button', { name: 'Aktivera' }).click();
      await expect(page.locator('form')).toContainText('Rabatten hittades inte');
      await page.getByPlaceholder('Ange kod').press('ControlOrMeta+a');
      await page.getByPlaceholder('Ange kod').fill('FR');
      await page.getByRole('button', { name: 'Aktivera' }).click();
      await expect(page.getByRole('main')).toContainText('0.00 kr');
      await expect(page.getByRole('main')).toContainText('Ingen betalnings behövs. Njut av din filmupplevelse!');
    });
    
    //Add email
    await page.getByPlaceholder('Fyll i din e-postadress').fill(testEmailAddress);
  
    // Check if the age limit acceptance is present
    if (await page.locator('label').filter({ hasText: 'Jag är medveten om att filmen' }).count() > 0) { 
      await page.locator('label').filter({ hasText: 'Jag är medveten om att filmen' }).first().click(); // Click the acceptance of the age limit
    } else if (await page.locator('label').filter({ hasText: 'Jag intygar att alla i sä' }).count() > 0) {
      await page.locator('label').filter({ hasText: 'Jag intygar att alla i sä' }).first().click(); // Click the acceptance of the age limit
    };
  
    //Finish the purchase
    await page.getByRole('button', { name: 'Fortsätt'}).click();
  
    //Make sure you end up on the receipt page and save the reference number for email verification later
    await expect(page.locator("//h6[normalize-space()='Referensnummer']")).toContainText('Referensnummer');
    let refNumber = await page.locator('h5.mb-0.h4').textContent();
    await page.getByRole('link', { name: 'Visa biljetter' }).click();
    await expect(page.getByRole('main'),).toContainText('Antal biobiljetter:');
    await page.getByRole('link', { name: ' Till filmstaden.se' }).click();
    await expect(page.getByRole('main')).toContainText('Vilken film vill du se?');
    
    // Wait for the verification email to arrive
    let emailContent;
    try {
      const { data: emails } = await mailisk.searchInbox(namespace, {
        to_addr_prefix: testEmailAddress,
        from_timestamp: timeFrom,
      });

      const email = emails[0];
      // Extract the entire email content
      emailContent = email.text;
      if (!emailContent) {
      throw new Error("Email content not found.");
      }
      expect(emailContent).toBeDefined();
    } catch (error) {
      console.error("Error fetching emails:", error);
      throw error; // Re-throw the error to fail the test
    }

    // Extract text content without HTML tags
    const plainTextContent = emailContent.replace(/<[^>]*>/g, '');

    // Check that the email contains the correct reference number and price
    expect(plainTextContent).toContain(refNumber);
    expect(plainTextContent).toContain("0,00 kr");
    
  });
});

test.describe.parallel("2FA tests", () => {
  const namespace = "jdifc2r0pd1o";
  const mailisk = new MailiskClient({ apiKey: "umQrBAvP90qajGGk2Qv9_a4yDhyuAPcwsfPPjs7ovBY" });
  const testPassword = "1234Test1234";

  // Block the ad script for all tests in this suite
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    await context.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());
  });

  // Tests the proper 2Factor authentication flow
  test("2FA login", async ({page}, testInfo) => {
    // Set the test email based on the browser
    const testEmailAddress = `PermanentUser`+testInfo.project.name+`login@${namespace}.mailisk.net`;
    
    // Save the start time of the test
    let testStartTime = new Date();
    // Change start time format for the email filtering later
    let timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds

    // Go to the page and click past cookie concent and select Stockholm
    await page.goto('https://sv-sit-marvel.filmstaden.se/');
    await page.getByRole('button', { name: 'Yes it’s okay' }).click();
    await page.getByRole('link', { name: 'Stockholm' }).first().click();

    // Perform login
    await page.getByRole('link', { name: 'Logga in menuitem logo Logga' }).click();
    await page.getByPlaceholder('E‑postadress').fill(testEmailAddress);
    await page.getByPlaceholder('Lösenord').fill(testPassword);
    await page.getByRole('button', { name: 'Logga in' }).click();
    await page.getByRole('button', { name: 'Skicka verifieringskod' }).click()
    
    // Wait for the verification email to arrive
    let code;
    try {
      const { data: emails } = await mailisk.searchInbox(namespace, {
        to_addr_prefix: testEmailAddress,
        from_timestamp: timeFrom,
      });

      const email = emails[0];
      // Extract the verification code from the email
      const matches = email.text.match(/\d+/g);
      if (matches && matches.length > 1) {
        code = matches[3]; // Take the fourth sequence of digits (this is the code) (number in matches[] should match amount of number groups in the namespace)
      } else {
        throw new Error("Verification code not found in the email.");
      }
      expect(code).toBeDefined();
    } catch (error) {
      console.error("Error fetching emails:", error);
      throw error; // Re-throw the error to fail the test
    }

    // Fill in the verification code and continue the login flow
    await page.getByPlaceholder('Verifieringskod').fill(code);
    await page.getByRole('button', { name: 'Verifiera koden' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fortsätt' }).click();

    // Assert that the login was successful by checking for the user name
    await page.waitForTimeout(2000);
    const textContent = await page.getByRole('heading', { name: 'Playwright AutomaticTest' }).textContent();
    expect(textContent).toContain("Playwright AutomaticTest");

  });

  // Tests the 2Factor sign up and deletion of account
  test("Create and delete account", async ({ page , request }, testInfo) => {    
    test.setTimeout(90000); // Set timeout to 90 seconds for the whole test
    
    // Set the test email based on date and browser, making sure it's always unique for each test run and browser
    const testEmailAddress = `test.${Date.now()}.${testInfo.project.name}.login@${namespace}.mailisk.net`;
    const testPassword = "1234Test1234";

    // Save the start time of the test
    let testStartTime = new Date();
    let timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds
    const country = 'se';

    // Create a new page context for the social security number page
    let socialSecurityNumberPage = await page.context().newPage();
    // Navigate to the social security number page and get the number
    await socialSecurityNumberPage.goto('https://www.personnummer.nu/');
    await socialSecurityNumberPage.getByLabel('Jag samtycker').click();
    let socialSecurityNumber = await socialSecurityNumberPage.locator('body > div:nth-child(1) > main:nth-child(3) > div:nth-child(4) > p:nth-child(4)').textContent();
    //let socialSecurityNumber = "811117-3335"; // Hardcoded social security number for now
    

    // Navigate to the Filmstaden page and start the sign-up process
    await page.goto('https://sv-sit-marvel.filmstaden.se/');
    await page.getByRole('button', { name: 'No thanks' }).click();
    await page.getByRole('link', { name: 'Stockholm' }).first().click();
    await page.getByRole('link', { name: 'Logga in menuitem logo Logga' }).click();
    await page.getByRole('link', { name: 'Bli medlem' }).click();
    await page.getByPlaceholder('E‑postadress').fill(testEmailAddress);
    await page.getByRole('button', { name: 'Skicka verifieringskod' }).click();

    // Wait for the verification email to arrive
    let code;
    try {
      const { data: emails } = await mailisk.searchInbox(namespace, {
        to_addr_prefix: testEmailAddress,
        from_timestamp: timeFrom,
      });

      const email = emails[0];
      // Extract the verification code from the email
      const matches = email.text.match(/\d+/g);
      if (matches && matches.length > 1) {
        code = matches[4]; // Take the fifth sequence of digits (verification code) (number in matches[] should match amount of number groups in the namespace+1)
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
    await page.getByPlaceholder('Förnamn').fill('Förnamn');
    await page.getByPlaceholder('Efternamn').fill('Efternamn');
    await page.getByPlaceholder('Mobilnummer').fill('0737889944');
    await page.getByPlaceholder('Personnummer').fill(socialSecurityNumber);
    await page.locator('#termsAndConditions').check();
    await page.locator('#subscriptionsOptIn').check();
    

    // Wait for the Avsluta Medlemskap button to be visible before continuing to make sure
    // we're on the correct page
    //await expect(page.getByRole('button', { name: 'Avsluta medlemskap' })).toBeVisible();
    await expect(async () => {
      await page.getByRole('button', { name: 'Fortsätt' }).click();
      await page.waitForTimeout(2000); // This hard wait can be removed later once we have an error message in place
      const isSettingsFound = await page.getByRole('main').textContent();
      if (!(isSettingsFound && isSettingsFound.includes('Inställningar'))) {
        // If the settings page is not found, reload the social security number page for a new SSN and try again
        await socialSecurityNumberPage.reload();
        await socialSecurityNumberPage.waitForTimeout(1000);
        socialSecurityNumber = await socialSecurityNumberPage.locator('body > div:nth-child(1) > main:nth-child(3) > div:nth-child(4) > p:nth-child(4)').textContent();
    
        try {
          // Try to fill the social security number field
          await page.getByPlaceholder('Personnummer').fill(socialSecurityNumber);
        } catch (error) {
          console.log("Could not find the 'Personnummer' field, moving on...");
        }
  
        throw new Error("Kunde ej skapa användare, testar nytt personnr");
      }
    }).toPass();

    // Close the social security number page
    await socialSecurityNumberPage.close();

    // Save the userID and set variables for the API call at the end of the tes
    let codeElement = await page.locator("div[class='flex'] p[class='text-sm text-weak']").nth(0);
    // Extract the text content
    let userID = await codeElement.textContent();
    await expect(userID).toBeDefined();
    await expect(userID).toMatch(/^[A-Z0-9]{6}$/); // Example assertion to check the format
    const apiUrl = `https://inte-services.cinema-api.com/Preference/validatefriend/${country}?code=${userID}`;

    // Control Mina Sidor, that is has the correct elements
    //await expect(page.getByRole('main')).toContainText('Inställningar');
    await expect(page.getByRole('main')).toContainText('Kvar till guldmedlem');
    await page.locator("//button[@class='block h-full w-full']").click();
    await expect(page.getByRole('heading', { name: 'Din enhets skärmljusstyrka', exact: true })).toBeVisible();
    await page.getByRole('button', { name: '' }).click();

    // Check that the correct elements are visible under the profile "tab"
    await page.getByRole('button', { name: ' Profil' }).click();
    await expect(page.locator('form')).toContainText('Återställ lösenord här');
    await expect(page.locator('form')).toContainText('Byt din e-postadress här');
    await expect(page.getByLabel('Profil').getByRole('button')).toContainText('Spara telefonnummer');

    // Check that the checkboxes are clickable and that they are not checked after clicking
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

    // Cancel the membership
    await page.getByRole('button', { name: 'Avsluta medlemskap' }).click();
    await expect(page.getByRole('dialog')).toContainText('Är du säker på att du vill avsluta medlemskap?');
    await page.getByRole('button', { name: 'Ja, avsluta mitt konto' }).click();

    // Check that the user is deleted
    await expect(async () => {
      // Make the API call to check if the user exists
      const response = await request.get(apiUrl);
      // Check that the response status is 200 (OK)
      await expect(response.status()).toBe(200);
      // Read the response body
      const responseBody = await response.json();
      // Perform assertion on the response body
      await expect(responseBody).toBeFalsy(); // Check that the user does not exist anymore
    }).toPass({timeout: 10000});
   
  });
});

test.describe("Template", () => {
  const namespace = "jdifc2r0pd1o";
  const mailisk = new MailiskClient({ apiKey: "umQrBAvP90qajGGk2Qv9_a4yDhyuAPcwsfPPjs7ovBY" });

  // Block the ad script for all tests in this suite
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    await context.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());
  });
});

// A test group for tests that require the user to be logged in NOT USED ATM
test.describe.serial("Logged In State Tests", () => {
  test.setTimeout(60000); // Set timeout to 60 seconds for the whole test
  const namespace = "jdifc2r0pd1o";
  const mailisk = new MailiskClient({ apiKey: "umQrBAvP90qajGGk2Qv9_a4yDhyuAPcwsfPPjs7ovBY" });
  const testEmailAddress = 'PermanentUser1@jdifc2r0pd1o.mailisk.net';
  const testPassword = "Test1234";
 

  test.beforeAll(async ({ page }) => {
    // Save the date and time of the tests start for later email filtering
    let testStartTime = new Date();

    // Perform login
    await page.goto('https://sv-sit-marvel.filmstaden.se/');
    await page.getByRole('button', { name: 'Yes it’s okay' }).click();
    await page.getByRole('link', { name: 'Stockholm' }).first().click();
    await page.getByRole('link', { name: 'Logga in menuitem logo Logga' }).click();
    await page.getByPlaceholder('E‑postadress').fill(testEmailAddress);
    await page.getByPlaceholder('Lösenord').fill(testPassword);
    await page.getByRole('button', { name: 'Logga in' }).click();
    await page.getByRole('button', { name: 'Skicka verifieringskod' }).click();

    // Calculate the time range for the email search
    let timeFrom = Math.floor(testStartTime.getTime() / 1000); // Unix timestamp in seconds
    
    // Wait for the verification email to arrive
    let code;
    try {
      const { data: emails } = await mailisk.searchInbox(namespace, {
        to_addr_prefix: testEmailAddress,
        from_timestamp: timeFrom,
      });

      const email = emails[0];
      // Extract the verification code from the email
      const matches = email.text.match(/\d+/g);
      if (matches && matches.length > 1) {
        code = matches[4]; // Take the fifth sequence of digits
      } else {
        throw new Error("Verification code not found in the email.");
      }
      expect(code).toBeDefined();
    } catch (error) {
      console.error("Error fetching emails:", error);
      throw error; // Re-throw the error to fail the test
    }

    await page.getByPlaceholder('Verifieringskod').fill(code);
    await page.getByRole('button', { name: 'Verifiera koden' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Fortsätt' }).click();

    // Wait for navigation or some element that indicates login success
    await page.waitForSelector("//div[@class='text-lg font-bold']");
  });

});