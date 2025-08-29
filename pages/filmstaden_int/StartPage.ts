import { DefaultPageWithNavigation } from './DefaultPageWithNavigation';

export class StartPage extends DefaultPageWithNavigation {
  private moviePosters: any;
  private movieSearchField: any;
  public mainContentLocator: any;
  public errorMessageMovieSearch: any;

  constructor(page: any) {
    super(page);
    this.moviePosters = this.page.locator("div[class='group/poster']");
    this.movieSearchField = this.page.getByPlaceholder('Sök på filmens namn');
    this.mainContentLocator = this.page.getByRole('main');
    this.errorMessageMovieSearch = this.page.getByText('Ingen träff!Vi kunde inte');
  }

  async selectTownFromResults(townName: string) {
    await this.page
      .locator('ul')
      .filter({ hasText: new RegExp(`^${townName}$`) })
      .getByRole('link')
      .click();
  }

  async searchMovie(movieName: string) {
    await this.movieSearchField.fill(movieName);
  }

  async getMovieTitleLink(movieName: string) {
    let locator = await this.page.getByRole('link', { name: movieName });
    return locator;
  }

  async clickMovieLink(movieName: string) {
    await this.page.getByRole('link', { name: movieName }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clearMovieSearchField() {
    await this.movieSearchField.fill('');
  }

  async selectRandomMovie() {
    let randomMovie = Math.floor(Math.random() * 6);
    await this.moviePosters.nth(randomMovie).click();
    await this.page.waitForLoadState('networkidle');
    return randomMovie;
  }
}
