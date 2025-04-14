import { Page } from '@playwright/test';
//import { MainNavigation } from './MainNavigation';

export class BasePage {
  protected page: Page;
 // public mainNavigation: MainNavigation;

  constructor(page: Page) {
    this.page = page;
    //this.mainNavigation = new MainNavigation(page);
    this.blockAdScripts();
  }

  async blockAdScripts() {
    await this.page.route('https://s1.adform.net/banners/scripts/adx.js', route => route.abort());
    //await this.page.route('https://s1.adform.net/**', route => route.abort());
    //await this.page.route('https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js?bv=634', route => route.abort());
  }

}