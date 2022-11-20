const { faker } = require('@faker-js/faker');

exports.SauceDemoCustomer = class SauceDemoCustomer {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
  }

  async logsIn() {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.locator('[data-test="username"]').fill('standard_user');
    await this.page.locator('[data-test="password"]').fill('secret_sauce');
    await this.page.locator('[data-test="login-button"]').click();
    return this;
  }

  async addsProductToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    return this;
  }

  async goesToCart() {
    await this.page.locator('a.shopping_cart_link').click();
    return this;
  }

  async performsCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
    await this.page.locator('[data-test="firstName"]').fill(faker.name.firstName());
    await this.page.locator('[data-test="lastName"]').fill(faker.name.lastName());
    await this.page.locator('[data-test="postalCode"]').fill(faker.address.zipCode());
    await this.page.locator('[data-test="continue"]').click();
    await this.page.locator('[data-test="finish"]').click();
    return this;
  }

  async goesToHome() {
    await this.page.locator('[data-test="back-to-products"]').click();
    return this;
  }

  async isAtInventoryPage() {
    await this.expect(this.page).toHaveScreenshot('expectedInventoryPage.png', { fullPage: true });
  }
}