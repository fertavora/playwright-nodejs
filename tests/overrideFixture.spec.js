const { test, expect } = require('../fixtures/page.fixture');

test('Using the override page fixture', async ({ inventoryPage }) => {
  await test.step('Select first product', async () => {
    await inventoryPage.selectFirstProduct();
    await inventoryPage.page.waitForTimeout(2000);
  });
})