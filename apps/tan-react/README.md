# @bemedev/tan-react

A minimal [TanStack Start](https://tanstack.com/start) application with React,
including demos for:

- [`@tanstack/react-pacer`](https://tanstack.com/pacer) — debounced values.
- [`@bemedev/app`](https://github.com/chlbri/app) — a typed state machine driving a
  counter.

## Getting started

```sh
pnpm install
pnpm -C apps/tan-react dev
```

The dev server listens on [http://localhost:3000](http://localhost:3000).

## Scripts

| Script    | Description                                     |
| --------- | ----------------------------------------------- |
| `dev`     | Start the Vite dev server.                      |
| `build`   | Build for production and type check.            |
| `preview` | Preview the production build.                   |
| `start`   | Run the Nitro server output (`.output/server`). |

## Structure

```text
src/
├── components/     # MachineCounter and DebouncedSearch demos
├── machines/       # @bemedev/app state machine
├── routes/         # TanStack Router file routes
├── router.tsx      # Router factory
├── routeTree.gen.ts
└── styles.css
```
