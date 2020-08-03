import React, { memo } from 'react';

import styled from '@emotion/styled';

import Footer from './footer';
import Header from './header';

type ContainerProps = { children: React.FCX };
type Props = ContainerProps;

const Component: React.FCX<Props> = memo(({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
));

const StyledComponent = styled(Component)``;

const Container: React.FC<ContainerProps> = ({ children }) => <StyledComponent>{children}</StyledComponent>;

export default memo(Container);
