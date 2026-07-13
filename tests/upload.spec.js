import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.describe('File Upload Page', () => {
  const tempFileName = 'playwright-test-upload.txt';
  const tempFilePath = path.join(__dirname, tempFileName);

  test.beforeAll(() => {
    // Create a temporary file to upload
    fs.writeFileSync(tempFilePath, 'Hello, this is a test file for verification.');
  });

  test.afterAll(() => {
    // Clean up temporary file
    if (fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
    }
  });

  test('should upload a file successfully', async ({ page }) => {
    // Navigate to upload page
    await page.goto('/upload');

    // Select the file input element and upload the temp file
    const fileInput = page.locator('#fileInput');
    await fileInput.setInputFiles(tempFilePath);

    // Click submit button
    const submitBtn = page.locator('#fileSubmit');
    await submitBtn.click();

    // Verify success page is displayed
    const heading = page.locator('h1');
    await expect(heading).toHaveText('File Uploaded!');

    // Verify that the file name is shown on the success page
    await expect(page.locator(`text=${tempFileName}`)).toBeVisible();
  });
});
