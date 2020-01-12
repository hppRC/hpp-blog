import React from 'react';
import { animated, useSpring } from 'react-spring';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

type Props = {
  mode: boolean;
};

const ModeButton: React.FCX<Props> = ({ mode, className }) => {
  const { toggle } = ColorModeContainer.useContainer();

  const props = useSpring({
    transform: mode ? 'translate3d(2rem, 0, 0)' : 'translate3d(-2rem, 0, 0)',
    backgroundColor: mode ? '#ffffff' : '#09090f',
    border: mode ? '2px solid #09090f' : '2px solid #ffffff'
  });

  return (
    <button onClick={toggle} className={className}>
      <span aria-hidden='true'>dark mode button</span>
      <animated.div style={props} />
    </button>
  );
};

export const StyledModeButton = styled(ModeButton)`
  position: relative;
  padding: 0 2rem;
  outline: none;
  cursor: pointer;
  border-radius: 4rem;
  transition: border 0.3s;
  border: ${({ mode }) => (mode ? '2px solid #ffffff' : '2px solid #09090f')};

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: border 0.3s;
    border: ${({ mode }) => (mode ? '2px solid #09090f' : '2px solid #ffffff')};
    border-radius: 4rem;
    z-index: -1;
  }

  div {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
  }
  span {
    display: none;
  }
`;

export default () => {
  const { mode } = ColorModeContainer.useContainer();
  return <StyledModeButton mode={mode} />;
};
