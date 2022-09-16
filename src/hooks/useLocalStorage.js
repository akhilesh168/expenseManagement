import React, { useEffect, useState } from 'react';

export default function useLocalStorage(key, localStorageValue) {
  const getLocalStorageValues = () => {
    if (typeof localStorage !== undefined) {
      const localStorageValues = localStorage.getItem(key);
      return JSON.parse(localStorageValues) || {};
    }
  };

  const [value, setValue] = useState(() => {
    return getLocalStorageValues();
  });

  const setLocalStorageValue = (value) => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(getLocalStorageValues());
    }
  };

  useEffect(() => {}, [value]);
  return [value, setLocalStorageValue];
}
