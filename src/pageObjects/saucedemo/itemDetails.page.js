const { BasePage } = require('./base.page');

exports.ItemDetailsPage = class ItemDetailsPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
  }

  async addItemToCart() {
    await this.addToCartButton.click();
  }

}