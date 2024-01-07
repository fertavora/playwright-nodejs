exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }
}