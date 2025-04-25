import { DefaultPageWithNavigation } from './DefaultPageWithNavigation';

export class ProfilePage extends DefaultPageWithNavigation {
  private userIDField: any;
  private QRCode: any;
  private closeQRCode: any;
  private profileAccordion: any;
  private communicationAccordion: any;
  private friendsAccordion: any;
  private friendUserIDField: any;
  private friendNameField: any;
  private addFriendButton: any;
  private cancelMembershipButton: any;
  private confirmCancelButton: any;
  public remindersCheckbox: any;
  public competitionsCheckbox: any;
  public ticketReleasesCheckbox: any;
  public membershipInformationCheckbox: any;
  public QRCodeInfoLocator: any;
  public mainContentLocator: any;
  public formContentLocator: any;
  public savePhoneNumberButton: any;
  public communicationLabel: any;
  public cancelMembershipDialogLocator: any;

  constructor(page: any) {
    super(page);
    this.userIDField = this.page.locator("div[class='flex'] p[class='text-sm text-weak']").nth(0);
    this.QRCode = this.page.locator("//button[@class='block h-full w-full']");
    this.closeQRCode = this.page.getByRole('button', { name: '' });
    this.profileAccordion = this.page.getByRole('button', { name: ' Profil' });
    this.communicationAccordion = this.page.getByRole('button', {
      name: ' Kundkommunikation',
    });
    this.friendsAccordion = this.page.getByRole('button', {
      name: ' Poängdelning med vänner',
    });
    this.remindersCheckbox = this.page.getByRole('checkbox', {
      name: 'Påminnelser, aktuella hä',
    });
    this.competitionsCheckbox = this.page.getByRole('checkbox', {
      name: 'Inbjudningar och tävlingar',
    });
    this.ticketReleasesCheckbox = this.page.getByRole('checkbox', {
      name: 'Biljettsläpp och erbjudanden',
    });
    this.membershipInformationCheckbox = this.page.getByRole('checkbox', {
      name: 'Medlemsinformation och',
    });
    this.friendUserIDField = this.page.getByRole('textbox', {
      name: 'Medlemsnummer',
    });
    this.friendNameField = this.page.getByRole('textbox', {
      name: 'Ange ett namn',
    });
    this.addFriendButton = this.page.getByRole('button', {
      name: 'Lägg till ny vän',
    });
    this.cancelMembershipButton = this.page.getByRole('button', {
      name: 'Avsluta medlemskap',
    });
    this.confirmCancelButton = this.page.getByRole('button', {
      name: 'Ja, avsluta mitt konto',
    });
    this.QRCodeInfoLocator = this.page.getByRole('heading', {
      name: 'Din enhets skärmljusstyrka',
      exact: true,
    });
    this.mainContentLocator = this.page.getByRole('main');
    this.formContentLocator = this.page.locator('form');
    this.savePhoneNumberButton = this.page.getByLabel('Profil').getByRole('button');
    this.communicationLabel = this.page.getByLabel('Kundkommunikation');
    this.cancelMembershipDialogLocator = this.page.locator('h3').filter({ hasText: 'Är du säker på att du vill' });
  }

  async navigateToProfilePage() {
    await this.page.goto('mina-sidor/');
    await this.page.waitForLoadState('networkidle');
  }

  async getUserID(): Promise<string> {
    const userID = await this.userIDField.textContent();
    if (!userID) {
      throw new Error('User ID field is empty or not found');
    }
    return userID.trim();
  }

  async clickCancelMembership() {
    await this.cancelMembershipButton.click();
  }

  async clickConfirmCancel() {
    await this.confirmCancelButton.click();
  }

  async clickFriendsAccordion() {
    await this.friendsAccordion.click();
  }

  async fillFriendCode(code: string) {
    await this.friendUserIDField.fill(code);
  }

  async fillFriendName(name: string) {
    await this.friendNameField.fill(name);
  }

  async clickAddFriend() {
    await this.addFriendButton.click();
  }

  async uncheckReminders() {
    await this.remindersCheckbox.click();
  }

  async uncheckCompetitions() {
    await this.competitionsCheckbox.click();
  }

  async uncheckTicketReleases() {
    await this.ticketReleasesCheckbox.click();
  }

  async uncheckMembershipInfo() {
    await this.membershipInformationCheckbox.click();
  }

  async clickCommunicationAccordion() {
    await this.communicationAccordion.click();
  }

  async clickQR() {
    await this.QRCode.click();
  }

  async closeQR() {
    await this.closeQRCode.click();
  }

  async clickProfileAccordion() {
    await this.profileAccordion.click();
  }
}
