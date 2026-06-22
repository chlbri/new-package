import { aliasTs } from '@bemedev/dev-utils/vitest-alias';
import { defineProject } from 'vitest/config';

export default defineProject({
  plugins: [aliasTs()],
  test: {
    name: 'project1',
    globals: true,
  },
});
