import eslintPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {Linter.FlatConfig[]} */
const config = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: path.resolve('./tsconfig.json'),
        tsconfigRootDir: path.resolve('.'),
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: path.resolve('./tsconfig.json'),
        tsconfigRootDir: path.resolve('.'),
      },
      ecmaVersion: 2021,
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
];

export default config;
