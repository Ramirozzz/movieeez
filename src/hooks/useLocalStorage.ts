import { useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
  validate?: (value: unknown) => value is T,
) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const value = localStorage.getItem(key);

    if (value === null) return defaultValue;

    try {
      const parsedValue: unknown = JSON.parse(value);

      if (validate && !validate(parsedValue)) {
        return defaultValue;
      }

      return parsedValue as T;
    } catch {
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValue] as const;
};
