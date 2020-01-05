import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { SEO } from 'src/components';
import { useAllPosts } from 'src/hooks';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Posts: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Posts</h1>
    {useAllPosts().map(({ excerpt, frontmatter }, i) => {
      const { title, date, tags, slug, cover } = frontmatter;
      const { fluid } = cover.childImageSharp;
      return (
        <article key={i}>
          <Img fluid={fluid} alt='eyecatch' backgroundColor={'#fff'} />
          <Link to={`/posts/${slug}`}>
            <h2>{title}</h2>
          </Link>
          <p>{date}</p>
          <p>{excerpt}</p>
          <ul>
            {tags.map((tag, j) => (
              <li key={j}>{tag}</li>
            ))}
          </ul>
        </article>
      );
    })}
  </main>
);

const StyledPosts = styled(Posts)`
  ${baseStyle};
`;

export default (props: any) => (
  <>
    <SEO title='Posts' pathname={props.path} />
    <StyledPosts />
  </>
);
