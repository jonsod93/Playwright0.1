import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sv-sit-marvel.filmstaden.se/');
  //Landingpage
  await page.getByRole('button', { name: 'Yes it’s okay' }).click();
  await page.getByRole('link', { name: 'Stockholm' }).first().click();
  //Startpage
  await page.getByRole('button', { name: 'Mer ' }).click();
  await page.getByRole('link', { name: 'Presentkort', exact: true }).click();
  //Presentkortpage
  await page.getByRole('textbox', { name: 'Har du redan ett presentkort' }).fill('fgsdfsdfsd');
  await page.getByRole('button', { name: 'Visa saldo' }).click();
  await expect(page.getByRole('heading', { name: 'Kortet kan inte hittas' })).toBeVisible();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('textbox', { name: 'Har du redan ett presentkort' }).fill('');
  await page.getByRole('textbox', { name: 'Har du redan ett presentkort' }).fill('20051295717');
  await page.getByRole('button', { name: 'Visa saldo' }).click();
  await expect(page.getByRole('heading', { name: 'Det här presentkortet har fö' })).toBeVisible();
});
