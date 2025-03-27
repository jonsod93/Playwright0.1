import { BasePage } from './BasePage';

export class ShowPage extends BasePage {
    private ticketStepper: any;
    private emailField: any;
    private ageLimitCheckbox: any;
    private secondAgeLimitCheckbox: any;
    private paymentButton: any;
    private removeTicketButton: any;
    private addTicketButton: any;
    private discountInfoButton: any;
    private discountCodeField: any;
    private discountActivateButton: any;
    private discountPopupButton: any;
    private noPaymentNeededButton: any;
    
    
    constructor(page) {
        super(page);
        this.page = page;
        this.ticketStepper = this.page.locator('#stepper-inputfield_Ordinarie');
        this.emailField = this.page.getByPlaceholder('Fyll i din e-postadress');
        this.ageLimitCheckbox = this.page.locator('label').filter({ hasText: 'Jag är medveten om att filmen' });
        this.secondAgeLimitCheckbox = this.page.locator('label').filter({ hasText: 'Jag intygar att alla i sä' });
        this.paymentButton = this.page.getByRole('button', { name: 'Fortsätt till kortbetalning' });
        this.noPaymentNeededButton = this.page.getByRole('button', { name: 'Fortsätt' });
        this.removeTicketButton = this.page.locator('//span[@class="icomoon icon-collapse-solid  inline-block align-middle text-icon-size-40 w-[2.5rem] h-[2.5rem] leading-none"]').nth(0);
        this.addTicketButton = this.page.locator('//span[@class="icomoon icon-expand-solid  inline-block align-middle text-icon-size-40 w-[2.5rem] h-[2.5rem] leading-none"]').nth(0);
        this.discountInfoButton = this.page.getByRole('button', { name: ' Probem med rabattkoden' });
        this.discountCodeField = this.page.getByPlaceholder('Ange kod');
        this.discountActivateButton = this.page.getByRole('button', { name: 'Aktivera' });
        this.discountPopupButton = this.page.getByRole('button', { name: 'Lös in in rabattkod' })
      }
  
    async selectOneTicket() {
      while ((await this.ticketStepper.inputValue()) !== "1") {
        await this.removeTicketButton.click();
        if ((await this.ticketStepper.inputValue()) === "0") {
          await this.addTicketButton.click();
        }
      }
    }

    async openDiscountPopup() {
      await this.discountPopupButton.click();
    }

    async expandDiscountInfo() {
      await this.discountInfoButton.click();
    }

    async fillDiscountCode(discountCode: string) {
      await this.discountCodeField.fill(discountCode);
    }

    async activateDiscountCode() {
      await this.discountActivateButton.click();
    }
  
    async fillEmail(email) {
      await this.emailField.fill(email);
    }
  
    async acceptAgeLimit() {
      if (await this.ageLimitCheckbox.count() > 0) {
        await this.ageLimitCheckbox.first().click();
      } else if (await this.secondAgeLimitCheckbox.count() > 0) {
        await this.secondAgeLimitCheckbox.first().click();
      }
    }
  
    async startPayment() {
      await this.paymentButton.click();
    }

    async finishWithoutPaying() {
      await this.noPaymentNeededButton.click();
    }

  }