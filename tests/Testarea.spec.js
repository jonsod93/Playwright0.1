const {test,expect} = require('@playwright/test')

test("My First Test", async function({page}) {
    expect(12).toBe(12)
})

test.skip("My Second Test", async function({page}) {
    expect(100).toBe(192)
})


test("My Third Test", async function({page}) {
    expect(2.0).toBe(2.0)
})

test("My Fourth Test", async function({page}) {
    expect("jonathan soderin".includes("soderin")).toBeTruthy()
    expect("jonathan soderin").toContain("soderin")
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
})