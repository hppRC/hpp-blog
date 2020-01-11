import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'katex/dist/katex.min.css';

import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { SEO, StyledSideContents, StyledTwitterShareButton } from 'src/components';
import Background from 'src/images/background.jpg';
import { ColorModeContainer } from 'src/store';
import { baseStyle } from 'src/styles';
import { Frontmatter, PostProps } from 'types/utils';

import styled from '@emotion/styled';

type Props = {
  title: string;
  body: string;
  date: string;
  tags: string[];
  headings: {
    value: string;
    depth: number;
  }[];
  fluid: FluidObject;
  mode: boolean;
  previous: { frontmatter: Frontmatter } | null;
  next: { frontmatter: Frontmatter } | null;
};

const Post: React.FCX<Props> = ({
  title,
  body,
  date,
  tags,
  headings,
  fluid,
  mode,
  previous,
  next,
  className
}) => {
  console.log(previous);
  console.log(next);
  return (
    <main className={className}>
      <article>
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
          <section style={{ color: mode ? '#09090f' : '#ffffff' }}>
            <Img fluid={fluid} alt='eyecatch image' />
            <MDXRenderer>{body}</MDXRenderer>
          </section>
          <StyledSideContents headings={headings} mode={mode} />
        </div>
        <StyledTwitterShareButton
          title={title}
          customClass='twitter_share_button'
        />
      </article>
      <div>
        <StyledPrevNext node={previous} mode={mode} />
        <StyledPrevNext node={next} isNext mode={mode} />
      </div>
    </main>
  );
};

const StyledPost = styled(Post)`
  article {
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

    > div:nth-of-type(1) {
      display: grid;
      grid-template-columns: 3fr 0.75fr;
      background-color: transparent;

      section {
        ${baseStyle};
        transition: color 0.3s;
      }
    }

    .twitter_share_button {
      position: fixed;
      bottom: 5rem;
      right: 5rem;
      outline: none;
      z-index: 1000;
    }
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
    article {
      > div {
        display: flex;
        section:nth-of-type(2) {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    article {
      > div:nth-of-type(1) {
        section {
          width: 100vw;
          h1 {
            padding: 3rem 0 1rem 0;
          }
          h2 {
            padding: 2.5rem 0 1rem 0;
          }
          h3 {
            padding: 1.5rem 0 1rem 0;
          }
        }
      }
      #twitter_share_button {
        bottom: 5rem;
        right: 1rem;
      }
    }
    > div {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const PrevNext: React.FCX<{
  node: { frontmatter: Frontmatter } | null;
  isNext?: boolean;
  mode: boolean;
}> = ({ node, isNext, className }) => {
  if (!node) return <section className={className}></section>;

  const { title, date, slug, tags, cover } = node.frontmatter;
  const { fluid } = cover.childImageSharp;
  return (
    <section className={`${className}`}>
      <Link to={`/posts/${slug}`}>
        <div className={`${isNext ? 'isNext' : 'isPrev'}`}>
          <Img fluid={fluid} />
          <div>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <ul>
              {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </section>
  );
};

const StyledPrevNext = styled(PrevNext)`
  width: 100%;
  padding: 5rem;
  border: 1px solid #09090f;
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    div {
      display: flex;
      width: 100%;
      height: 100%;

      div {
        color: ${({ mode }) => (mode ? '#09090f' : '#ffffff')};
        transition: color 0.3s;
      }
      img {
        width: 10rem;
      }
      &.isNext {
        flex-direction: row-reverse;
      }
      &.isPrev {
      }
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

export default ({ data, pageContext }: PostProps) => {
  const { body, excerpt, headings, frontmatter } = data.mdx;
  const { title, date, tags, cover } = frontmatter;
  const { fluid } = cover.childImageSharp;
  const { slug, previous, next } = pageContext;
  const { mode } = ColorModeContainer.useContainer();
  return (
    <>
      <SEO
        title={title}
        description={excerpt}
        pathname={`/posts/${slug}`}
        image={fluid.src}
      />
      <StyledPost
        title={title}
        body={body}
        date={date}
        tags={tags}
        headings={headings}
        fluid={fluid}
        previous={previous}
        next={next}
        mode={mode}
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
