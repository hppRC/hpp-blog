import { useCallback, useEffect, useMemo, useState } from 'react';
import { createContainer } from 'unstated-next';

const Store = () => {
  const prevMode = useMemo(() => {
    if (typeof localStorage !== `undefined`) {
      if (localStorage.getItem(`mode`) !== null) {
        return window.matchMedia(`(prefers-color-scheme: light)`).matches;
      }
      return localStorage.getItem(`mode`) === `true`;
    }
    return true;
  }, []);

  const [mode, set] = useState(prevMode);

  useEffect(() => {
    localStorage.setItem(`mode`, mode.toString());
  }, [mode]);

  const toggle = useCallback(() => {
    set((mode) => !mode);
  }, []);

  return { mode, toggle };
};

const Container = createContainer(Store);

export default Container;
