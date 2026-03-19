// types.ts
import { Dispatch, ReactNode } from 'react';

type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

interface CounterState {
  count: number;
}

interface CounterContextType {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
}

interface CounterProviderProps {
  children: ReactNode;
}

export type {
  CounterAction,
  CounterState,
  CounterContextType,
  CounterProviderProps,
};
