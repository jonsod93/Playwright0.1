import * as fs from 'fs';
import * as path from 'path';

const allureResultsDir = path.join(__dirname, '../allure-results');
const allureHistoryDir = path.join(__dirname, '../allure-report/history');
const resultsHistoryDir = path.join(allureResultsDir, 'history');
const executorPath = path.join(allureResultsDir, 'executor.json');

// Ensure the allure-results directory exists
if (!fs.existsSync(allureResultsDir)) {
  console.log('⚠️ allure-results directory does not exist. Creating it...');
  fs.mkdirSync(allureResultsDir, { recursive: true }); // Create the allure-results directory
}

// Ensure history directories exist
if (!fs.existsSync(allureHistoryDir)) {
  console.log('Creating history directory in allure-report...');
  fs.mkdirSync(allureHistoryDir, { recursive: true });
}
 
if (!fs.existsSync(resultsHistoryDir)) {
  console.log('Creating history directory in allure-results...');
  fs.mkdirSync(resultsHistoryDir, { recursive: true });
}

// Merge history data from allure-report to allure-results
const historyFiles = fs.readdirSync(allureHistoryDir);

if (historyFiles.length === 0) {
  console.log('No history files found to copy from previous report.');
}

historyFiles.forEach((file) => {
  const src = path.join(allureHistoryDir, file);
  const dest = path.join(resultsHistoryDir, file);

  if (file === 'history.json' && fs.existsSync(dest)) {
    const srcData = JSON.parse(fs.readFileSync(src, 'utf-8'));
    const destData = JSON.parse(fs.readFileSync(dest, 'utf-8'));

    if (typeof srcData === 'object' && typeof destData === 'object') {
      // Merge history.json as objects
      const mergedData = { ...destData, ...srcData }; // srcData overwrites destData for conflicting keys
      fs.writeFileSync(dest, JSON.stringify(mergedData, null, 2));
      console.log(`Merged ${Object.keys(mergedData).length} entries in history.json`);
    } else {
      console.warn(`Could not merge history.json due to unexpected format.`);
    }
  } else {
    // Copy other files (e.g. history-trend.json, categories.json, etc.)
    fs.copyFileSync(src, dest);
  }
});

// Always create (or overwrite) executor.json
const now = new Date();
const pad = (n: number) => n.toString().padStart(2, '0');

const formattedBuildOrder = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}`;

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'unknown-repo';
const repoOwner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? 'unknown-owner';
const isCI = process.env.CI === 'true';

const reportUrl = isCI ? `https://${repoOwner}.github.io/${repoName}/` : 'file://./allure-report/index.html';

const executor = {
  name: isCI ? 'CI Run' : 'Local Run',
  type: isCI ? 'github' : 'local',
  buildName: `${isCI ? 'GitHub CI Build' : 'Local Build'} ${now.toLocaleString()}`,
  buildOrder: formattedBuildOrder,
  reportUrl,
};

fs.writeFileSync(executorPath, JSON.stringify(executor, null, 2));
console.log(`✅ Created/updated executor.json with buildOrder: ${formattedBuildOrder}`);
