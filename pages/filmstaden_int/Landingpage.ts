import { DefaultPageWithNavigation } from './DefaultPageWithNavigation';
import { DefaultPage } from './DefaultPage';

export class LandingPage extends DefaultPageWithNavigation {
  private cookieButton: any;
  private stockholmLink: any;
  public mainContentLocator: any;
  public goteborgButton: any;

  constructor(page: any) {
    super(page);
    this.cookieButton = this.page.getByRole('button', {
      name: 'Yes it’s okay',
    });
    this.stockholmLink = this.page.getByRole('link', { name: 'Stockholm' }).first();
    this.mainContentLocator = this.page.getByRole('main');
    this.goteborgButton = this.page.getByRole('button', { name: 'Göteborg' });
  }

  async acceptCookies() {
    try {
      // Wait for the cookie button to appear (with a timeout)
      await this.page.waitForSelector('button:has-text("Yes it’s okay")', {
        timeout: 5000,
      });

      // Check if the cookie button is visible and click it
      if (await this.cookieButton.isVisible()) {
        await this.cookieButton.click();
      }
    } catch (error) {
      console.log('No cookie consent dialog found or it did not appear in time.');
    }
  }

  async selectStockholm() {
    await this.page.waitForLoadState('networkidle');
    let stockholmLinkCount = await this.stockholmLink.count();
    while (stockholmLinkCount > 0) {
      try {
        await this.stockholmLink.click({ timeout: 2000 });
      } catch {
        console.log('Stockholm link not found');
      }
      stockholmLinkCount = await this.stockholmLink.count();
    }
    //The following 5 rows are just a work around for a bug, they can be removed once the initial city selection on the landing page works for Stockholm
    await this.clickCityPicker();
    await this.selectCityFromResults('Malmö');
    await this.page.waitForLoadState('networkidle');
    await this.page.getByRole('button', { name: 'Malmö' }).click();
    await this.selectCityFromResults('Stockholm');
  }

  async searchTown(townName: string) {
    await this.page.getByRole('textbox').fill(townName);
  }

  async selectTownFromResults(townName: string) {
    await this.page
      .locator('ul')
      .filter({ hasText: new RegExp(`^${townName}$`) })
      .getByRole('link')
      .click();
  }
}
