import React from 'react';
import { animated, useSpring } from 'react-spring';
import { SEO, StartAnimation } from 'src/components';

import styled from '@emotion/styled';

function bounceInterp(r: number) {
  return `translate3d(${15 * Math.cos(r + (2 * Math.PI) / 1.6) + 100}rem, ${15 *
    Math.sin(r + (2 * Math.PI) / 1.6) +
    60}rem, 0)`;
}

const Index: React.FCX = ({ className }) => {
  const { radians } = useSpring({
    config: { mass: 50, tension: 20, friction: 10 },
    from: { radians: 0 },
    to: async (next: any) => {
      await next({ radians: 2 * Math.PI });
      await next({ radians: -2 * Math.PI });
      await next({ radians: 4 * Math.PI });
      await next({ radians: -4 * Math.PI });
      await next({ radians: 6 * Math.PI });
      await next({ radians: -6 * Math.PI });
      await next({ radians: 8 * Math.PI });
      await next({ radians: -8 * Math.PI });
      await next({ radians: 2 * Math.PI });
      await next({ radians: -2 * Math.PI });
      await next({ radians: 4 * Math.PI });
      await next({ radians: -4 * Math.PI });
      await next({ radians: 6 * Math.PI });
      await next({ radians: -6 * Math.PI });
      await next({ radians: 8 * Math.PI });
      await next({ radians: -8 * Math.PI });
    }
  });
  return (
    <main className={className}>
      <StartAnimation />
      <animated.div
        style={{
          transform: radians.to(bounceInterp),
          fontSize: '20rem'
        }}
      >
        🌝
      </animated.div>
    </main>
  );
};

const StyledIndex = styled(Index)`
  flex: 1;
`;

export default (props: any) => (
  <>
    <SEO title='Top' pathname={props.path} />
    <StyledIndex />
  </>
);
