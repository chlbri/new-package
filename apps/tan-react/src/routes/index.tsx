import { createFileRoute } from '@tanstack/react-router';
import { DebouncedSearch } from '../components/DebouncedSearch';
import { MachineCounter } from '../components/MachineCounter';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
  return (
    <>
      <h1>TanStack Start + React</h1>
      <p>
        A minimal TanStack Start application wired with{' '}
        <code>@tanstack/react-pacer</code> and <code>@bemedev/app</code>.
      </p>
      <MachineCounter />
      <DebouncedSearch />
    </>
  );
}
