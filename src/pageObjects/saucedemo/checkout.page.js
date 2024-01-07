exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.inputFirstName = page.getByPlaceholder('First Name');
    this.inputLastName = page.getByPlaceholder('Last Name');
    this.inputZipCode = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.thanksMessage = page.getByText('Thank you for your order!', { exact: true });
    this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
  
  async fillCheckoutForm(checkoutInfo) {
    await this.inputFirstName.fill(checkoutInfo.firstName);
    await this.inputLastName.fill(checkoutInfo.lastName);
    await this.inputZipCode.fill(checkoutInfo.zipCode);
  }


}