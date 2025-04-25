import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export class EnvironmentData {
  static environments: Record<string, { URL: string; API_KEY: string }> = {
    SIT: {
      URL: 'https://sv-sit-marvel.filmstaden.se/',
      API_KEY: '',
    },
  };

  static getCurrent() {
    const env = (process.env.ENV || 'SIT').toUpperCase(); // Default to SIT if ENV is not set
    return this.environments[env] || this.environments['SIT'];
  }
}
