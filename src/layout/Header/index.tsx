import React from 'react';

import styled from '@emotion/styled';

import ModeButton from './mode-button';
import SlideInOutTitle from './slide-in-out-title';

type ContainerProps = {};
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = ({ className }) => {
  return (
    <header className={className}>
      <div>
        <SlideInOutTitle />
        <nav>
          <ModeButton />
        </nav>
      </div>
    </header>
  );
};

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0.5rem;

  pointer-events: none;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;

    > nav {
      padding: 1.5rem;
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 0.5rem;
    > div {
      > nav {
        padding: 1.4rem 1rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0.3rem;
    > div {
      > nav {
        padding: 1.2rem 0.2rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    > div {
      > nav {
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
