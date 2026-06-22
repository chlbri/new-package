import { defineConfig, type ViteUserConfig } from 'vitest/config';
import { aliasTs } from '@bemedev/dev-utils/vitest-alias';

export const shared = (conf: ViteUserConfig) =>
  defineConfig({
    ...conf,
    plugins: [aliasTs(), ...(conf.plugins ?? [])],

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
