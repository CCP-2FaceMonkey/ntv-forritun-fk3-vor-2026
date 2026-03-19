// useTheme.ts
import { useContext } from 'react';
import { ThemeContext } from '@theme/context/ThemeContext';
import { ThemeContextType } from '@theme/types/types';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
