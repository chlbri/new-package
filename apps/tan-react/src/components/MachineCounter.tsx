import { useEffect, useState } from 'react';
import { createCounterService } from '../machines/counter';

export function MachineCounter() {
  const [service] = useState(createCounterService);
  const [snapshot, setSnapshot] = useState(() => ({
    value: service.value,
    count: service.context?.count ?? 0,
  }));

  useEffect(() => {
    service.start();
    const subscription = service.subscribe(current => {
      setSnapshot({ value: current.value, count: current.context?.count ?? 0 });
    });

    return () => {
      subscription.unsubscribe();
      service.dispose();
    };
  }, [service]);

  const { value, count } = snapshot;
  const label = typeof value === 'string' ? value : JSON.stringify(value);
  const running = value === 'running';

  return (
    <section>
      <h2>
        <code>@bemedev/app</code> state machine
      </h2>
      <p data-testid='machine-value'>
        state: <strong>{label}</strong> · count: <strong>{count}</strong>
      </p>
      <div className='actions'>
        <button
          type='button'
          onClick={() => service.send(running ? 'STOP' : 'START')}
        >
          {running ? 'Stop' : 'Start'}
        </button>
        <button
          type='button'
          disabled={!running}
          onClick={() => service.send('DECREMENT')}
        >
          -1
        </button>
        <button
          type='button'
          disabled={!running}
          onClick={() => service.send('INCREMENT')}
        >
          +1
        </button>
        <button
          type='button'
          disabled={!running}
          onClick={() => service.send('RESET')}
        >
          Reset
        </button>
      </div>
    </section>
  );
}
