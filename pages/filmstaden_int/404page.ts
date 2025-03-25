import { Page } from '@playwright/test';

export class NotFoundPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo404(environment: string) {
    await this.page.goto(environment + '404/');
  }

  async acceptCookies() {
    await this.page.getByRole('button', { name: 'Yes it’s okay' }).click();
  }

  async clickFindMoviesLink() {
    await this.page.getByRole('link', { name: 'Hitta film och köp biljetter' }).click();
  }
}