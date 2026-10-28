# Web app

This package is the shared TanStack Start and SolidJS frontend. It is
configured as a client-rendered SPA so the same build can be served by a static
web host or embedded in the Tauri desktop app.

From the repository root:

```sh
pnpm web:dev
pnpm web:build
```

The production client files are generated in `dist/client`; the Tauri
configuration uses that directory as its frontend.

Because this app is configured for a shared client build, do not rely on
server-only routes or server functions for functionality that must work
offline or inside the desktop app. Put shared data access behind an API that
both builds can reach, or add a native/local backend separately.
