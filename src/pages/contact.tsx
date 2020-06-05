import React from 'react';
import { NetlifyForm, SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

type ContainerProps = { path: string };

const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Contact</h1>
    <NetlifyForm />
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

const Container: React.FCX<ContainerProps> = ({ path }) => (
  <>
    <SEO title='Contact' pathname={path} />
    <StyledComponent />
  </>
);

export default Container;
