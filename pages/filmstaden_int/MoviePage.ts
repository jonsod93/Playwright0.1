import { BasePage } from './BasePage';

export class MoviePage extends BasePage {
    private showtimeLinks: any;

    constructor(page) {
        super(page);
        this.page = page;
        this.showtimeLinks = this.page.locator("//li//li//li//li[1]//a[1]");
      }


      async selectFirstAvailableShowtime(startPage) {
        while (!(await this.showtimeLinks.count() > 0)) {
            await this.page.waitForTimeout(500);
            await this.mainNavigation.clickHome();
            await startPage.selectRandomMovie(); // Call selectRandomMovie from StartPage
            await this.page.waitForTimeout(250);
        }
        await this.showtimeLinks.first().click();
    }
}