import React from 'react';
import { animated, useSpring } from 'react-spring';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

type Props = {
  mode: boolean;
};

const ModeButton: React.FCX<Props> = ({ className }) => {
  const { mode, toggle } = ColorModeContainer.useContainer();
  const buttonProps = useSpring({
    border: mode ? '2px solid #09090f' : '2px solid #ffffff'
  });
  const divProps = useSpring({
    transform: mode ? 'translate3d(2rem, 0, 0)' : 'translate3d(-2rem, 0, 0)',
    backgroundColor: mode ? '#09090f' : '#ffffff',
    border: mode ? '2px solid #ffffff' : '2px solid #09090f'
  });

  return (
    <animated.button onClick={toggle} className={className} style={buttonProps}>
      <animated.div style={divProps} />
    </animated.button>
  );
};

export const StyledModeButton = styled(ModeButton)`
  padding: 0 2rem;
  outline: none;
  cursor: pointer;
  border-radius: 4rem;

  div {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
  }
`;

export default StyledModeButton;
