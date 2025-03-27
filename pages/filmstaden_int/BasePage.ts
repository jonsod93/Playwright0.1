import { Page } from '@playwright/test';
import { MainNavigation } from './MainNavigation';

export class BasePage {
  protected page: Page;
  public mainNavigation: MainNavigation;

  constructor(page: Page) {
    this.page = page;
    this.mainNavigation = new MainNavigation(page);
  }

  async blockAdScripts() {
    await this.page.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());
  }
}