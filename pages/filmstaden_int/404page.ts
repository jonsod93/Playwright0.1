import { DefaultPageWithNavigation } from './DefaultPageWithNavigation';

export class NotFoundPage extends DefaultPageWithNavigation {
  public pageTitle: any;
  public findMoviesLink: any;
  public goToStartLink: any;
  public customerServiceLink: any;

  constructor(page) {
    super(page);
    this.pageTitle = this.page.locator('h1');
    this.findMoviesLink = this.page.getByRole('link', { name: 'Hitta film och köp biljetter' });
    this.goToStartLink = this.page.getByRole('link', { name: 'Gå till startsidan ' });
    this.customerServiceLink = this.page.getByRole('link', { name: 'Till Filmstadens kundservice ' });
  }

  async navigateTo404(environment: string) {
    await this.page.goto(environment + '404/');
  }

  async clickFindMoviesLink() {
    await this.findMoviesLink.click();
  }
}