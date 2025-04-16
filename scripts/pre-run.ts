import { existsSync, mkdirSync, copyFileSync, readdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const reportHistoryPath = resolve(__dirname, '../allure-report/history');
const resultsHistoryPath = resolve(__dirname, '../allure-results/history');
const executorPath = resolve(__dirname, '../allure-results/executor.json');

// 1. Copy history files
if (existsSync(reportHistoryPath)) {
  if (!existsSync(resultsHistoryPath)) {
    mkdirSync(resultsHistoryPath, { recursive: true });
  }

  const files = readdirSync(reportHistoryPath);
  for (const file of files) {
    copyFileSync(resolve(reportHistoryPath, file), resolve(resultsHistoryPath, file));
    console.log(`Copied ${file} to results history`);
  }
} else {
  console.log('No previous report history found to copy.');
}

// 2. Create executor.json
const executor = {
  name: "Playwright Hourly Run",
  type: "standalone",
  buildName: `Run on ${new Date().toLocaleString()}`,
  buildOrder: Date.now(),
  reportName: "Playwright Dashboard",
  reportUrl: "",
  buildUrl: ""
};

writeFileSync(executorPath, JSON.stringify(executor, null, 2));
console.log('Wrote executor.json to allure-results');