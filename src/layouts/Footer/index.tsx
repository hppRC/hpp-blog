import React from 'react';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

const Footer: React.FCX = ({ className }) => {
  const { mode } = ColorModeContainer.useContainer();

  return (
    <footer
      className={className}
      style={{ color: mode ? '#09090f' : '#ffffff' }}
    >
      Copyright © 2019 hppRC All Rights Reserved.
    </footer>
  );
};

export const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  transition: color 0.3s;
`;

export default StyledFooter;
