import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useColorModeContainer = () => {
  const [mode, set] = useState(false);

  const toggle = () => {
    set(mode => !mode);
  };

  return { mode, toggle };
};

export const ColorModeContainer = createContainer(useColorModeContainer);

export default ColorModeContainer;
