import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { MainNavigation } from './MainNavigation';

export class StartPage extends BasePage {
  private page: Page;
  private moviePosters: any;
  private movieSearchField: any;
  private yesToCookiesButton: any;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.moviePosters = this.page.locator("div[class='group/poster']");
    this.movieSearchField = this.page.getByPlaceholder('Sök på filmens namn');
    this.yesToCookiesButton = this.page.getByRole('button', { name: 'Yes it’s okay' });
  }

  async acceptCookies() {
    await this.yesToCookiesButton.click();
  }

  async searchTown(townName: string) {
    await this.page.getByRole('textbox').fill(townName);
  }

  async selectTownFromResults(townName: string) {
    await this.page.locator('ul').filter({ hasText: new RegExp(`^${townName}$`) }).getByRole('link').click();
  }

  async searchMovie(movieName: string) {
    await this.movieSearchField.fill(movieName);
  }

  async clickMovieLink(movieName: string) {
    await this.page.getByRole('link', { name: movieName }).click();
  }

  async clearMovieSearchField() {
    await this.movieSearchField.fill('');
  }

  async selectRandomMovie() {
    let randomMovie = Math.floor(Math.random() * 7);
    await this.moviePosters.nth(randomMovie).click();
    return randomMovie;
  }

}