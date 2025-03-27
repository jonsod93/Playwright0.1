import { rmSync, existsSync } from 'fs';
import { resolve } from 'path';

async function globalSetup() {
  const allureResultsPath = resolve(__dirname, '../allure-results');
  if (existsSync(allureResultsPath)) {
    rmSync(allureResultsPath, { recursive: true, force: true });
    console.log('Cleared ./allure-results directory.');
  }
}

export default globalSetup;