import React from 'react';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

type ContainerProps = { element: React.ReactNode };
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = ({ element }) => (
  <ColorModeContainer.Provider>{element}</ColorModeContainer.Provider>
);

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

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export default Container;