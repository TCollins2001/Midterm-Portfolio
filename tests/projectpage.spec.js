const { test, expect } = require('@playwright/test');

test('check that correct title is present', async ({ page }) => {
  await page.goto('projects.html');

  await expect(page).toHaveTitle('MIDTERM PORTFOLIO: PROJECTS'); 
});

test('check that all nav-links are present', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'HOME'});
  await page.getByRole('link', { name: 'ABOUT'});
  await page.getByRole('link', { name: 'PROJECTS'});
});

test('check that "NOTABLE PROJECTS" text is present inside hero section h1', async ({ page }) => {
  await page.goto('projects.html');

  const heading = page.locator('h1');
  await expect(heading).toHaveText('NOTABLE PROJECTS');
});

test('check that button is present and has the text "VIEW"', async ({ page }) => {
  await page.goto('projects.html');

  await page.getByRole('button', { name: 'VIEW'});
});

test('check that certain list items are present and described correctly', async ({ page }) => {
  await page.goto('projects.html');

  await page.getByRole('list', { name: 'Utilized media queries to create website responsiveness'});
  await page.getByRole('list', { name: 'Utilized HTML and CSS to create official four-page website to promote local day care business'});
  await page.getByRole('list', { name: 'Utilized HTML, CSS, and JavaScript to create official five-page website to promote concert venues around New Jersey'});
});