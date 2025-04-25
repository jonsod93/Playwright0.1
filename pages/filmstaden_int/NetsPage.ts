import { DefaultPage } from './DefaultPage';

export class NetsPage extends DefaultPage {
  private cardNumberField: any;
  private monthDropdown: any;
  private yearDropdown: any;
  private cvvField: any;
  private payButton: any;
  private cancelButton: any;

  constructor(page) {
    super(page);
    this.cardNumberField = this.page.getByPlaceholder('0000 0000 0000');
    this.monthDropdown = this.page.getByLabel('month');
    this.yearDropdown = this.page.getByLabel('year');
    this.cvvField = this.page.getByPlaceholder('000', { exact: true });
    this.payButton = this.page.getByRole('button', { name: 'Betala' });
    this.cancelButton = this.page.getByRole('button', { name: 'Avbryt' });
  }

  async completePayment(cardNumber, month, year, cvv) {
    await this.cardNumberField.fill(cardNumber);
    await this.monthDropdown.selectOption(month);
    await this.yearDropdown.selectOption(year);
    await this.cvvField.fill(cvv);
    await this.payButton.click();
  }

  async cancelPayment() {
    await this.cancelButton.click();
  }
}
