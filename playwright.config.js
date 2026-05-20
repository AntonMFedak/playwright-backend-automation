import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Read from default ".env" file.
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  /* workers: process.env.CI ? 1 : undefined, */
  workers: 1,
  reporter: [['list']],

  use: {
    baseURL: 'https://adventurers-guild-api.vercel.app',
    extraHTTPHeaders: {
      Accept: 'application/json',
    },
    trace: 'on-first-retry',
  },

  projects: [
    // Setup Project
    {
      name: '01-setup',
      // Looks for the setup file
      testMatch: /global\.setup\.ts/, 
    },
    {
      name: '02-attributes-character-management',
      testIgnore: /tests\/features\/character-delete\.spec\.ts/, // Ignore the character deletion test in this project
      dependencies: ['01-setup'], // This project depends on the setup project
    },
    {
      name: '03-character-deletion',
      testMatch: /tests\/features\/character-delete\.spec\.ts/,
      dependencies: ['02-attributes-character-management'], // This project depends on the setup project
    },
  ],
});