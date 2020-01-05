import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { SEO } from 'src/components';

import styled from '@emotion/styled';

type Props = {
  data: {
    mdx: {
      body: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
        cover: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
      };
    };
  };
  pageContext: {
    slug: string;
  };
};

const Post: React.FCX<{
  title: string;
  body: string;
  date: string;
  tags: string[];
  fluid: FluidObject;
}> = ({ title, body, date, tags, fluid }) => (
  <article>
    <h1>{title}</h1>
    <Img fluid={fluid} alt='eyecatch image' backgroundColor={'#fff'} />
    <h2>{date}</h2>
    {tags.map((tag, i) => (
      <li key={i}>{tag}</li>
    ))}
    <MDXRenderer>{body}</MDXRenderer>
  </article>
);

const StyledPost = styled(Post)``;

export default ({ data, pageContext }: Props) => {
  const { body, excerpt, frontmatter } = data.mdx;
  const { title, date, tags, cover } = frontmatter;
  const { fluid } = cover.childImageSharp;
  return (
    <>
      <SEO
        title={title}
        description={excerpt}
        pathname={`/posts/${pageContext.slug}`}
        image={fluid.src}
      />
      <StyledPost
        title={title}
        body={body}
        date={date}
        tags={tags}
        fluid={fluid}
      />
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
