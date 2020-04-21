import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { memo } from 'react';

import styled from '@emotion/styled';

import { PostData, PostNode, PostPageContext } from '../../types';
import { Background, PostBody, PostHeader, PrevNextCard, SEO, SideContents } from '../components';

type ContainerProps = { path: string; data: PostData; pageContext: PostPageContext };
type Props = {
  body: string;
  headings: { value: string; depth: number }[];
  title?: string;
  date?: string;
  tags?: string[];
  fluid?: FluidObject;
  previous: PostNode;
  next: PostNode;
  slug: string;
};

const Component: React.FCX<Props> = memo(
  ({ className, body, headings, title, date, tags, fluid, previous, next, slug }) => (
    <main className={className}>
      <Background />
      <PostHeader title={title} date={date} tags={tags} />
      <article>
        <PostBody cover={fluid} body={body} />
        <SideContents headings={headings} title={title || 'blog'} slug={slug} />
      </article>
      <PrevNextCard prev={previous} next={next} />
    </main>
  )
);

const StyledComponent = styled(Component)`
  position: relative;
  padding-bottom: 10rem;

  > article {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto 10rem auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem;
    background-color: transparent;
    justify-content: center;
    padding: 5rem 2rem;
  }

  @media screen and (max-width: 1100px) {
    width: 100vw;
    > article {
      display: flex;
      flex-direction: column;
      padding: 0 rem;
      margin: 0;
      width: 100%;
      grid-gap: 0;
    }
  }
  @media screen and (max-width: 768px) {
    > article {
      margin: 0;
      padding: 2rem 2rem 10rem 2rem;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    > article {
      margin: 0;
      padding: 2rem 0rem 10rem 0rem;
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = ({ data, pageContext, path }) => {
  if (!data.mdx) return <></>;

  const { body, headings, frontmatter } = data.mdx;
  const { title, date, tags, cover } = frontmatter;
  const fluid = cover?.childImageSharp?.fluid;
  const { previous, next, slug } = pageContext;

  return (
    <>
      <SEO title='Posts' pathname={path} image={fluid?.src} />
      <StyledComponent {...{ body, headings, title, date, tags, fluid, previous, next, slug }} />
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default memo(Container);
