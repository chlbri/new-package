# Web app

This package is the shared TanStack Start and SolidJS frontend. It is configured as a
client-rendered SPA so the same build can be served by a static web host or embedded
in the Tauri desktop app.

From the repository root:

```sh
pnpm web:dev
pnpm web:build
```

The production client files are generated in `dist/client`. TanStack Start writes
the SPA entry shell as `_shell.html`; the build script also copies it to
`index.html`, which Tauri and static web hosts expect.

Because this app is configured for a shared client build, do not rely on server-only
routes or server functions for functionality that must work offline or inside the
desktop app. Put shared data access behind an API that both builds can reach, or add
a native/local backend separately.
