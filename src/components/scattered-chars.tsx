import React, { memo } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import styled from '@emotion/styled';

type ContainerProps = { chars: string; isTitle?: boolean };
type Props = {} & ContainerProps;
type BlockProps = { ch: string };

const Block: React.FCX<BlockProps> = ({ ch }) => {
  const [{ x, y, cursor }, set] = useSpring(() => ({
    config: config.stiff,
    x: 0,
    y: 0,
    cursor: `grab`,
  }));

  const bind = useDrag(({ down, offset: [x, y] }) => {
    set({ x, y, cursor: down ? `grabbing` : `grab` });
  });

  return (
    // eslint-disable-next-line prettier/prettier
    // eslint-disable-next-line object-shorthand
    <animated.h2 {...bind()} style={{ x: x, y: y, cursor: cursor }} id={ch === ` ` ? `scattered-chars-space` : ``}>
      {ch === ` ` ? `H` : ch}
    </animated.h2>
  );
};

const Component: React.FCX<Props> = memo(({ className, chars }) => (
  <ul className={className}>
    {Array.from(chars).map((ch: string, i: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={i}>
        <Block ch={ch} />
      </li>
    ))}
  </ul>
));

const StyledComponent = styled(Component)`
  #scattered-chars-space {
    font-size: 2rem;
    pointer-events: none;
    opacity: 0;
  }

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  max-width: 1200px;

  > li {
    z-index: 1;
    display: felx;
    touch-action: none;
    user-select: none;
    > h2 {
      font-size: ${({ isTitle }) => (isTitle ? `8rem` : `5rem`)};
      color: #ffffff;
      user-select: none;
    }
  }
  @media screen and (max-width: 1100px) {
    > li {
      > h2 {
        font-size: ${({ isTitle }) => (isTitle ? `7rem` : `4rem`)};
      }
    }
  }
  @media screen and (max-width: 768px) {
    > li {
      > h2 {
        font-size: ${({ isTitle }) => (isTitle ? `5rem` : `3.5rem`)};
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0.6rem;
    > li {
      > h2 {
        font-size: ${({ isTitle }) => (isTitle ? `3rem` : `2rem`)};
      }
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = ({ chars, isTitle }) => (
  <StyledComponent chars={chars} isTitle={isTitle} />
);

export default memo(Container);
