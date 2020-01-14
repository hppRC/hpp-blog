import React, { useState } from 'react';
import { animated, config, useTrail } from 'react-spring';
import { SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const items = ['Lorem', 'ipsum', 'dolor', 'sit'];

const Index: React.FCX = ({ className }) => {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config: config.wobbly,
    to: {
      opacity: 1,
      x: toggle ? 0 : 20,
      height: toggle ? 80 : 0
    },
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <main className={className}>
      <div onClick={() => set(state => !state)}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </main>
  );
};

const StyledIndex = styled(Index)`
  ${baseStyle};
  div {
  }
`;

export default (props: any) => (
  <>
    <SEO title='Top' pathname={props.path} />
    <StyledIndex />
  </>
);
