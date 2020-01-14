import React from 'react';
import { SEO, StartAnimation } from 'src/components';

import styled from '@emotion/styled';

const Index: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <StartAnimation />
      🌝
    </main>
  );
};

const StyledIndex = styled(Index)`
  flex: 1;
`;

export default (props: any) => (
  <>
    <SEO title='Top' pathname={props.path} />
    <StyledIndex />
  </>
);
