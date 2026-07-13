import { test, expect } from '@playwright/test';

test.describe('Web Inputs Page', () => {
  test('should fill out the form, display inputs, and clear them', async ({ page }) => {
    // Navigate to the inputs page
    await page.goto('/inputs');

    // Selectors for input fields
    const numberInput = page.locator('#input-number');
    const textInput = page.locator('#input-text');
    const passwordInput = page.locator('#input-password');
    const dateInput = page.locator('#input-date');
    
    const displayBtn = page.locator('#btn-display-inputs');
    const clearBtn = page.locator('#btn-clear-inputs');

    // Fill in the form fields
    await numberInput.fill('42');
    await textInput.fill('Hello World');
    await passwordInput.fill('MySecret123');
    await dateInput.fill('2026-07-13');

    // Click the display inputs button
    await displayBtn.click();

    // Verify output fields display correct values
    await expect(page.locator('#output-number')).toHaveText('42');
    await expect(page.locator('#output-text')).toHaveText('Hello World');
    await expect(page.locator('#output-password')).toHaveText('MySecret123');
    await expect(page.locator('#output-date')).toHaveText('2026-07-13');

    // Click clear inputs button
    await clearBtn.click();

    // Verify that input fields are cleared
    await expect(numberInput).toHaveValue('');
    await expect(textInput).toHaveValue('');
    await expect(passwordInput).toHaveValue('');
    await expect(dateInput).toHaveValue('');
    
    // Verify that the output fields are hidden/cleared
    await expect(page.locator('#output-number')).toBeHidden();
    await expect(page.locator('#output-text')).toBeHidden();
    await expect(page.locator('#output-password')).toBeHidden();
    await expect(page.locator('#output-date')).toBeHidden();
  });
});
