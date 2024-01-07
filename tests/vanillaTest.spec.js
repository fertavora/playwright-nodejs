const { test, expect } = require("@playwright/test");

test.describe('Test Suite', () => {
  test('Test Case A', async ({ page }) => {
    // Sign into app
    await page.goto('/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Select first product by clicking its image
    await page.locator('div.inventory_item_img').first().click();

    // Add product to cart from the item details page
    await page.getByRole('button', { name: 'Add to cart' }).click();

    // Go to Checkout
    await page.locator('a.shopping_cart_link').click()
    await page.getByRole('button', { name: 'Checkout' }).click();

    // Fill checkout form
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Zip/Postal Code').fill('90210');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Finish' }).click();

    // Assertions
    // Order is placed
    await expect(page.getByText('Thank you for your order!', { exact: true })).toBeVisible();
    
    // User is able to got back home
    await page.getByRole('button', { name: 'Back Home' }).click();
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
  });

});
