import { test, expect } from '@playwright/test';

test('App can start', async ({ page }) => {
  await page.goto('./');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Arcus Observability | Arcus - Observability');
});
