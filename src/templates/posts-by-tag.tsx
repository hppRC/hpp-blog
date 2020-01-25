import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { EachArticle, ScatteredCharacters, SEO } from 'src/components';
import { useAnyImage } from 'src/hooks';
import { ColorModeContainer } from 'src/store';
import { Frontmatter, PostsByTagPageContext } from 'types/utils';

import styled from '@emotion/styled';

type ContainerProps = { pageContext: PostsByTagPageContext; path: string };
type Props = {
  posts: { frontmatter: Frontmatter; excerpt: string }[];
  tagName: string;
  mode: boolean;
  background?: FluidObject;
};

const Component: React.FCX<Props> = ({
  className,
  posts,
  tagName,
  mode,
  background
}) => (
  <main className={className}>
    <Img fluid={background} />
    <ScatteredCharacters text={tagName} />
    <section>
      {posts.map(({ frontmatter, excerpt }, i: number) => {
        const { title, date, tags, slug, cover } = frontmatter;
        const fluid = cover?.childImageSharp?.fluid;
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

const StyledComponent = styled(Component)`
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

const Container: React.FCX<ContainerProps> = props => {
  const { posts, tagName }: PostsByTagPageContext = props.pageContext;
  const { mode } = ColorModeContainer.useContainer();
  const background = useAnyImage('background.jpg');
  return (
    <>
      <SEO title={tagName} pathname={props.path} />
      <StyledComponent
        posts={posts}
        tagName={tagName}
        mode={mode}
        background={background}
      />
    </>
  );
};

export default Container;
