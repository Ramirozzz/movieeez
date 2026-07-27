import { useState } from "react";

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const value = localStorage.getItem(key);

    return value !== null ? JSON.parse(value) : defaultValue;
  });

  const setValue = (newValue: T) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValue] as const;
};
