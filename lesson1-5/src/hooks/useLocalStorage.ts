import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialValue: string) {
  const [localStorageValue, setLocalStorageValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, initialValue);
  }, [key, initialValue]);

  return localStorageValue;
}

export default useLocalStorage;
