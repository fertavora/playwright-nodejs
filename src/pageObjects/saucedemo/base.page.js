exports.BasePage = class BasePage {
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator('a.shopping_cart_link');
  }

  async goToCart() {
    await this.cartButton.click();
  }
}