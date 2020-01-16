import React from 'react';

import styled from '@emotion/styled';

const Tags: React.FCX = ({ className }) => {
  return <main className={className}>tags</main>;
};

export const StyledTags = styled(Tags)`
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledTags;
