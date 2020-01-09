import React from 'react';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

import ModeButton from './mode-button';

const Header: React.FCX<{ mode: boolean }> = ({ className }) => {
  return (
    <header className={className}>
      <h1>hpp blog🌝</h1>
      <nav>
        <ModeButton />
      </nav>
    </header>
  );
};

export const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 0 0.5rem;

  h1 {
    color: #ffffff;
  }

  nav {
    padding: 1.5rem;
  }
  z-index: 1000;
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
    nav {
      padding: 1rem 0.5rem;
    }
  }
  @media screen and (max-width: 480px) {
    nav {
      padding: 0.5rem 0;
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

export default () => {
  const { mode } = ColorModeContainer.useContainer();
  return <StyledHeader mode={mode} />;
};
