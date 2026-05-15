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
    // 1. Define the Setup Project
    {
      name: 'setup',
      // Looks for the setup file
      testMatch: /global\.setup\.ts/, 
    },
    {
      name: 'backend-testing',
      dependencies: ['setup'], // This project depends on the setup project
    },
  ],
});