const { test, expect } = require('@playwright/test');

test('check that correct title is present', async ({ page }) => {
  await page.goto('about.html');

  await expect(page).toHaveTitle('MIDTERM PORTFOLIO: ABOUT'); 
});

test('check that all nav-links are present', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'HOME'});
  await page.getByRole('link', { name: 'ABOUT'});
  await page.getByRole('link', { name: 'PROJECTS'});
});

test('check that "GET TO KNOW ME!" text is present inside hero section h1', async ({ page }) => {
  await page.goto('about.html');

  await page.getByRole('heading', { name: 'GET TO KNOW ME!'});
});

test('check that correct alternative text is present', async ({ page }) => {
  await page.goto('about.html');

  await page.getByAltText('computer, phone, and tablet devices with matching website screens');
});

test('check that "CONSULTATION & PLANNING" text is present', async ({ page }) => {
  await page.goto('about.html');

  await expect(page.getByText('CONSULTATION & PLANNING')).toBeVisible();
});

test('check that "FINAL DESIGN" text is present', async ({ page }) => {
  await page.goto('about.html');

  await expect(page.getByText('FINAL DESIGN')).toBeVisible();
});


