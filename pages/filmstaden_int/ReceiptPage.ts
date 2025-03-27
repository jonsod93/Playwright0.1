import { BasePage } from './BasePage';

export class ReceiptPage extends BasePage {
    private confirmationMessage: any;
    private referenceNumber: any;
    private showTicketsButton: any;
    private backToStartButton: any;

    constructor(page: page) {
        super(page);
        this.page = page;
        this.confirmationMessage = this.page.locator("//h6[normalize-space()='Referensnummer']");
        this.referenceNumber = this.page.locator('h5.mb-0.h4');
        this.showTicketsButton = this.page.getByRole('link', { name: 'Visa biljetter' });
        this.backToStartButton = this.page.getByRole('link', { name: ' Till filmstaden.se' });
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