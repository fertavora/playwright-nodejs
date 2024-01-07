exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.inputUsername = page.locator('#user-name');
    this.inputPassword = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goTo() {
    await this.page.goto('/');
  }

  async fillSignInForm(username, password) {
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password);
  }

  async validSignIn(){
    await this.fillSignInForm('standard_user', 'secret_sauce');
    await this.loginButton.click();
  }
}