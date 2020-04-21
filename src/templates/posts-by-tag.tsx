import React, { memo } from 'react';

import styled from '@emotion/styled';

import { Frontmatter, PostsByTagPageContext } from '../../types';
import { ArticleCard, Background, ScatteredChars, SEO } from '../components';
import { postsStyle } from '../styles';

type ContainerProps = { pageContext: PostsByTagPageContext; path: string };
type Props = {
  posts: { frontmatter: Frontmatter; excerpt: string }[];
  tagName: string;
};

const Component: React.FCX<Props> = memo(({ className, tagName, posts }) => (
  <main className={className}>
    <Background />
    <section>
      <ScatteredChars chars={tagName} />
    </section>
    <ul>
      {posts.map(({ excerpt, frontmatter }, i) => {
        const fluid = frontmatter.cover?.childImageSharp.fluid;
        return (
          <li key={i}>
            <ArticleCard frontmatter={frontmatter} fluid={fluid} excerpt={excerpt} />
          </li>
        );
      })}
    </ul>
  </main>
));

const StyledComponent = styled(Component)`
  ${postsStyle}
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = ({ pageContext, path }) => {
  const { posts, tagName }: PostsByTagPageContext = pageContext;

  return (
    <>
      <SEO title={tagName} pathname={path} />
      <StyledComponent tagName={tagName} posts={posts} />
    </>
  );
};

export default memo(Container);
