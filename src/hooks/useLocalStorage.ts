import { useCallback } from 'react';

export default function useLocalStorage() {
  const getValue = useCallback((key: string): string | null => {
    return localStorage.getItem(key);
  }, []);

  const setValue = useCallback((key: string, value: string): void => {
    localStorage.setItem(key, value);
  }, []);

  return { getValue, setValue };
}