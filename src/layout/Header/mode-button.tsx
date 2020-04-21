import React, { memo } from 'react';
import { animated, useSpring } from 'react-spring';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

type ContainerProps = {};
type Props = { mode: boolean; toggle: () => void } & ContainerProps;

const Component: React.FCX<Props> = memo(({ className, mode, toggle }) => {
  const sp = useSpring({
    backgroundColor: mode ? `#ffffff` : `#09090f90`,
    border: mode ? `2px solid #09090f` : `2px solid #ffffff`,
  });

  return (
    <button onClick={toggle} type='button' className={className} aria-label='color mode change button'>
      <animated.div style={sp} />
    </button>
  );
});

const StyledComponent = styled(Component)`
  position: relative;
  padding: 0 2rem;
  pointer-events: auto;
  cursor: pointer;
  border: ${({ mode }) => (mode ? `2px solid #ffffff` : `2px solid #09090f90`)};
  border-radius: 4rem;
  outline: none;
  transition: border 0.3s;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border: ${({ mode }) => (mode ? `2px solid #09090f` : `2px solid #ffffff`)};
    border-radius: 4rem;
    transition: border 0.3s;
  }

  > div {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    transition: transform 0.3s ease-out;
    transform: ${({ mode }) => (mode ? `translate3d(2rem, 0, 0)` : `translate3d(-2rem, 0, 0)`)};
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
    padding: 0 1.75rem;
    > div {
      width: 3.5rem;
      height: 3.5rem;
      transition: transform 0.25s ease-out;
      transform: ${({ mode }) => (mode ? `translate3d(1.75rem, 0, 0)` : `translate3d(-1.75rem, 0, 0)`)};
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0 1.5rem;

    > div {
      width: 3rem;
      height: 3rem;
      transition: transform 0.25s ease-out;
      transform: ${({ mode }) => (mode ? `translate3d(1.5rem, 0, 0)` : `translate3d(-1.5rem, 0, 0)`)};
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = () => {
  const { mode, toggle } = ColorModeContainer.useContainer();
  return <StyledComponent mode={mode} toggle={toggle} />;
};

export default memo(Container);
