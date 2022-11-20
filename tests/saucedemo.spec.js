const { test } = require('../fixtures/sauceDemo.fixture');

test('Checkout', async ({ sauceDemoCustomer }) => {
  await sauceDemoCustomer.logsIn();
  await sauceDemoCustomer.addsProductToCart();
  await sauceDemoCustomer.goesToCart();
  await sauceDemoCustomer.performsCheckout();
  await sauceDemoCustomer.goesToHome();
  await sauceDemoCustomer.isAtInventoryPage();  
});
