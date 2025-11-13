# Test info

- Name: 2FA tests >> Create and delete account
- Location: /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/loginAndSignUp/signUpFlow.spec.js:40:3

# Error details

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Bli medlem' })

    at LoginFlowPage.clickSignUpButton (/home/runner/work/Playwright0.1/Playwright0.1/pages/filmstaden_int/LoginFlowPage.ts:42:29)
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/loginAndSignUp/signUpFlow.spec.js:54:23
    at /home/runner/work/Playwright0.1/Playwright0.1/tests/filmstaden_int/loginAndSignUp/signUpFlow.spec.js:52:5
```

# Page snapshot

```yaml
- img
- paragraph: Åtkomst till systemet blockerad.
- list:
  - listitem:
    - text: Validering av åtkomst
    - alert
    - paragraph: The user is blocked due to conditional access check.
- link "Avbryt":
  - /url: https://sv-sit-marvel.filmstaden.se/
```

# Test source

```ts
   1 | import { DefaultPage } from './DefaultPage';
   2 |
   3 | export class LoginFlowPage extends DefaultPage {
   4 |   private emailField: any;
   5 |   private passwordField: any;
   6 |   private loginButton: any;
   7 |   private signUpButton: any;
   8 |   private sendCodeButton: any;
   9 |   private verificationCodeField: any;
  10 |   private verifyButton: any;
  11 |   private continueButton: any;
  12 |
  13 |   constructor(page: any) {
  14 |     super(page);
  15 |     this.emailField = this.page.getByPlaceholder('E‑postadress');
  16 |     this.passwordField = this.page.getByPlaceholder('Lösenord');
  17 |     this.loginButton = this.page.getByRole('button', { name: 'Logga in' });
  18 |     this.signUpButton = this.page.getByRole('link', { name: 'Bli medlem' });
  19 |     this.sendCodeButton = this.page.getByRole('button', {
  20 |       name: 'Skicka verifieringskod',
  21 |     });
  22 |     this.verificationCodeField = this.page.getByPlaceholder('Verifieringskod');
  23 |     this.verifyButton = this.page.getByRole('button', {
  24 |       name: 'Verifiera koden',
  25 |     });
  26 |     this.continueButton = this.page.getByRole('button', { name: 'Fortsätt' });
  27 |   }
  28 |
  29 |   async fillEmail(email: string) {
  30 |     await this.emailField.fill(email);
  31 |   }
  32 |
  33 |   async fillPassword(password: string) {
  34 |     await this.passwordField.fill(password);
  35 |   }
  36 |
  37 |   async clickLogin() {
  38 |     await this.loginButton.click();
  39 |   }
  40 |
  41 |   async clickSignUpButton() {
> 42 |     await this.signUpButton.click();
     |                             ^ Error: locator.click: Test timeout of 90000ms exceeded.
  43 |   }
  44 |
  45 |   async clickSendCode() {
  46 |     await this.sendCodeButton.click();
  47 |   }
  48 |
  49 |   async fillVerificationCode(code: string) {
  50 |     await this.verificationCodeField.fill(code);
  51 |   }
  52 |
  53 |   async clickVerify() {
  54 |     await this.verifyButton.click();
  55 |   }
  56 |
  57 |   async clickContinue() {
  58 |     await this.continueButton.click();
  59 |   }
  60 | }
  61 |
```