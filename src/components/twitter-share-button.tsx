import React, { useState } from 'react';
import { TwitterIcon, TwitterShareButton as TwiButton } from 'react-share';
import { animated, config, useSpring } from 'react-spring';

import styled from '@emotion/styled';

type Props = {
  title: string;
  id: string;
};

const TwitterShareButton: React.FCX<Props> = ({ title, id, className }) => {
  const [enter, setEnter] = useState(false);
  const props = useSpring({
    config: config.wobbly,
    transform: enter ? 'scale(1.2)' : 'scale(1.0)'
  });

  const AnimatedTwiButton = animated(TwiButton);
  return (
    <AnimatedTwiButton
      url={`https://blog.hpprc.com/posts/${title}`}
      title={title}
      via='@osaremochi'
      id={id}
      className={className}
      onMouseEnter={_ => {
        setEnter(true);
      }}
      onMouseLeave={_ => {
        setEnter(false);
      }}
      style={props}
    >
      <TwitterIcon round crossOrigin='true' />
    </AnimatedTwiButton>
  );
};

export const StyledTwitterShareButton = styled(TwitterShareButton)`
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledTwitterShareButton;
