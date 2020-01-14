import React from 'react';
import { animated, useSpring } from 'react-spring';

import styled from '@emotion/styled';

const StartAnimation: React.FCX = ({ className }) => {
  const props = useSpring({
    config: { mass: 1.3, tension: 180, friciton: 22 },
    to: [
      { width: '100vw', height: '100vh', top: '0vh' },
      { width: '0vw', left: '100vw' },
      { width: '100vw', left: '0vw' },
      {
        height: '0.5vh',
        width: '300vw',
        left: '-100vw',
        bottom: '49.925vh',
        top: '49.925vh'
      },
      { transform: 'rotate(180deg)' },
      {
        height: '100vh',
        width: '100vw',
        left: '0vw',
        bottom: '0vh',
        top: '0vh'
      }
    ],
    from: {
      width: '0vw',
      height: '100vh',
      bottom: '0vh',
      top: '0vh',
      right: '0vw',
      left: '0vw',
      transform: 'rotate(0deg)'
    }
  });

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
      background-color: #09090f;
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

export default StyledStartAnimation;
