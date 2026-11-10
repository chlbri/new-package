import { tanstackStart } from '@tanstack/solid-start/plugin/vite';
import viteSolid from 'vite-plugin-solid';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  server: { host: '127.0.0.1', port: 3000, strictPort: true },

  plugins: [
    tanstackStart({
      spa: { enabled: true },
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
        failOnError: true,
      },
    }),
    viteSolid({ ssr: true }),
  ],
});
