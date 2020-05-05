import React from 'react';
import { SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

type ContainerProps = { path: string };
type Props = {};

const Component: React.FCX<Props> = ({ className }) => (
  <main className={className}>
    <h1>Not Found</h1>
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

const Container: React.FCX<ContainerProps> = ({ path }) => (
  <>
    <SEO title='Not Found' pathname={path} />
    <StyledComponent />
  </>
);

export default Container;
