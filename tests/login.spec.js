import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto('/login');
  });

  test('should successfully log in with valid credentials and then log out', async ({ page }) => {
    // Fill credentials
    await page.fill('#username', 'practice');
    await page.fill('#password', 'SuperSecretPassword!');
    
    // Click submit
    await page.click('button[type="submit"]');

    // Verify redirection to secure area page
    await expect(page).toHaveURL(/\/secure/);

    // Verify flash success message is visible and contains expected text
    const flashMessage = page.locator('#flash-message');
    await expect(flashMessage).toBeVisible();
    await expect(flashMessage).toContainText('You logged into a secure area!');

    // Verify we are indeed on the secure page by checking for the logout button
    const logoutBtn = page.locator('a[href="/logout"]');
    await expect(logoutBtn).toBeVisible();

    // Click logout
    await logoutBtn.click();

    // Verify redirection back to login page
    await expect(page).toHaveURL(/\/login/);
    await expect(flashMessage).toBeVisible();
    await expect(flashMessage).toContainText('You logged out of the secure area!');
  });

  test('should display error message with invalid credentials', async ({ page }) => {
    // Fill invalid credentials
    await page.fill('#username', 'invalidUser');
    await page.fill('#password', 'invalidPass');
    
    // Click submit
    await page.click('button[type="submit"]');

    // Verify we stay on the login page
    await expect(page).toHaveURL(/\/login/);

    // Verify flash error message is visible and contains expected error text
    const flashMessage = page.locator('#flash-message');
    await expect(flashMessage).toBeVisible();
    await expect(flashMessage).toContainText(/is invalid!/);
  });
});
