const {test,expect} = require('@playwright/test')

test.use({viewport: {width: 1920, height: 1080}}) //Setting the viewport size for the test


test("Valid login and logout", async function({page}) {
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").type("Admin",{delay:200}); //Type actually types the text in the input field, the delay is the time between each characte
   
    await page.locator("input[name='password']").fill("admin123"); //Fill fills the text in the input field at once
    //await page.click("button[type='submit']")
    await page.locator("button[type='submit']").click();

    const userName = await page.textContent("p[class='oxd-userdropdown-name']"); //username variable
    expect(userName).toBeDefined; //Checking if the username is defined

    const firstMenuItem = await (page.locator("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").first().textContent()); //First menu item
    expect (firstMenuItem).toBe("Admin"); //Checking the first menu item to make sure the user is logged in

    //expect(await page.locator("p[class='oxd-userdropdown-name']").textContent()).toBe("Noah Jones")
    expect(await page.url()).toContain("dashboard");

    //await page.click("p[class='oxd-userdropdown-name']")
    await page.getByAltText("profile picture").first().click();
    await page.click("a[href='/web/index.php/auth/logout']");

    expect(await page.locator("button[type='submit']").textContent()).toBe(" Login ");
    

});

test("Invalid Login", async function({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Adm432",{delay:200}); //Type actually types the text in the input field, the delay is the time between each character
    await page.locator("input[name='password']").fill("admin1234"); //wrong password to check error message
    await page.click("button[type='submit']");


    const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();
    //await expect(await page.locator("p[class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()).toBe("Invalid credentials") //Checking the error message
    //await expect(await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()).toBe("Invalid credentials") //Checking the error message
    //await expect(await page.getByText("Invalid Credentials").isVisible()).toBeTruthy() //Checking the error message
    await expect(errorMessage).toBe("Invalid credentials");
    //console.log("Error message is "+errorMessage);

    expect ( errorMessage.includes("Invalid")).toBeTruthy();
    expect (errorMessage==="Invalid credentials").toBeTruthy();
});