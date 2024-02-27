// @ts-check
const { test, expect } = require('@playwright/test');

test('check that UTF-8 meta tag is present', async ({ page }) => {
  await page.goto('/');

  const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));

  await expect(metaCharset).toBe('UTF-8'); 
});

test('check that correct title is present', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('MIDTERM PORTFOLIO'); 
});

test('check that logo id is present', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('logo');
});

test('check that all nav-links are present', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'HOME'});
  await page.getByRole('link', { name: 'ABOUT'});
  await page.getByRole('link', { name: 'PROJECTS'});
});

test('check that "HELLO!" text is present inside hero section h1', async ({ page }) => {
  await page.goto('/');

  const heading = page.locator('h1');
  await expect(heading).toHaveText('HELLO!');
});

test('check that "GREAT! THIS IS THE RIGHT PLACE!" text is present', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('GREAT! THIS IS THE RIGHT PLACE!')).toBeVisible();
});

test('check that alternative text is correct', async ({ page }) => {
  await page.goto('/');

  await page.getByAltText('profile picture of Te\'Onvion').click();
});

test('check that "BOOK NOW" text is present', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('BOOK NOW')).toBeVisible();
});

test('check that correct alternative text is present', async ({ page }) => {
  await page.goto('/');

  await page.getByAltText('profile picture of Te\'Onvion');
});


