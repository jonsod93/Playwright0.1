import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class NotFoundPage extends BasePage {
  private page: Page;

  constructor(page: Page) {
    super(page);
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