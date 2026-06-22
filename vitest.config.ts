import { defineConfig } from 'vitest/config';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },

  test: {
    bail: 100,
    maxConcurrency: 10,
    allowOnly: true,
    passWithNoTests: true,
    slowTestThreshold: 3000,
    environment: 'node',
    globals: true,
    logHeapUsage: false,

    env: {
      NODE_ENV: 'test',
    },

    coverage: {
      enabled: true,
      reportsDirectory: '.coverage',
      provider: 'v8',
      exclude: [],
    },

    projects: [
      'packages/core/vitest.config.ts',
      'packages/__tests__/project1/vitest.config.ts',
    ],
  },
});
