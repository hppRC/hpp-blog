/* eslint-disable jsx-a11y/accessible-emoji */
import { Link } from 'gatsby';
import React, { memo, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';

import styled from '@emotion/styled';

type ContainerProps = {};
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = memo(({ className }) => {
  const [{ translate, scale, width }, set] = useSpring(() => ({
    translate: `translate3d(0px, 0, 0)`,
    scale: `scale(1.0)`,
    width: `10px`,
  }));
  const ref = useRef<any>(null);

  const bind = useScroll(
    ({ xy: [, y] }) => {
      if (typeof window === `undefined`) return;
      const bk = window.innerWidth > 1100;
      const sp = window.innerWidth < 480;

      set({
        translate: `translate3d(-${Math.min(y * 0.2, ref.current?.offsetWidth - 30)}px, 0, 0)`,
        scale: `scale(${Math.min(sp ? 1.8 : 1.5, 1 + y * 0.001)})`,
        width: `${bk ? 10 : Math.min(32, 5 + y * 0.05)}px`,
      });
    },
    { domTarget: typeof window !== `undefined` ? window : undefined }
  );

  useEffect(() => {
    bind();
  }, [bind]);

  return (
    <animated.div style={{ transform: translate }} className={className}>
      <Link to='/'>
        <h1 ref={ref}>
          hpp blog
          <animated.div style={{ display: `inline-block`, width }} />
          <animated.span role='img' aria-label='title icon' style={{ transform: scale }}>
            🌝
          </animated.span>
        </h1>
      </Link>
    </animated.div>
  );
});

const StyledComponent = styled(Component)`
  padding: 1rem;
  will-change: transform;
  > a {
    pointer-events: auto;

    > h1 {
      display: inline-block;
      color: #fff;
      > span {
        display: inline-block;
      }
    }
  }
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0.4rem 0.5rem;
    > a {
      > h1 {
        font-size: 2.5rem;
      }
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = () => <StyledComponent />;

export default memo(Container);
