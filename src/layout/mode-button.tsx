import React, { memo } from 'react';
import { ColorModeContainer } from 'src/store';
import { useTheme } from 'src/theme';
import { Theme } from 'src/types';

import styled from '@emotion/styled';

type Props = { mode: boolean; toggle: () => void; theme: Theme };

const Component: React.FCX<Props> = memo(({ className, toggle }) => (
  <button onClick={toggle} type='button' className={className} aria-label='color mode change button'>
    <div />
  </button>
));

const StyledComponent = styled(Component)`
  --dark-border-color: #14141f;
  --light-border-color: #f5f5f5;

  position: relative;
  padding: 0 2rem;
  pointer-events: auto;
  cursor: pointer;
  border: ${({ mode }) => (mode ? `2px solid var(--light-border-color)` : `2px solid var(--dark-border-color)`)};
  border-radius: 4rem;
  outline: none;
  transition: border 0.3s ease-in-out;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border: ${({ mode }) => (mode ? `2px solid var(--dark-border-color)` : `2px solid var(--light-border-color)`)};
    border-radius: 4rem;
    transition: border 0.3s;
  }

  > div {
    width: 4rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    border: ${({ mode }) => (mode ? `2px solid var(--dark-border-color)` : `2px solid var(--light-border-color)`)};
    border-radius: 2rem;
    transition: border 0.3s ease-out, background-color 0.3s ease-out, transform 0.3s ease-out;
    transform: ${({ mode }) => (mode ? `translate3d(2rem, 0, 0)` : `translate3d(-2rem, 0, 0)`)};
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
    padding: 0 1.75rem;
    > div {
      width: 3.5rem;
      height: 3.5rem;
      transform: ${({ mode }) => (mode ? `translate3d(1.75rem, 0, 0)` : `translate3d(-1.75rem, 0, 0)`)};
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0 1.5rem;

    > div {
      width: 3rem;
      height: 3rem;
      transform: ${({ mode }) => (mode ? `translate3d(1.5rem, 0, 0)` : `translate3d(-1.5rem, 0, 0)`)};
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX = () => {
  const { mode, toggle } = ColorModeContainer.useContainer();
  const theme = useTheme();
  return <StyledComponent mode={mode} toggle={toggle} theme={theme} />;
};

export default memo(Container);
