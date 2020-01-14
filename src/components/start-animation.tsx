import React, { useRef } from 'react';
import { animated, useChain, useSpring } from 'react-spring';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

const StartAnimation: React.FCX<{ mode: boolean }> = ({ className }) => {
  const springRef = useRef<any>();
  const props = useSpring({
    config: { mass: 1.8, tension: 130, friciton: 22 },
    to: [
      { height: '100vh', top: '0vh', transform: 'rotate(0deg) scale(2)' },
      {
        height: '0.5vh',
        width: '300vw',
        left: '-100vw',
        bottom: '49.925vh',
        top: '49.925vh'
      },
      { transform: 'rotate(180deg) scale(1)' },
      {
        height: '100vh',
        width: '100vw',
        left: '0vw',
        bottom: '0vh',
        top: '0vh'
      },
      { transform: 'rotate(-180deg) scale(0)' }
    ],
    from: {
      width: '100vw',
      height: '0vh',
      bottom: '0vh',
      top: '0vh',
      right: '0vw',
      left: '0vw',
      transform: 'rotate(0deg) scale(1)'
    },
    ref: springRef
  });

  useChain([springRef]);

  return (
    <div className={className}>
      <div>
        <animated.div style={props} />
      </div>
    </div>
  );
};

export const StyledStartAnimation = styled(StartAnimation)`
  position: absolute;
  top: 0;
  left: 0;
  div {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

    div {
      position: absolute;
      background-color: ${({ mode }) => (mode ? '#09090f' : '#ffffff')};
    }
  }

  /* transform: rotate(-45deg); */

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default () => {
  const { mode } = ColorModeContainer.useContainer();
  return <StyledStartAnimation mode={mode} />;
};
