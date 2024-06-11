import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Options } from 'tsup';

const ignore = [
  '**/*.test.ts',
  '**/*.test-d.ts',
  '**/*.fixtures.ts',
  '**/*.fixture.ts',
  'src/fixtures',
  'src/tests/**/*',
  'src/config/**/*',
];

const entry = Object.fromEntries(
  globSync('src/**/*.ts', {
    ignore,
  }).map(file => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length),
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, import.meta.url)),
  ]),
);

const common = {
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  minify: true,
  bundle: false,
  target: 'esnext',
} satisfies Options;

export default defineConfig([
  {
    entry,

    dts: {
      compilerOptions: {
        noUnusedLocals: true,
        noUnusedParameters: true,
      },
    },

    outDir: 'lib',
    format: 'esm',
    ...common,
  },
  {
    entry,
    outDir: 'lib',
    format: 'cjs',
    ...common,
  },
  
]);
