# Desktop app

This package contains the Tauri v2 shell. It loads the shared client output
from `packages/tanstack-solid-start/dist/client`; the Tauri build runs the web
build first so the desktop bundle cannot accidentally use stale frontend
assets.

From the repository root:

```sh
pnpm desktop:dev
pnpm desktop:build
```

Tauri requires the Rust toolchain and the platform's native build
prerequisites. The web frontend is also available on its own with
`pnpm web:dev` and `pnpm web:build`.
