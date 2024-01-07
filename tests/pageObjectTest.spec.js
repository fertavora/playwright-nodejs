const { test, expect } = require("@playwright/test");

const { LoginPage, InventoryPage, ItemDetailsPage, CartPage, CheckoutPage } = require("../src/pageObjects/saucedemo");

test.describe('Test Suite', () => {

  let loginPage, inventoryPage, itemDetailsPage, cartPage, checkoutPage;

  test.beforeEach(async ({ page }) => {
    // Instantiate Page objects
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    itemDetailsPage = new ItemDetailsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
  });

  test('Test Case A', async ({ page }) => {
    await loginPage.goTo();
    await loginPage.validSignIn();

    await inventoryPage.selectFirstItemImage();
    // await inventoryPage.selectItemByIndex(0);

    await itemDetailsPage.addItemToCart();
    await itemDetailsPage.goToCart();

    await cartPage.clickCheckoutButton();

    await checkoutPage.fillCheckoutForm({ firstName: 'John', lastName: 'Doe', zipCode: '90210'});
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();

    // Assertions
    // Order is placed
    await expect(checkoutPage.thanksMessage).toBeVisible();
    
    // User is able to got back home
    await checkoutPage.backHomeButton.click();
    await expect(inventoryPage.productsTitle).toBeVisible();
  });

});
