import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'rollup';
import tscAlias from 'rollup-plugin-tsc-alias';
import typescript from 'rollup-plugin-typescript2';

const ignore = [
  '**/*.test.ts',
  '**/*.fixtures.ts',
  'src/config/**/*.ts',
  'src/fixtures',
  'src/tests/**/*',
  'src/config/**/*',
];

const input = Object.fromEntries(
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

export default defineConfig({
  input,

  plugins: [
    tscAlias(),
    typescript({
      tsconfigOverride: {
        exclude: ignore,
      },
    }),
  ],
  external: ['glob'],
  output: [
    {
      format: 'cjs',
      sourcemap: true,
      dir: `lib`,
      preserveModulesRoot: 'src',
      preserveModules: true,

      entryFileNames: '[name].cjs',
    },
    {
      format: 'es',
      sourcemap: true,
      dir: `lib`,
      preserveModulesRoot: 'src',
      preserveModules: true,
      entryFileNames: '[name].js',
    },
  ],
});
