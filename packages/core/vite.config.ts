import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    entry: ['src/**/*.ts'],
    format: ['esm'],
    outDir: 'lib',
    root: 'src',
    unbundle: true,
    sourcemap: true,
    dts: true,
    clean: true,
    fixedExtension: false,
    nodeProtocol: 'strip',
    platform: 'node',

    ignored: [
      'src/**/__tests__/**',
      'src/**/*.test.ts',
      'src/**/*.test-d.ts',
      'src/**/*.fixtures.ts',
      'src/**/fixtures.ts',
      'src/fixtures/**/*.ts',
    ],
  },

  run: {
    tasks: {
      pack: {
        command: 'vp pack',

        cache: {
          input: ['src/**', 'package.json', 'tsconfig.json', '!**/*.gen.ts'],
          output: ['lib/**'],
        },
      },
    },
  },
});
