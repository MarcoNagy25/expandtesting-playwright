import { test, expect } from '@playwright/test';

test.describe('Checkboxes Page', () => {
  test('should toggle checkboxes successfully', async ({ page }) => {
    // Navigate to the checkboxes page
    await page.goto('/checkboxes');

    const checkbox1 = page.locator('#checkbox1');
    const checkbox2 = page.locator('#checkbox2');

    // Note: On typical practice sites, Checkbox 1 starts unchecked and Checkbox 2 starts checked.
    // Let's assert the initial states based on whatever the page returns.
    // We'll read the initial state and then toggle.
    const isCh1Checked = await checkbox1.isChecked();
    const isCh2Checked = await checkbox2.isChecked();

    console.log(`Initial State - Checkbox 1: ${isCh1Checked}, Checkbox 2: ${isCh2Checked}`);

    // Toggle Checkbox 1
    if (isCh1Checked) {
      await checkbox1.uncheck();
      await expect(checkbox1).not.toBeChecked();
    } else {
      await checkbox1.check();
      await expect(checkbox1).toBeChecked();
    }

    // Toggle Checkbox 2
    if (isCh2Checked) {
      await checkbox2.uncheck();
      await expect(checkbox2).not.toBeChecked();
    } else {
      await checkbox2.check();
      await expect(checkbox2).toBeChecked();
    }

    // Verify toggling back works
    if (isCh1Checked) {
      await checkbox1.check();
      await expect(checkbox1).toBeChecked();
    } else {
      await checkbox1.uncheck();
      await expect(checkbox1).not.toBeChecked();
    }
  });
});
