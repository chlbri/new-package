import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: { tsconfigPaths: true },
  server: { host: '0.0.0.0' },

  test: {
    passWithNoTests: true,
    slowTestThreshold: 3000,
    logHeapUsage: true,
    globals: true,
    typecheck: { enabled: true, ignoreSourceErrors: false },
    env: { NODE_ENV: 'test' },

    coverage: {
      enabled: true,
      reportsDirectory: '.coverage',
      provider: 'v8',
    },

    projects: [
      'packages/core/vitest.config.ts',
      'packages/__tests__/project1/vitest.config.ts',
    ],
  },
});

