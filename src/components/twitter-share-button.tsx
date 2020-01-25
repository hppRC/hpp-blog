import React, { useState } from 'react';
import { TwitterIcon, TwitterShareButton as TwiButton } from 'react-share';
import { animated, config, useSpring } from 'react-spring';

import styled from '@emotion/styled';

const AnimatedTwiButton = animated(TwiButton);

type ContainerProps = { title: string; customClass: string };
type Props = {
  enter: boolean;
  setEnter: (enter: boolean) => void;
} & ContainerProps;

const Component: React.FCX<Props> = ({
  title,
  customClass,
  enter,
  setEnter,
  className
}) => {
  const props = useSpring({
    config: config.wobbly,
    transform: enter ? 'scale(1.2)' : 'scale(1.0)'
  });
  return (
    <AnimatedTwiButton
      url={`https://blog.hpprc.com/posts/${title}`}
      title={title}
      via='@osaremochi'
      className={`${className} ${customClass}`}
      onMouseEnter={_ => {
        setEnter(true);
      }}
      onMouseLeave={_ => {
        setEnter(false);
      }}
      style={props}
    >
      <TwitterIcon round crossOrigin='' />
    </AnimatedTwiButton>
  );
};

const StyledComponent = styled(Component)`
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = props => {
  const [enter, setEnter] = useState(false);
  return <StyledComponent {...props} enter={enter} setEnter={setEnter} />;
};

export default Container;
