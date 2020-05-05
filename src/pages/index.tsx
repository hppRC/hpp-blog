import React from 'react';
import { ArticleCard, Background, ScatteredChars, SEO } from 'src/components';
import { useAllPosts } from 'src/hooks';
import { postsStyle } from 'src/styles';
import { AllPosts } from 'src/types';

import styled from '@emotion/styled';

type ContainerProps = { path: string };
type Props = { posts: AllPosts };

const Component: React.FCX<Props> = ({ className, posts }) => (
  <main className={className}>
    <Background />
    <section>
      <ScatteredChars chars='hpp blog' isTitle />
    </section>
    <ul>
      {posts.map(({ excerpt, frontmatter }) => {
        const fluid = frontmatter.cover?.childImageSharp.fluid;
        return (
          <li key={frontmatter.slug}>
            <ArticleCard frontmatter={frontmatter} fluid={fluid} excerpt={excerpt} />
          </li>
        );
      })}
    </ul>
  </main>
);

const StyledComponent = styled(Component)`
  ${postsStyle}
`;

const Container: React.FCX<ContainerProps> = ({ path }) => {
  const nodes = useAllPosts();
  return (
    <>
      <SEO title='Top' pathname={path} />
      <StyledComponent posts={nodes} />
    </>
  );
};

export default Container;
