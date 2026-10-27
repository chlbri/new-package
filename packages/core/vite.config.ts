import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: ["src/**/*.ts"],
    ignored: [
      "src/**/__tests__/**",
      "src/**/*.test.ts",
      "src/**/*.test-d.ts",
      "src/**/*.fixtures.ts",
      "src/**/fixtures.ts",
      "src/fixtures/**/*.ts",
    ],
    format: ["esm"],
    outDir: "lib",
    root: "src",
    unbundle: true,
    sourcemap: true,
    dts: true,
    clean: true,
    fixedExtension: false,
    nodeProtocol: "strip",
    platform: "node",
  },
});
