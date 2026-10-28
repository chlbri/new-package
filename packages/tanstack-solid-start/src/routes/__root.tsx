import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/solid-router";
import { HydrationScript } from "solid-js/web";
import stylesheet from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Web and desktop",
      },
    ],
    links: [{ rel: "stylesheet", href: stylesheet }],
  }),
  component: Root,
});

function Root() {
  return (
    <html lang="en">
      <head>
        <HydrationScript />
      </head>
      <body>
        <HeadContent />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
