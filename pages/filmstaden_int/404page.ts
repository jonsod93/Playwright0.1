import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NotFoundPage extends BasePage {
  private page: Page;
  private findMoviesButton: any;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.findMoviesButton = this.page.getByRole('link', { name: 'Hitta film och köp biljetter' })
  }

  async navigateTo404(environment: string) {
    await this.page.goto(environment + '404/');
  }

  async clickFindMoviesLink() {
    await this.findMoviesButton.click();
  }
}