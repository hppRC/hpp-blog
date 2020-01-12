import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { SEO } from 'src/components';
import { useAllPosts, usePostBackground } from 'src/hooks';

import styled from '@emotion/styled';

const Posts: React.FCX = ({ className }) => {
  const background = usePostBackground();
  return (
    <main className={className}>
      <Img fluid={background} />
      <section>
        <h1>Posts</h1>
      </section>
      <section>
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
      </section>
    </main>
  );
};

const StyledPosts = styled(Posts)`
  position: relative;

  > .gatsby-image-wrapper {
    width: 100vw;
    height: 75vh;
    img,
    picture {
      position: absolute;
      top: -25vh;
      width: 100%;
      height: 100vh;
      /* transform: rotate(90deg); */
    }
  }
  section:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: #ffffff;
      font-size: 10rem;
    }
  }

  section:nth-of-type(2) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    padding: 5rem 5vw;
  }
`;

export default (props: any) => (
  <>
    <SEO title='Posts' pathname={props.path} />
    <StyledPosts />
  </>
);
