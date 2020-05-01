import React from 'react';
import { ColorModeContainer } from 'src/store';
import { ThemeProvider } from 'src/theme';

import DynamicGlobalCSS from './dynamic-global-css';

export default ({ element }: { element: React.FCX }): JSX.Element => (
  <ColorModeContainer.Provider>
    <ThemeProvider>
      <DynamicGlobalCSS />
      {element}
    </ThemeProvider>
  </ColorModeContainer.Provider>
);
