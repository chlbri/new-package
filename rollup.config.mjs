import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'rollup';
import { circularDependencies } from 'rollup-plugin-circular-dependencies';
import { nodeExternals } from 'rollup-plugin-node-externals';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import typescript from 'rollup-plugin-typescript2';

const exclude = [
  '**/*.test.ts',
  '**/*.test-d.ts',
  '**/*.fixtures.ts',
  '**/fixtures.ts',
  'src/config/**/*.ts',
  'src/fixtures/**/*.ts',
  'src/tests/**/*',
  'src/config/**/*',
];

const ignore = [...exclude, '**/*.types.ts', '**/types.ts'];

const input = Object.fromEntries(
  globSync('src/**/*.ts', { ignore }).map(file => [
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length),
    ),
    fileURLToPath(new URL(file, import.meta.url)),
  ]),
);

export default defineConfig({
  input,
  plugins: [
    tsConfigPaths(),
    typescript({
      tsconfigOverride: { exclude },
    }),
    circularDependencies({
      exclude: [
        '**/types.ts',
        '**/type.ts',
        '**/*.types.ts',
        '**/*.type.ts',
      ],
    }),

    nodeExternals({
      optDeps: false,
      builtinsPrefix: 'strip',
    }),
  ],
  // external: ['vitest'],
  output: [
    {
      format: 'es',
      sourcemap: true,
      preserveModulesRoot: 'src',
      dir: `lib`,
      preserveModules: true,
      entryFileNames: '[name].js',
    },
    {
      format: 'cjs',
      sourcemap: true,
      preserveModulesRoot: 'src',
      dir: `lib`,
      preserveModules: true,
      entryFileNames: '[name].cjs',
    },
  ],
});
