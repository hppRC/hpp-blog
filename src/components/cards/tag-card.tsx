import { Link } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { memo, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { MemolizedImage } from 'src/components';
import { useAnyImage } from 'src/hooks';
import { useTheme } from 'src/theme';
import { Theme } from 'src/types';

import styled from '@emotion/styled';

import { DecoMoon } from '.';

type ContainerProps = {
  tag: string;
};
type Props = {
  theme: Theme;
  enter: boolean;
  setEnter: (enter: boolean) => void;
  fluid?: FluidObject;
} & ContainerProps;

const Component: React.FCX<Props> = memo(({ className, fluid, enter, setEnter, tag }) => {
  const sp = useSpring({
    config: config.wobbly,
    transform: enter ? `scale(1.05)` : `scale(1.0)`,
  });

  return (
    <animated.article
      className={className}
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      style={sp}
    >
      <Link to={`tags/${tag}`}>
        <MemolizedImage fluid={fluid} />
        <div>
          <h2>{tag}</h2>
        </div>
      </Link>
      <DecoMoon enter={enter} />
    </animated.article>
  );
});

const StyledComponent = styled(Component)`
  position: relative;
  overflow: hidden;

  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.cardBoxShadow};
  transition: background-color 0.3s, box-shadow 0.15s;

  will-change: transform;

  > a {
    position: relative;
    display: block;
    height: 100%;

    color: ${({ theme }) => theme.color};
    text-decoration: none;
    transition: color 0.3s;

    .gatsby-image-wrapper {
      height: 25rem;
      border-radius: 3px;
    }

    > div {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      > h2 {
        z-index: 1;
        font-size: 6rem;
        color: #ffffff;
      }

      ::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-color: #09090f;
        opacity: 0.3;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    > a {
      .gatsby-image-wrapper {
        height: 20rem;
      }
      > div {
        > h2 {
          font-size: 4.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    > a {
      .gatsby-image-wrapper {
        height: 15rem;
      }
      > div {
        > h2 {
          font-size: 3rem;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = ({ tag }) => {
  const [enter, setEnter] = useState(false);
  const theme = useTheme();
  const bannerPNG = useAnyImage(`banner.png`);
  const bannerJPG = useAnyImage(`banner.jpg`);
  const fluid = useAnyImage(tag) || bannerPNG || bannerJPG;
  return <StyledComponent {...{ fluid, enter, setEnter, theme, tag }} />;
};

export default memo(Container);
