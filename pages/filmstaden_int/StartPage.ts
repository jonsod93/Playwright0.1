import { Page } from '@playwright/test';

export class StartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToStartPage(environment: string) {
    await this.page.goto(environment);
  }

  async acceptCookies() {
    await this.page.getByRole('button', { name: 'Yes it’s okay' }).click();
  }

  async searchTown(townName: string) {
    await this.page.getByRole('textbox').fill(townName);
  }

  async selectTownFromResults(townName: string) {
    await this.page.locator('ul').filter({ hasText: new RegExp(`^${townName}$`) }).getByRole('link').click();
  }

  async searchMovie(movieName: string) {
    await this.page.getByPlaceholder('Sök på filmens namn').fill(movieName);
  }

  async clickMovieLink(movieName: string) {
    await this.page.getByRole('link', { name: movieName }).click();
  }

  async clearMovieSearchField() {
    await this.page.getByPlaceholder('Sök på filmens namn').fill('');
  }

  async clearCitySearchField() {
    await this.page.getByPlaceholder('Sök stad').fill('');
  }

  async fillCitySearchField(cityName: string) {
    await this.page.getByPlaceholder('Sök stad').fill(cityName);
  }

  async selectCityFromResults(cityName: string) {
    await this.page.getByRole('button', { name: `Välj stad ${cityName}` }).click();
  }
}