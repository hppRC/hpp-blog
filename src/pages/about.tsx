import React from 'react';
import { SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const About: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>About</h1>
  </main>
);

const StyledAbout = styled(About)`
  ${baseStyle};
`;

export default (props: any) => (
  <>
    <SEO title='About' pathname={props.path} />
    <StyledAbout />
  </>
);
