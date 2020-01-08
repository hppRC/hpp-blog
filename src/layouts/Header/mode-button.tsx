import React from 'react';
import { animated, useSpring } from 'react-spring';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

type Props = {
  mode: boolean;
};

const ModeButton: React.FCX<Props> = ({ className }) => {
  const { mode, toggle } = ColorModeContainer.useContainer();
  const props = useSpring({
    transform: mode ? 'translate3d(2rem, 0, 0)' : 'translate3d(-2rem, 0, 0)',
    backgroundColor: mode ? '#09090f' : '#ffffff',
    border: mode ? '2px solid #ffffff' : '2px solid #09090f'
  });

  return (
    <button onClick={toggle} className={className}>
      <animated.div style={props} />
    </button>
  );
};

export const StyledModeButton = styled(ModeButton)`
  padding: 0 2rem;
  outline: none;
  cursor: pointer;
  border: 2px solid #ffffff;
  border-radius: 4rem;

  div:nth-of-type(1) {
    background-color: ${({ mode }) => (mode ? '#09090f' : '#ffffff')};
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
  }
`;

export default StyledModeButton;
