import { defineConfig, type ViteUserConfig } from 'vitest/config';

export const shared = (conf: ViteUserConfig) =>
  defineConfig({
    resolve: {
      tsconfigPaths: true,
    },

    ...conf,

    test: {
      globals: true,
      logHeapUsage: false,

      env: {
        NODE_ENV: 'test',
        ...(conf.test?.env ?? {}),
      },

      ...conf.test,
    },
  });
