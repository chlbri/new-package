import { defineConfig } from 'vite-plus';

// Expo and Metro own bundling and native builds. Vite+ provides the
// formatting, linting, type-checking and test tooling for this app.
export default defineConfig({
  test: { passWithNoTests: true, environment: 'node' },
});
