import { DefaultPage } from './DefaultPage';

export class LoginFlowPage extends DefaultPage {
  private emailField: any;
  private passwordField: any;
  private loginButton: any;
  private signUpButton: any;
  private sendCodeButton: any;
  private verificationCodeField: any;
  private verifyButton: any;
  private continueButton: any;

  constructor(page: any) {
    super(page);
    this.emailField = this.page.getByPlaceholder('E‑postadress');
    this.passwordField = this.page.getByPlaceholder('Lösenord');
    this.loginButton = this.page.getByRole('button', { name: 'Logga in' });
    this.signUpButton = this.page.getByRole('link', { name: 'Bli medlem' });
    this.sendCodeButton = this.page.getByRole('button', {
      name: 'Skicka verifieringskod',
    });
    this.verificationCodeField = this.page.getByPlaceholder('Verifieringskod');
    this.verifyButton = this.page.getByRole('button', {
      name: 'Verifiera koden',
    });
    this.continueButton = this.page.getByRole('button', { name: 'Fortsätt' });
  }

  async fillEmail(email: string) {
    await this.emailField.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async clickSignUpButton() {
    await this.signUpButton.click();
  }

  async clickSendCode() {
    await this.sendCodeButton.click();
  }

  async fillVerificationCode(code: string) {
    await this.verificationCodeField.fill(code);
  }

  async clickVerify() {
    await this.verifyButton.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}
