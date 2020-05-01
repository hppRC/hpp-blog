import React, { memo } from 'react';

import styled from '@emotion/styled';

import ShareButtons from './share-buttons';
import TOC from './toc';

type ContainerProps = {
  headings: {
    value: string;
    depth: number;
  }[];
  title: string;
  slug: string;
};
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = memo(({ className, headings, title, slug }) => (
  <div className={className}>
    <div>
      <TOC headings={headings} />
      <ShareButtons title={title} slug={slug} />
    </div>
  </div>
));

const StyledComponent = styled(Component)`
  width: 100%;
  > div {
    position: sticky;
    top: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = ({ headings, title, slug }) => (
  <StyledComponent headings={headings} title={title} slug={slug} />
);

export default memo(Container);
