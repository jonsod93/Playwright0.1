import { MailiskClient } from 'mailisk';

export class EmailHelper {
  private mailisk: MailiskClient;
  private signUpIndex: number;
  private loginIndex: number;
  private namespace: string;

  constructor() {
    const apiKey = 'umQrBAvP90qajGGk2Qv9_a4yDhyuAPcwsfPPjs7ovBY';
    this.mailisk = new MailiskClient({ apiKey });
    this.loginIndex = 3; // Amount of number groups in the namespace
    this.signUpIndex = this.loginIndex + 1;
    this.namespace = 'jdifc2r0pd1o';
  }

  // Method to get the namespace
  async getNamespace() {
    return this.namespace;
  }

  // Method to fetch the plain text content of an email
  async getEmailContent(email: string, fromTimestamp: number): Promise<string> {
    try {
      // Fetch emails from the inbox
      const { data: emails } = await this.mailisk.searchInbox(this.namespace, {
        to_addr_prefix: email,
        from_timestamp: fromTimestamp,
      });

      // Get the first email
      const emailContent = emails[0]?.text;
      if (!emailContent) {
        throw new Error('Email content not found.');
      }

      // Remove HTML tags and return plain text content
      return emailContent.replace(/<[^>]*>/g, '');
    } catch (error) {
      console.error('Error fetching email content:', error);
      throw error; // Re-throw the error to fail the test
    }
  }

  // Method to get the login verification code
  async getLoginCode(email: string, fromTimestamp: number): Promise<string> {
    return await this.getVerificationCode(email, fromTimestamp, this.loginIndex, this.namespace); // Use index 3 for login (amount of number groups in namespace)
  }

  // Method to get the sign-up verification code
  async getSignUpCode(email: string, fromTimestamp: number): Promise<string> {
    return await this.getVerificationCode(email, fromTimestamp, this.signUpIndex, this.namespace); // Use index 4 for sign-up (amount of number groups in namespace + 1)
  }

  // Private method to handle the common logic between getLoginCode and getSignUpCode
  private async getVerificationCode(email: string, fromTimestamp: number, matchIndex: number): Promise<string> {
    try {
      const { data: emails } = await this.mailisk.searchInbox(this.namespace, {
        to_addr_prefix: email,
        from_timestamp: fromTimestamp,
      });

      const emailContent = emails[0]?.text;
      if (!emailContent) {
        throw new Error('Verification email not found.');
      }

      const matches = emailContent.match(/\d+/g); // Extract all digit sequences
      if (!matches || matches.length <= matchIndex) {
        throw new Error('Verification code not found in the email.');
      }

      return matches[matchIndex]; // Return the code at the specified index
    } catch (error) {
      console.error('Error fetching verification code:', error);
      throw error; // Re-throw the error to fail the test
    }
  }
}