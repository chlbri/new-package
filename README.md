## Add tsconfig alias to vitess alias

Check the vitest.config.ts file to see how to use.

Just pass the tsconfig.json file as parameter (the "_json_", not the
"**filename**")

```typescript
import { defineConfig } from 'vitest/config';
import { aliasTs } from '@bemedev';
/**
 * Make sure you add "resolveJsonModule": true
 * inside your tsconfig.json at compilerOPtions
 * or write the json file directly
 */
import tsconfig from './tsconfig.json';

export default defineConfig({
  plugins: [aliasTs(tsconfig)],
  test: {
    environment: 'node',
    globals: true,

    coverage: {
      enabled: true,
      extension: 'ts',
      reportsDirectory: '.coverage',
      all: true,
      exclude: ['**/types.ts', '**/index.ts'],
      provider: 'v8',
    },
  },
});
```
