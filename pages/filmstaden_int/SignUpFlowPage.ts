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

  constructor(page) {
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
  }

  async getSocialSecurityNumber(): Promise<string> {
    const socialSecurityNumberPage = await this.page.context().newPage();

    try {
      await socialSecurityNumberPage.goto('https://www.personnummer.nu/');
      const consentButton =
        socialSecurityNumberPage.getByLabel('Jag samtycker');
      if (await consentButton.isVisible()) {
        await consentButton.click();
      }
      const socialSecurityNumber = await socialSecurityNumberPage
        .locator(
          'body > div:nth-child(1) > main:nth-child(3) > div:nth-child(4) > p:nth-child(4)'
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

  private async isProfilePageFound(): Promise<boolean> {
    console.log(`Checking if profile page is found...`);
    const isProfileFound = await this.mainContentLocator.textContent();
    return isProfileFound && isProfileFound.includes('Inställningar');
  }

  async finishSignUpWithRetries(maxRetries: number = 5): Promise<void> {
    let retries = 0;
    let success = false;

    while (!success && retries < maxRetries) {
      try {
        console.log(`Checking if profile page is found...`);
        // Check if the profile page is found
        if (await this.isProfilePageFound()) {
          console.log('Profile page found. Sign-up successful.');
          success = true;
          break;
        }
        // Attempt to finish the sign-up process
        await this.clickFinishSignUp();
        await this.page.waitForTimeout(2000); // Temporary wait for the page to load

        // Check if the profile page is found
        console.log(`Checking if profile page is found...`);
        if (await this.isProfilePageFound()) {
          console.log('Profile page found. Sign-up successful.');
          success = true;
          break;
        }
        console.log(`Retrying with a new SSN (Attempt ${retries + 1})`);
        const socialSecurityNumber = await this.getSocialSecurityNumber();
        console.log(`Using SSN: ${socialSecurityNumber}`);
        console.log(`Checking if profile page is found...`);
        // Check again after getting a new SSN
        if (await this.isProfilePageFound()) {
          console.log('Profile page found. Sign-up successful.');
          success = true;
          break;
        }
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
