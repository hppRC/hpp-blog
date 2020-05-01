import React from 'react';
import { NetlifyForm, SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

type ContainerProps = { path: string };
type Props = {};

const Component: React.FCX<Props> = ({ className }) => (
  <main className={className}>
    <h1>Contact</h1>
    <NetlifyForm />
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle}
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
    <SEO title='Contact' pathname={path} />
    <StyledComponent />
  </>
);

export default Container;
