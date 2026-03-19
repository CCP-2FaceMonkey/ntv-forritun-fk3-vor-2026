// CounterContext.tsx
import { createContext, useReducer } from 'react';
import {
  CounterContextType,
  CounterProviderProps,
} from '~/feature/counter/types/types';
import { counterReducer } from './CounterReducer';

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined,
);

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
