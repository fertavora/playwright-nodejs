exports.InventoryPage = class InventoryPage{
  constructor(page){
    this.page = page;
    this.itemsImages = page.locator('div.inventory_item_img');
    this.productsTitle = page.getByText('Products', { exact: true });
  }

  async selectFirstItemImage() {
    await this.itemsImages.first().click();
  }

  async selectItemByIndex(index) {
    await this.itemsImages.nth(index).click();
  }
}