import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';

import styled from '@emotion/styled';

const items = ['🌝', '🎉', '🛠'];

const MoonDeco: React.FCX<{ trigger: boolean }> = ({ className, trigger }) => {
  const [enter, setEnter] = useState(false);
  const decoProps = useSpring({
    config: config.wobbly,
    transform: enter
      ? 'translate3d(-10rem,-2rem,0)'
      : 'translate3d(2rem,-10rem,0)'
  });
  return (
    <div className={className}>
      <animated.div
        style={decoProps}
        onMouseEnter={(e: any) => {
          setEnter(true);
        }}
        onMouseLeave={(e: any) => {
          setEnter(false);
        }}
      >
        {items[Math.floor(Math.random() * items.length)]}
      </animated.div>
    </div>
  );
};

export const StyledMoonDeco = styled(MoonDeco)`
  position: absolute;
  top: 0;
  left: 0;
  div {
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    font-size: 10rem;
    will-change: transform;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export default StyledMoonDeco;
