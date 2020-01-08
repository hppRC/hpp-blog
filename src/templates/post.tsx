import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'katex/dist/katex.min.css';

import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { SEO, StyledSideContents } from 'src/components';
import Background from 'src/images/background.jpg';
import { baseStyle } from 'src/styles';

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
}> = ({ title, body, date, tags, headings, fluid, className }) => (
  <article className={className}>
    <section>
      <h1>{title}</h1>
      <div>
        <h2>{date}</h2>
        <ul>
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
    <div>
      <section>
        <Img fluid={fluid} alt='eyecatch image' />
        <MDXRenderer>{body}</MDXRenderer>
      </section>
      <StyledSideContents headings={headings} />
    </div>
  </article>
);

const StyledPost = styled(Post)`
  > section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 75vh;
    background: center / cover no-repeat url(${Background});
    background-attachment: fixed;
    /* staf roll */
    /* <a href="https://jp.freepik.com/free-photos-vectors/background">Freepik - jp.freepik.com によって作成された background ベクトル</a> */

    color: #fff;

    h1 {
      z-index: 1;
      font-size: 5rem;
    }

    div {
      display: flex;
      z-index: 1;

      ul {
        list-style: none;
        display: flex;
      }
    }

    ::after {
      content: '';
      /* 背景画像に被せる色の指定 */
      background-color: #09090f00;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  > div {
    ${baseStyle};
    display: grid;
    grid-template-columns: 3fr 0.75fr;
    background-color: #ffffff;
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
    > div {
      display: flex;
      section:nth-of-type(2) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default ({ data, pageContext }: Props) => {
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
