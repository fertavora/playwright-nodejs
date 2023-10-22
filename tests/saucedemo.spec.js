const { test, expect } = require('../fixtures/sauceDemo.fixture');

test('Checkout', async ({ sauceDemoCustomer }) => {
  await sauceDemoCustomer.logsIn();
  await sauceDemoCustomer.addsProductToCart();
  await sauceDemoCustomer.goesToCart();
  await sauceDemoCustomer.performsCheckout();
  await sauceDemoCustomer.goesToHome();
  await expect(sauceDemoCustomer.page).toHaveScreenshot('expectedInventoryPage.png', { fullPage: true });
});
