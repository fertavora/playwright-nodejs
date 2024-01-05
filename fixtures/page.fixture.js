const base = require('@playwright/test');

exports.test = base.test.extend({
  page: async({ baseURL, page }, use) => {
    await page.goto(baseURL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await use(page);
  },
  inventoryPage: async({ page }, use) => {
    const inventoryPage = {
      page: page,
      selectFirstProduct: async () => {
        await inventoryPage.page.locator('#item_4_img_link').click();
      }
    }
    use(inventoryPage);
  }
});

exports.expect = base.expect;