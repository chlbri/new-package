import todo from '@bemedev/core';

describe('project1 tests', () => {
  test('runs core todo function', () => {
    expect(todo()).toBe('todo');
  });
});
