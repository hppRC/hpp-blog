import React, { ReactNode } from 'react';
import { ColorModeContainer, SwitchContainer } from 'src/store';

export const WrapRootElement = ({ element }: { element: ReactNode }) => (
  <ColorModeContainer.Provider>
    <SwitchContainer.Provider>{element}</SwitchContainer.Provider>
  </ColorModeContainer.Provider>
);

export default WrapRootElement;
