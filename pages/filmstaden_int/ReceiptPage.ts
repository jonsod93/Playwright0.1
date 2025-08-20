import { DefaultPageWithNavigation } from './DefaultPageWithNavigation';

export class ReceiptPage extends DefaultPageWithNavigation {
  private confirmationMessage: any;
  private referenceNumber: any;
  private showTicketsButton: any;
  private backToStartButton: any;
  public referensNumberTitleLabel: any;
  public mainContentLocator: any;

  constructor(page) {
    super(page);
    this.confirmationMessage = this.page.locator("//h6[normalize-space()='Referensnummer']");
    this.referenceNumber = this.page.locator(
      'body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)'
    );
    this.showTicketsButton = this.page.getByRole('link', {
      name: 'Visa biljetter',
    });
    this.backToStartButton = this.page.getByRole('link', {
      name: ' Till filmstaden.se',
    });
    this.referensNumberTitleLabel = this.page.getByRole('heading', { name: 'Referensnummer' });
    this.mainContentLocator = this.page.getByRole('main');
  }

  async getReferenceNumber() {
    return await this.referenceNumber.textContent();
  }

  async clickShowTickets() {
    await this.showTicketsButton.click();
  }

  async backToStart() {
    await this.backToStartButton.click();
  }
}
