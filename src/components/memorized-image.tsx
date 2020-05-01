import Img, { FluidObject } from 'gatsby-image';
import React, { memo } from 'react';

import styled from '@emotion/styled';

type ContainerProps = { fluid: FluidObject | undefined };
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = memo(({ fluid, className }) => (
  <>{fluid && <Img fluid={fluid} alt='eyecatch image' className={className} />}</>
));

const StyledComponent = styled(Component)``;

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export default memo(Container);
