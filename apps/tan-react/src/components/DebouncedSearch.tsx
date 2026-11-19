import { useDebouncedValue } from '@tanstack/react-pacer';
import { useState } from 'react';

export function DebouncedSearch() {
  const [_query, setQuery] = useState('');
  const [query] = useDebouncedValue(_query, { wait: 400 });

  return (
    <section>
      <h2>
        <code>@tanstack/react-pacer</code> debounced value
      </h2>
      <input
        type='search'
        placeholder='Type something…'
        value={_query}
        onChange={event => setQuery(event.target.value)}
      />
      <p>
        immediate: <strong>{_query || '∅'}</strong> · debounced:{' '}
        <strong>{query || '∅'}</strong>
      </p>
    </section>
  );
}
