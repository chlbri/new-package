import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
  return (
    <main>
      <p class='eyebrow'>One frontend, two platforms</p>
      <h1>Web and desktop, together.</h1>
      <p>
        This TanStack Start and SolidJS app is shared by the browser and the Tauri
        desktop shell.
      </p>
    </main>
  );
}
