import { useState, useEffect } from 'react';

function useDebounce(value, delay = 300, keywordLimit = 3) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    if (typeof value === 'string' && value.split(' ').length >= keywordLimit) {
      clearTimeout(handler);
      setDebouncedValue(value);
    }

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, keywordLimit]);

  return debouncedValue;
}

export default useDebounce;