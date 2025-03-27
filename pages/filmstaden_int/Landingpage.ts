import { BasePage } from './BasePage';

export class LandingPage extends BasePage {
    private cookieButton: any;
    private stockholmLink: any;
    
    constructor(page) {
      super(page);
      this.page = page;
      this.cookieButton = this.page.getByRole('button', { name: 'Yes it’s okay' });
      this.stockholmLink = this.page.getByRole('link', { name: 'Stockholm' });
    }
  
    async navigateToSite(url) {
      await this.page.goto(url);
    }
  
    async acceptCookies() {
        try {
          // Wait for the cookie button to appear (with a timeout)
          await this.page.waitForSelector('button:has-text("Yes it’s okay")', { timeout: 5000 });
      
          // Check if the cookie button is visible and click it
          if (await this.cookieButton.isVisible()) {
            await this.cookieButton.click();
          }
        } catch (error) {
          console.log("No cookie consent dialog found or it did not appear in time.");
        }
      }
  
    async selectStockholm() {
      try {
        await this.stockholmLink.first().click({ timeout: 2000 });
      } catch {
        console.log("Stockholm link not found");
      }
    }

    async searchTown(townName: string) {
      await this.page.getByRole('textbox').fill(townName);
    }
  
    async selectTownFromResults(townName: string) {
      await this.page.locator('ul').filter({ hasText: new RegExp(`^${townName}$`) }).getByRole('link').click();
    }


  }