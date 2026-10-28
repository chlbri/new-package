import { defineConfig } from "vite-plus";

import fmt from "./oxfmt.config";
import lint from "./oxlint.config";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  server: { host: "0.0.0.0" },
  fmt,

  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    options: { typeAware: true, typeCheck: true },
    ...lint,
  },

  run: {
    cache: {
      scripts: true, // Cache package.json scripts (default: false)
      tasks: true, // Cache task definitions (default: true)
    },
  },

  test: {
    passWithNoTests: true,
    slowTestThreshold: 3000,
    logHeapUsage: true,
    globals: true,
    typecheck: { enabled: true, ignoreSourceErrors: false },
    env: { NODE_ENV: "test" },
    coverage: { enabled: true, reportsDirectory: ".coverage", provider: "v8" },

    projects: [
      "packages/__tests__/project1/vitest.config.ts",
      "packages/__tests__/solidjs/vitest.config.ts",
    ],
  },
});
