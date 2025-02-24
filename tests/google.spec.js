const {test,expect} = require('@playwright/test')

test("Verify Application Title", async function({page}) {
    await page.goto("https://www.google.com")
    const url=await page.url()
    const title=await page.title()

    console.log("Title is "+title)
    console.log("URL is "+url)

    await expect(title).toBe("Google")
    await expect(page).toHaveTitle("Google")
})