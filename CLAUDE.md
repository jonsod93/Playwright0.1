# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Playwright-based end-to-end testing framework specifically designed for testing the Filmstaden cinema website (Swedish cinema chain). The project uses TypeScript, follows the Page Object Model pattern, and integrates with Allure for comprehensive test reporting.

## Development Commands

### Core Testing Commands

- `npm run test` - Run Playwright tests with Allure reporting
- `npm run test:allure` - Full pipeline: build → pre-run → test → generate report → serve (local)
- `npm run test:allure:ci` - CI version of the full pipeline

### Build & Quality

- `npm run build` - Compile TypeScript pre-run scripts to CommonJS
- `npm run lint` - Run ESLint on TypeScript and JavaScript files
- `npm run format` - Format code using Prettier

### Reporting

- `npm run report` - Generate Allure report from test results
- `npm run serve-report` - Open Allure report in browser

## Architecture & Code Organization

### Page Object Model Structure

- **Base Page**: `pages/filmstaden_int/BasePage.ts` - Foundation class with ad blocking functionality
- **Page Objects**: All page classes extend BasePage and are located in `pages/filmstaden_int/`
- **Test Files**: Organized in `tests/filmstaden_int/` by feature areas (login, purchases, etc.)

### Key Directories

- `pages/filmstaden_int/` - Page object models for Filmstaden website
- `tests/filmstaden_int/` - Test specifications organized by feature
- `helpers/filmstaden_int/` - Helper utilities (EmailHelper for Mailisk integration)
- `testData/` - Centralized test data management
- `scripts/` - Build and setup scripts (pre-run.ts for Allure history management)

### Environment Management

- Environment configuration is handled via `testData/environmentData.ts`
- Uses `.env` file for environment selection (defaults to SIT environment)
- Dynamic base URL configuration in `playwright.config.js`

## Testing Framework Details

### Playwright Configuration

- **Timeout**: 1 minute per test, 10 seconds for assertions
- **Browser**: Primarily Chromium (Firefox/Safari commented out)
- **Viewport**: 1920x1080 for consistent screenshots
- **Retries**: 2 retries on CI, 0 locally
- **Trace/Video**: Enabled on failure for debugging

### Ad Blocking Implementation

All page objects automatically block ad scripts via BasePage constructor:

```typescript
await this.page.route('https://s1.adform.net/banners/scripts/adx.js', (route) => route.abort());
```

### Email Testing

- Uses Mailisk service for email verification testing
- EmailHelper utility in `helpers/filmstaden_int/EmailHelper.ts`
- Supports verification code extraction from emails

### Allure Reporting Integration

- **History Management**: `scripts/pre-run.ts` merges previous report history
- **CI Integration**: GitHub Actions workflow publishes reports to GitHub Pages
- **Trend Analysis**: Maintains historical data for test trends

## CI/CD Pipeline

### GitHub Actions Workflow

- **Schedule**: Nightly runs at 04:00 CEST
- **Workflow**: `.github/workflows/nightly-playwright.yml`
- **Features**:
  - Downloads previous test history from GitHub Pages
  - Runs full test suite
  - Generates and deploys Allure reports
  - Sends email notifications with test summary

### Email Notifications

The CI pipeline sends automated email reports including:

- Test statistics (passed/failed/broken/skipped)
- Links to Allure report and GitHub workflow run
- Generated after each nightly test run

## Code Patterns & Conventions

### TypeScript Configuration

- Uses ES modules (`"type": "module"` in package.json)
- ESLint configured with `@typescript-eslint/no-floating-promises` rule
- TypeScript compilation handled by `npm run build` command

### Test Data Management

- `testData/environmentData.ts` - Environment configuration
- `testData/testUser.ts` - User test data
- `testData/paymentOptions.ts` - Payment method data
- `testData/auth.json` - Authentication storage for Playwright

### Error Handling

- Tests are configured to continue on failure (`|| true` in CI commands)
- Comprehensive error logging in email testing flows
- Screenshot and video capture on test failures

## Development Notes

### Running Single Tests

Use Playwright's built-in filtering:

```bash
npx playwright test --grep "test name pattern"
npx playwright test path/to/specific.spec.ts
```

### Debugging

- Use `--debug` flag for step-by-step debugging
- `--headed` flag to run tests in headed mode
- Trace viewer available via Allure reports or `npx playwright show-trace`

### Working with Environment Data

The `EnvironmentData.getCurrent()` method dynamically returns configuration based on the ENV environment variable, defaulting to SIT environment if not specified.
