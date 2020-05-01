import React from 'react';
import Layout from 'src/layout';
import { ColorModeContainer } from 'src/store';
import { ThemeProvider } from 'src/theme';

import DynamicGlobalCSS from './dynamic-global-css';

export default ({ element }: { element: React.FCX }): JSX.Element => (
  <ColorModeContainer.Provider>
    <ThemeProvider>
      <DynamicGlobalCSS />
      <Layout>{element}</Layout>
    </ThemeProvider>
  </ColorModeContainer.Provider>
);
