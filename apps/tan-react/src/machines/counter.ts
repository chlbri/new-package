import { createMachine, interpret, typings } from '@bemedev/app';

export const counterMachine = createMachine(
  {
    initial: 'idle',
    states: {
      idle: { on: { START: '/running' } },
      running: {
        on: {
          STOP: '/idle',
          INCREMENT: { actions: 'increment' },
          DECREMENT: { actions: 'decrement' },
          RESET: { actions: 'reset' },
        },
      },
    },
  },
  {
    context: typings.context({ count: 'number' }),
    eventsMap: typings.eventsMap({
      START: 'undefined',
      STOP: 'undefined',
      INCREMENT: 'undefined',
      DECREMENT: 'undefined',
      RESET: 'undefined',
    }),
  },
);

counterMachine.addOptions(({ assign }) => ({
  actions: {
    increment: assign('count', ({ context }) => (context?.count ?? 0) + 1),
    decrement: assign('count', ({ context }) => (context?.count ?? 0) - 1),
    reset: assign('count', () => 0),
  },
}));

export const createCounterService = (context: { count: number } = { count: 0 }) =>
  interpret(counterMachine, { context });
