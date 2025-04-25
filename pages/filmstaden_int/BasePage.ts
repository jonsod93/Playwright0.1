import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
    void this.blockAdScripts();
  }

  async blockAdScripts() {
    await this.page.route(
      'https://s1.adform.net/banners/scripts/adx.js',
      (route) => route.abort()
    );
    //await this.page.route('https://s1.adform.net/**', route => route.abort());
    //await this.page.route('https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js?bv=634', route => route.abort());
  }
}
