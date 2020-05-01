import React, { memo } from 'react';
import { ArticleCard, Background, ScatteredChars, SEO } from 'src/components';
import { postsStyle } from 'src/styles';
import { Frontmatter, PostsByTagPageContext } from 'src/types';

import styled from '@emotion/styled';

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
      {posts.map(({ excerpt, frontmatter }) => {
        const { slug } = frontmatter;
        const fluid = frontmatter.cover?.childImageSharp.fluid;
        return (
          <li key={slug}>
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
