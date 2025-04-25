import { DefaultPageWithNavigation } from './DefaultPageWithNavigation';

export class MoviePage extends DefaultPageWithNavigation {
  private showtimeLinks: any;
  private showtimeLinkSeatPlaceholder: any;
  public mainContentLocator: any;
  public readMoreButton: any;

  constructor(page: any) {
    super(page);
    this.showtimeLinks = this.page.getByRole('link', { name: 'Salong' });
    this.showtimeLinkSeatPlaceholder = this.page.locator("(//span[contains(text(),'_')])[1]");
    this.mainContentLocator = this.page.getByRole('main');
    this.readMoreButton = this.page.getByRole('button', { name: 'Läs mer' });
  }

  async selectFirstAvailableShowtime(selectRandomMovieMethod: () => Promise<void>) {
    let showsCount = await this.showtimeLinks.count();
    while (!(showsCount > 0)) {
      await this.clickHome();
      await this.page.waitForLoadState('networkidle');
      await selectRandomMovieMethod();
      showsCount = await this.showtimeLinks.count();
    }
    await this.showtimeLinkSeatPlaceholder.waitFor({ state: 'detached' });
    await this.showtimeLinks.first().click();
    await this.page.waitForLoadState('networkidle');
  }
}
