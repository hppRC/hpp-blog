import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

import ModeButton from './mode-button';

type Props = {
  mode: boolean;
};

const Header: React.FCX<Props> = ({ className }) => {
  const [{ translate, scale }, set] = useSpring(() => ({
    translate: `translate3d(0rem, 0, 0)`,
    scale: 'scale(1.0)'
  }));
  const bind = useScroll(
    ({ xy: [, y] }) =>
      set({
        translate: `translate3d(-${Math.min(y * 0.02, 15)}rem, 0, 0)`,
        scale: `scale(${Math.min(2, 1 + y * 0.001)})`
      }),
    { domTarget: typeof window !== 'undefined' ? window : undefined }
  );
  useEffect(() => {
    bind();
  }, [bind]);
  return (
    <header className={className}>
      <animated.div style={{ transform: translate }}>
        <Link to='/'>
          <h1>
            hpp blog
            <animated.span style={{ transform: scale }}>🌝</animated.span>
          </h1>
        </Link>
      </animated.div>
      <nav>
        <ModeButton />
      </nav>
    </header>
  );
};

export const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 0 0.5rem;

  div {
    padding: 1rem;

    will-change: transform;
    a {
      text-decoration: none;
      h1 {
        color: #ffffff;

        span {
          display: inline-block;
          width: 2rem;

          padding: 0.3rem 0.5rem;
        }
      }
    }
  }

  nav {
    padding: 1.5rem;
  }
  z-index: 1000;

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
    nav {
      padding: 1rem 0.5rem;
    }

    div {
      a {
        h1 {
          font-size: 3rem;
          span {
            padding: 0.1rem 0.8rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    nav {
      padding: 0.5rem 0;
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

export default () => {
  const { mode } = ColorModeContainer.useContainer();
  return <StyledHeader mode={mode} />;
};
