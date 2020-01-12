import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'katex/dist/katex.min.css';

import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { SEO, StyledSideContents, StyledTwitterShareButton } from 'src/components';
import Background from 'src/images/background.jpg';
import { ColorModeContainer } from 'src/store';
import { baseStyle, postStyle } from 'src/styles';
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
  previous: { frontmatter: Frontmatter; excerpt: string } | null;
  next: { frontmatter: Frontmatter; excerpt: string } | null;
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
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 3fr 0.75fr;
      background-color: transparent;

      section {
        ${baseStyle};
        ${postStyle};
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
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
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
  node: { frontmatter: Frontmatter; excerpt: string } | null;
  isNext?: boolean;
  mode: boolean;
}> = ({ node, isNext, className }) => {
  if (!node) return <section className={className}></section>;

  const { frontmatter, excerpt } = node;
  const { title, date, slug, cover } = frontmatter;
  const { fluid } = cover.childImageSharp;

  const [enter, setEnter] = useState(false);

  const props = useSpring({
    config: config.wobbly,
    transform: enter ? 'translate3d(0, -1rem, 0)' : 'translate3d(0, 0rem, 0)'
  });

  return (
    <section className={className}>
      <Link to={`/posts/${slug}`}>
        <animated.div
          className={`${isNext ? 'isNext' : 'isPrev'}`}
          style={props}
          onMouseEnter={(e: any) => {
            setEnter(true);
          }}
          onMouseLeave={(e: any) => {
            setEnter(false);
          }}
        >
          <Img fluid={fluid} />
          <div>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{excerpt}</p>
          </div>
        </animated.div>
      </Link>
    </section>
  );
};

const StyledPrevNext = styled(PrevNext)`
  width: 100%;
  padding: 5rem;
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;

    > div {
      display: flex;

      width: 100%;
      height: 100%;
      padding: 2rem;
      box-shadow: 0px 3px 10px 0px #09090f30;
      transition: background-color 0.3s;
      background-color: ${({ mode }) => (mode ? 'transparent' : '#13131f')};
      border-radius: 3px;

      .gatsby-image-wrapper {
        width: 100%;
      }

      div {
        width: 100%;
        height: 100%;
        padding: 2rem;
        color: ${({ mode }) => (mode ? '#09090f' : '#ffffff')};
        transition: color 0.3s;

        ul {
          list-style: none;
        }
        p {
          padding: 1rem 0;
          color: ${({ mode }) => (mode ? '#09090f' : '#ffffff')};
          transition: color 0.3s;
        }
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
  console.log(next);
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
