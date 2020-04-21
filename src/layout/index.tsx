import React, { memo } from 'react';

import styled from '@emotion/styled';

type ContainerProps = { children: React.FCX };
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = memo(({ children }) => <>{children}</>);

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

const Container: React.FC<ContainerProps> = ({ children }) => <StyledComponent>{children}</StyledComponent>;

export default memo(Container);
