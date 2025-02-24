
  /* FR Purchase with MAILINATOR
  test('Discountcode FR purchase + control the confirmation email', async ({ page }, testInfo) => {
    test.setTimeout(120000); // Set timeout to 120 seconds for the whole test
   // let slowExpect = expect.configure({ timeout: 10000 }); // Set timeout to 10 seconds for individual expect calls
    let randomMovie = Math.floor(Math.random() * 7); // Generate a random number between 0 and 6
    let mailPage = await page.context().newPage(); // Create a new page context for the mailinator page
  
    //Open both the filmstaden page and the mailinator page
    await mailPage.goto('https://www.mailinator.com/v4/public/inboxes.jsp?to=phox.warlock'+testInfo.project.name);
    await page.goto(Environment);
  
    //Accept cookies and navigate to the Stockholm startpage
    await page.getByRole('button', { name: 'Yes it’s okay' }).click();
    await page.getByRole('link', { name: 'Stockholm' }).first().click();
    await expect(page.locator('#gatsby-focus-wrapper')).toContainText('Logga in'); // Check if the page is the correct one and that the user is not logged in
    await page.locator("div[class='group/poster']").nth(randomMovie).click(); // Click on the Nth movie
  
    // Loop until a movie that actually have shows available is found and selected
    while (!(await page.locator("//li//li//li//li[1]//a[1]").count() > 0)) { 
      await page.waitForTimeout(500);
      await page.locator("#mainNavigationLogotype").click(); // Click on the main navigation back to the startpage
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
      if ((await page.locator('#stepper-inputfield_Ordinarie')).inputValue() == "0") { // Check if the ordinarie tickets is 0
        await page.locator('//span[@class="icomoon icon-expand-solid  inline-block align-middle text-icon-size-40 w-[2.5rem] h-[2.5rem] leading-none"]').nth(0).click(); //first + button
     }
    };
    
    //Double check to make sure the amount of tickets is 1
    await expect(page.locator("//div[@class='shrink-0 text-right font-bold']")).toContainText('1 st');
  
    //Test discount error message and add a correct discount code
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
  
    //Add email
    await page.getByPlaceholder('Fyll i din e-postadress').fill('phox.warlock'+testInfo.project.name+'@mailinator.com');
  
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
    
    //Refresh the page if there are no emails and check for the mail again
    while (await mailPage.locator('a:has-text("Get Verified!")').isVisible()) {
      await mailPage.waitForTimeout(1000);
      await mailPage.reload();
    }
  
    await mailPage.locator('tr[ng-repeat="email in emails"].ng-scope').nth(0).click();
    await page.waitForTimeout(2000);
  
    //Check if the email contains the correct reference number, otherwise go back to the inbox and check the next email
    while (!(await mailPage.locator('iframe[name="html_msg_body"]').contentFrame().locator('body').textContent()).includes(refNumber)){
        await mailPage.getByRole('link', { name: 'Back to Inbox' }).click();
        await mailPage.waitForTimeout(2000);
        await mailPage.locator('tr[ng-repeat="email in emails"].ng-scope').nth(0).click();
        await mailPage.waitForTimeout(2000);
    }
    
    //Doublecheck if the email contains the correct reference number and the correct price
    let emailBodyText = await mailPage.locator('iframe[name="html_msg_body"]').contentFrame().locator('body').textContent();
    expect(emailBodyText).toContain(refNumber);
    await expect(mailPage.locator('iframe[name="html_msg_body"]').contentFrame().locator('body')).toContainText('0,00 kr');
    
  });
  */