import { DefaultPageWithNavigation } from './DefaultPageWithNavigation';

export class MoviePage extends DefaultPageWithNavigation {
    private showtimeLinks: any;
    private showtimeLinkSeatText: any;
    private showtimeLinkSeatPlaceholder: any;
    public mainContentLocator: any;
    public readMoreButton: any;

    constructor(page) {
        super(page);
        this.showtimeLinks = this.page.getByRole('link', { name: 'Salong' });
        this.showtimeLinkSeatPlaceholder = this.page.locator("(//span[contains(text(),'_')])[1]");
        this.mainContentLocator = this.page.getByRole('main');
        this.readMoreButton = this.page.getByLabel('Läs mer');
    }


    
    async selectFirstAvailableShowtime(selectRandomMovieMethod: () => Promise<void>) {
        while (!(await this.showtimeLinks.count() > 0)) {
            await this.page.waitForTimeout(500);
            await this.clickHome();
            await selectRandomMovieMethod();
            await this.page.waitForTimeout(500);
        }
        await this.showtimeLinkSeatPlaceholder.waitFor({ state: 'detached' });
        await this.showtimeLinks.first().click();
    }
}