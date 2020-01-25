import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { EachArticle, ScatteredCharacters, SEO } from 'src/components';
import { useAllPosts, useAnyImage } from 'src/hooks';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

const Posts: React.FCX<{ mode: boolean; background?: FluidObject }> = ({
  mode,
  background,
  className
}) => (
  <main className={className}>
    <Img fluid={background} />
    <ScatteredCharacters text={'Posts'} />
    <section>
      {useAllPosts().map(({ excerpt, frontmatter }, i) => {
        const { title, date, tags, slug, cover } = frontmatter;
        const fluid = cover?.childImageSharp.fluid;
        return (
          <EachArticle
            key={i}
            title={title}
            date={date}
            tags={tags}
            slug={slug}
            fluid={fluid}
            excerpt={excerpt}
            mode={mode}
          />
        );
      })}
    </section>
  </main>
);

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
    padding: 5rem;
  }
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    section:nth-of-type(2) {
      grid-template-columns: 1fr;
      grid-gap: 4rem;
      padding: 3rem 1rem;
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

export default (props: any) => {
  const { mode } = ColorModeContainer.useContainer();
  const background = useAnyImage('background.jpg');
  return (
    <>
      <SEO title='Posts' pathname={props.path} />
      <StyledPosts mode={mode} background={background} />
    </>
  );
};
