import { useState, useCallback, useEffect } from 'react';

export const useGetClientRect = reset => {
  const [rect, setRect] = useState(0);
  const getItemRect = useCallback(node => {
    if (node) {
      const rect = node.getBoundingClientRect();
      setRect(rect);
    }
  }, []);

  useEffect(() => {
    if (reset) setRect(0);
  }, [reset]);

  return { rect, getItemRect };
};
