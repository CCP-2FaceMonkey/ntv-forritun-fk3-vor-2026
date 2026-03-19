// useCounter.ts
import { useContext } from 'react';
import { CounterContext } from '@counter/context/CounterContext';
import { CounterContextType } from '@counter/types/types';

export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
