import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { SEO } from 'src/components';
import { ColorModeContainer } from 'src/store';
import { Frontmatter } from 'types/utils';

import styled from '@emotion/styled';

const PostsByTag: React.FCX<any> = ({ className, posts, tagName }) => {
  console.log(posts);
  console.log(tagName);
  return (
    <main className={className}>
      <h1>{tagName}</h1>
      {posts.map(({ frontmatter }: { frontmatter: Frontmatter }, i: number) => {
        const { title, date, tags, slug, cover } = frontmatter;
        const { fluid } = cover.childImageSharp;
        return (
          <article key={i}>
            <Link to={`/posts/${slug}`}>
              <Img fluid={fluid} />
              <h2>{title}</h2>
              <h3>{date}</h3>
              <ul>
                {tags.map((tag, j) => (
                  <li key={j}>{tag}</li>
                ))}
              </ul>
            </Link>
          </article>
        );
      })}
    </main>
  );
};

export const StyledPostsByTag = styled(PostsByTag)`
  article {
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default ({ pageContext }: any) => {
  const { posts, tagName } = pageContext;
  const { mode } = ColorModeContainer.useContainer();
  return (
    <>
      <SEO title={tagName} pathname={`/tags/${tagName}`} />
      <StyledPostsByTag posts={posts} tagName={tagName} mode={mode} />
    </>
  );
};
