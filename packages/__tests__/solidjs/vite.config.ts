import { defineProject } from 'vite-plus';

export default defineProject({
  resolve: { tsconfigPaths: true },

  test: {
    name: 'solidjs',
    bail: 100,
    maxConcurrency: 100,
    env: { NODE_ENV: 'test' },
    globals: true,
  },
});
