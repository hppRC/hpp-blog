import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'katex/dist/katex.min.css';

import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { SEO, StyledToc } from 'src/components';

import styled from '@emotion/styled';

type Props = {
  data: {
    mdx: {
      body: string;
      excerpt: string;
      headings: {
        value: string;
        depth: number;
      }[];
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
  headings: {
    value: string;
    depth: number;
  }[];
  fluid: FluidObject;
}> = ({ title, body, date, tags, headings, fluid }) => (
  <article>
    <section>
      <h1>{title}</h1>
      <Img fluid={fluid} alt='eyecatch image' />
      <h2>{date}</h2>
      {tags.map((tag, i) => (
        <li key={i}>{tag}</li>
      ))}
      <MDXRenderer>{body}</MDXRenderer>
    </section>
    <StyledToc headings={headings} />
  </article>
);

const StyledPost = styled(Post)``;

export default ({ data, pageContext }: Props) => {
  console.log(data);
  const { body, excerpt, headings, frontmatter } = data.mdx;
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
        headings={headings}
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
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
