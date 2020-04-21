import React from 'react';

import styled from '@emotion/styled';
import { SEO } from '@hpprc/gatsby-theme-blog/src/components';

type ContainerProps = { path: string };
type Props = {};

const Component: React.FCX<Props> = ({ className }) => <div className={className}>about</div>;

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

const Container: React.FCX<ContainerProps> = ({ path }) => (
  <>
    <SEO title='about' pathname={path} />
    <StyledComponent />
  </>
);

export default Container;
