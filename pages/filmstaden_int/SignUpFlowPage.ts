import { DefaultPage } from './DefaultPage';

export class SignUpFlowPage extends DefaultPage {
  private emailField: any;
  private passwordField: any;
  private confirmPasswordField: any;
  private sendCodeButton: any;
  private verificationCodeField: any;
  private verifyButton: any;
  private continueButton: any;
  private firstNameField: any;
  private lastNameField: any;
  private phoneNumberField: any;
  private SSNField: any;
  private termsCheckbox: any;
  private subscriptionCheckbox: any;
  private finishButton: any;
  private mainContentLocator: any;
  private ssnErrorMessage: any;
  private ssnErrorMessageOkButton: any;

  constructor(page: any) {
    super(page);
    this.emailField = this.page.getByPlaceholder('E‑postadress');
    this.passwordField = this.page.getByPlaceholder('Nytt lösenord');
    this.confirmPasswordField = this.page.getByPlaceholder(
      'Bekräfta lösenordet'
    );
    this.sendCodeButton = this.page.getByRole('button', {
      name: 'Skicka verifieringskod',
    });
    this.verificationCodeField = this.page.getByPlaceholder('Verifieringskod');
    this.verifyButton = this.page.getByRole('button', {
      name: 'Verifiera koden',
    });
    this.continueButton = this.page.getByLabel('Bli medlem');
    this.firstNameField = this.page.getByPlaceholder('Förnamn');
    this.lastNameField = this.page.getByPlaceholder('Efternamn');
    this.phoneNumberField = this.page.getByPlaceholder('Mobilnummer');
    this.SSNField = this.page.getByPlaceholder('Personnummer');
    this.termsCheckbox = this.page.locator('#termsAndConditions');
    this.subscriptionCheckbox = this.page.locator('#subscriptionsOptIn');
    this.finishButton = this.page.getByRole('button', { name: 'Fortsätt' });
    this.mainContentLocator = this.page.getByRole('main');
    this.ssnErrorMessage = this.page.getByRole('heading', { name: 'Kontrollera dina uppgifter' });
    this.ssnErrorMessageOkButton = this.page.getByRole('button', { name: 'Ok' });
  }

  async fillEmail(email: string) {
    await this.emailField.fill(email);
  }

  async clickSendCode() {
    await this.sendCodeButton.click();
  }

  async fillCode(code: string) {
    await this.verificationCodeField.fill(code);
  }

  async clickVerifyCode() {
    await this.verifyButton.click();
  }

  async fillPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async fillConfirmPassword(password: string) {
    await this.confirmPasswordField.fill(password);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async fillFirstName(firstname: string) {
    await this.firstNameField.fill(firstname);
  }

  async fillLastName(lastname: string) {
    await this.lastNameField.fill(lastname);
  }

  async fillPhoneNumber(phoneNumber: string) {
    await this.phoneNumberField.fill(phoneNumber);
  }

  async fillSSN(SSN: string) {
    await this.SSNField.fill(SSN);
  }

  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  async acceptSubscription() {
    await this.subscriptionCheckbox.check();
  }

  async clickFinishSignUp() {
    await this.finishButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getSocialSecurityNumber(): Promise<string> {
    const socialSecurityNumberPage = await this.page.context().newPage();

    try {
      await socialSecurityNumberPage.goto('https://www.personnummer.nu/');
      await socialSecurityNumberPage.waitForLoadState('networkidle');
      const consentButton =
        socialSecurityNumberPage.getByLabel('Jag samtycker');
      if (await consentButton.isVisible()) {
        await consentButton.click();
      }
      const socialSecurityNumber = await socialSecurityNumberPage
        .locator(
          "div[class='text-xl font-mono bg-gray-50 px-4 py-2 rounded border border-gray-200']"
        )
        .textContent();
      await socialSecurityNumberPage.close();
      return socialSecurityNumber?.trim() || '';
    } catch (error) {
      console.error('Error retrieving social security number:', error);
      await socialSecurityNumberPage.close();
      throw error;
    }
  }

  private async invalidSSN(): Promise<boolean> {
    await this.page.waitForLoadState('networkidle');
    const ssnInvalid = await this.ssnErrorMessage.isVisible();
    return ssnInvalid;
  }

  private async clickSSNErrorOkButton() {
    await this.ssnErrorMessageOkButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async finishSignUpWithRetries(maxRetries: number = 5): Promise<void> {
    let retries = 0;
    let success = false;

    while (!success && retries < maxRetries) {
      try {
        await this.clickFinishSignUp();
        if (!(await this.invalidSSN())) {
          console.log('Profile page found. Sign-up successful.');
          success = true;
          break;
        }
        console.log(`Retrying with a new SSN (Attempt ${retries + 1})`);
        const socialSecurityNumber = await this.getSocialSecurityNumber();
        console.log(`Using SSN: ${socialSecurityNumber}`);

        await this.clickSSNErrorOkButton();
        await this.fillSSN(socialSecurityNumber);
      } catch (error) {
        console.log(`Error during retry ${retries + 1}:`, error);
      }

      retries++;
    }

    if (!success) {
      throw new Error(`Failed to create a user after ${maxRetries} attempts`);
    }
  }
}
