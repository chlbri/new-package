# Test Rules and Guidelines

## Test Numerotation

### General Principles

1. **Top-level `describe` blocks**: Number sequentially starting from `#01`
2. **Nested `it` blocks**: Number sequentially within each `describe` block
   starting from `#01`
3. **Exception**: The main/root `describe` block (typically the
   module/function name) should NOT be numbered

### Format

- **describe blocks**: `#XX => Description`
- **it blocks**: `#XX => Description`

Where `XX` is a zero-padded number (e.g., `01`, `02`, `10`, etc.)

### Example Structure

```typescript
describe('createPausable', () => {
  // Root describe - NO numbering

  describe('#01 => Initial state', () => {
    it('#01 => should not emit values initially', () => {
      // test code
    });
  });

  describe('#02 => start()', () => {
    it('#01 => should start emitting values', () => {
      // test code
    });

    it('#02 => should ignore start() when already running', () => {
      // test code
    });
  });

  describe('#03 => stop()', () => {
    it('#01 => should stop emitting values', () => {
      // test code
    });

    it('#02 => should allow restart after stop', () => {
      // test code
    });
  });
});
```

### Benefits

- **Easy reference**: Quickly reference specific test cases in discussions
  or documentation
- **Clear organization**: Visual hierarchy of test structure
- **Maintenance**: Easy to track when tests are added, removed, or
  reordered
- **Context awareness**: Numbers reset within each `describe` block,
  keeping counts manageable

### Best Practices

1. Always maintain sequential numbering when adding new tests
2. If removing a test, consider renumbering subsequent tests to maintain
   sequence
3. Use descriptive names after the number separator (`=>`)
4. Keep the root `describe` block unnumbered for clarity
