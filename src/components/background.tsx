import Img, { FluidObject } from 'gatsby-image';
import React, { memo } from 'react';
import { useAnyImage } from 'src/hooks';

import styled from '@emotion/styled';

type ContainerProps = { fluid?: FluidObject };
type Props = { background?: FluidObject };

const Component: React.FCX<Props> = memo(({ className, background }) => (
  <div className={className}>
    <Img fluid={background} />
  </div>
));

const StyledComponent = styled(Component)`
  > .gatsby-image-wrapper {
    position: relative;
    z-index: -1;
    width: 100%;
    height: 75vh;

    > img,
    > picture {
      position: absolute;
      top: -25vh;
      z-index: -1;
      width: 100%;
      height: 100vh;
    }
  }
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    > .gatsby-image-wrapper {
      height: 40vh;

      > img,
      > picture {
        top: -10vh;
        height: 50vh;
      }
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = ({ fluid }) => {
  const backgroundPNG = useAnyImage(`background.png`);
  const backgroundJPG = useAnyImage(`background.jpg`);
  const background = fluid || backgroundPNG || backgroundJPG;
  return <StyledComponent background={background} />;
};

export default memo(Container);
