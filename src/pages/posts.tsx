import React, { memo } from 'react';
import { ArticleCard, Background, ScatteredChars, SEO } from 'src/components';
import { useAllPosts } from 'src/hooks';
import { postsStyle } from 'src/styles';
import { AllPosts } from 'src/types';

import styled from '@emotion/styled';

type ContainerProps = { path: string };
type Props = { allPosts: AllPosts };

const Component: React.FCX<Props> = memo(({ className, allPosts }) => (
  <main className={className}>
    <Background />
    <section>
      <ScatteredChars chars='posts' />
    </section>
    <ul>
      {allPosts.map(({ excerpt, frontmatter }) => {
        const fluid = frontmatter.cover?.childImageSharp.fluid;
        return (
          <li key={frontmatter.slug}>
            <ArticleCard frontmatter={frontmatter} fluid={fluid} excerpt={excerpt} />
          </li>
        );
      })}
    </ul>
  </main>
));

const StyledComponent = styled(Component)`
  ${postsStyle}
`;

const Container: React.FCX<ContainerProps> = ({ path }) => {
  const nodes: AllPosts = useAllPosts();

  return (
    <>
      <SEO title='Posts' pathname={path} />
      <StyledComponent allPosts={nodes} />
    </>
  );
};

export default memo(Container);
