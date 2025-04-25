import { DefaultPage } from './DefaultPage';

export class DefaultPageWithNavigation extends DefaultPage {
  private homeButton: any;
  private discoverButton: any;
  private goingToTheCinemaButton: any;
  private membershipButton: any;
  private moreButton: any;
  private profileButton: any;
  private cityPickerButton: any;
  private cinemasButton: any;
  private onCinemaNowButton: any;
  private upcomingButton: any;
  private kidsAndFamilyButton: any;
  private cinemaExperienceButton: any;
  private classicsButton: any;
  private offersButton: any;
  private giftcardButton: any;
  private foodAndDrinkButton: any;
  private newsButton: any;
  private companyButton: any;
  private customerServiceButton: any;
  private loginButton: any;
  private citySearchField: any;
  public citySearchSidearHeading: any;
  public citySearchNoResultsMessage: any;
  public citySearchResults: any;

  constructor(page) {
    super(page);
    this.homeButton = this.page.locator('(//a)[1]');
    this.discoverButton = this.page.getByRole('link', { name: 'Upptäck' });
    this.goingToTheCinemaButton = this.page.getByRole('button', {
      name: 'Gå på bio ',
    });
    this.membershipButton = this.page.getByRole('link', {
      name: 'Medlemsskapet',
    });
    this.moreButton = this.page.getByRole('link', { name: 'Mer ' });
    this.profileButton = this.page.locator('a[href="/mina-sidor/"]');
    this.cityPickerButton = this.page.locator('div.px-8.pr-12 > button');
    this.cinemasButton = this.page.getByRole('link', { name: 'Biografer' });
    this.onCinemaNowButton = this.page.getByRole('link', { name: 'På Bio Nu' });
    this.upcomingButton = this.page.getByRole('link', {
      name: 'Kommande filmer',
    });
    this.kidsAndFamilyButton = this.page.getByRole('link', {
      name: 'Barn och Familj',
    });
    this.cinemaExperienceButton = this.page.getByRole('link', {
      name: 'Bioupplevelsen',
    });
    this.classicsButton = this.page.getByRole('link', {
      name: 'Klassiker på Bio',
    });
    this.offersButton = this.page.getByRole('link', { name: 'Erbjudanden' });
    this.giftcardButton = this.page.getByRole('link', { name: 'Presentkort' });
    this.foodAndDrinkButton = this.page.getByRole('link', {
      name: 'Mat och Dryck',
    });
    this.newsButton = this.page.getByRole('link', { name: 'Nyheter' });
    this.companyButton = this.page.getByRole('link', { name: 'Företag' });
    this.customerServiceButton = this.page.getByRole('link', {
      name: 'Kundservice',
    });
    this.loginButton = this.page.getByRole('link', {
      name: 'Logga in menuitem logo Logga',
    });
    this.citySearchField = this.page.getByPlaceholder('Sök stad');
    this.citySearchSidearHeading = this.page.getByRole('heading', {
      name: 'Välj din biostad',
    });
    this.citySearchNoResultsMessage = this.page.getByLabel('Välj din biostad');
    this.citySearchResults = this.page.locator(
      "span[class='text-sm font-bold']"
    );
  }

  async clickHome() {
    await this.homeButton.click();
  }

  async clickDiscover() {
    await this.discoverButton.click();
  }

  async clickGoingToTheCinema() {
    await this.goingToTheCinemaButton.click();
  }

  async clickMembership() {
    await this.membershipButton.click();
  }

  async clickMore() {
    await this.moreButton.click();
  }

  async clickProfile() {
    await this.profileButton.click();
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async clickCityPicker() {
    await this.cityPickerButton.click();
  }

  async clickCinemas() {
    await this.goingToTheCinemaButton.click();
    await this.cinemasButton.click();
  }

  async clickOnCinemaNow() {
    await this.goingToTheCinemaButton.click();
    await this.onCinemaNowButton.click();
  }

  async clickUpcoming() {
    await this.goingToTheCinemaButton.click();
    await this.upcomingButton.click();
  }

  async clickKidsAndFamily() {
    await this.goingToTheCinemaButton.click();
    await this.kidsAndFamilyButton.click();
  }

  async clickCinemaExperience() {
    await this.goingToTheCinemaButton.click();
    await this.cinemaExperienceButton.click();
  }

  async clickClassics() {
    await this.goingToTheCinemaButton.click();
    await this.classicsButton.click();
  }

  async clickOffers() {
    await this.moreButton.click();
    await this.offersButton.click();
  }

  async clickGiftcard() {
    await this.moreButton.click();
    await this.giftcardButton.click();
  }

  async clickFoodAndDrink() {
    await this.moreButton.click();
    await this.foodAndDrinkButton.click();
  }

  async clickNews() {
    await this.moreButton.click();
    await this.newsButton.click();
  }

  async clickCompany() {
    await this.moreButton.click();
    await this.companyButton.click();
  }

  async clickCustomerService() {
    await this.moreButton.click();
    await this.customerServiceButton.click();
  }

  async clearCitySearchField() {
    await this.citySearchField.fill('');
  }

  async fillCitySearchField(cityName: string) {
    await this.citySearchField.fill(cityName);
  }

  async selectCityFromResults(cityName: string) {
    await this.page
      .getByRole('button', { name: `Välj stad ${cityName}` })
      .click();
  }
}
