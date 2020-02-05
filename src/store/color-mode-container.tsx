import { useCallback, useEffect, useMemo, useState } from 'react';
import { createContainer } from 'unstated-next';

const Store = () => {
  const prevMode = useMemo(() => {
    if (typeof localStorage !== 'undefined') {
      // 何も入ってない時にdark modeになっちゃう、デフォルトは明るくしたいので何もない時は||の後が使われるようになっている
      return (localStorage.getItem('mode') || 'true') === 'true';
    }
    return true;
  }, []);

  const [mode, set] = useState(prevMode);

  useEffect(() => {
    localStorage.setItem('mode', mode.toString());
  }, [mode]);

  const toggle = useCallback(() => {
    set(mode => !mode);
  }, []);

  return { mode, toggle };
};

const Container = createContainer(Store);

export default Container;
