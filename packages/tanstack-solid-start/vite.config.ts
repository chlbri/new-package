import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { defineConfig } from "vite-plus";
import viteSolid from "vite-plugin-solid";

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 3000,
    strictPort: true,
  },
  plugins: [
    tanstackStart({
      spa: {
        enabled: true,
      },
    }),
    viteSolid({ ssr: true }),
  ],
});
