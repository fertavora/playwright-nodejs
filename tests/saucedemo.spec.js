const { test, expect } = require('../fixtures/sauceDemo.fixture');

test('Add to cart from Inventory page', async ({ sauceDemoCustomer, page }) => {
  await sauceDemoCustomer.logsIn();
  await sauceDemoCustomer.addsProductToCart();
  await sauceDemoCustomer.goesToCart();
  await sauceDemoCustomer.performsCheckout();
  await sauceDemoCustomer.goesToHome();
  await sauceDemoCustomer.isAtInventoryPage();  
});
