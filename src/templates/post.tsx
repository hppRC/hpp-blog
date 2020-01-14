import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'katex/dist/katex.min.css';

import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { SEO, SideContents, TwitterShareButton } from 'src/components';
import { usePostBackground } from 'src/hooks';
import { ColorModeContainer } from 'src/store';
import { baseStyle, postStyle } from 'src/styles';
import { Frontmatter, PostDefaultProps, PostProps } from 'types/utils';

import styled from '@emotion/styled';

const Post: React.FCX<PostProps> = ({
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
  const background = usePostBackground();
  return (
    <main className={className}>
      <article>
        <section>
          <Img fluid={background} />
          <div>
            <h1>{title}</h1>
            <div>
              <p>{date}</p>
              <ul>
                {tags.map((tag, i) => (
                  <li key={i}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div>
          <section style={{ color: mode ? '#09090f' : '#ffffff' }}>
            <Img fluid={fluid} alt='eyecatch image' />
            <MDXRenderer>{body}</MDXRenderer>
          </section>
          <SideContents headings={headings} mode={mode} />
        </div>
        <TwitterShareButton title={title} customClass='twitter_share_button' />
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
      color: #fff;
      width: 100vw;
      height: 75vh;

      > .gatsby-image-wrapper {
        width: 100%;
        img,
        picture {
          position: absolute;
          top: -25vh;
          width: 100%;
          height: 150vh;
        }
      }

      /* staf roll */
      /* <a href="https://jp.freepik.com/free-photos-vectors/background">Freepik - jp.freepik.com によって作成された background ベクトル</a> */

      > div {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        z-index: 1;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        h1 {
          z-index: 0;
          font-size: 7.5rem;
        }

        div {
          display: flex;
          padding: 1rem 0;
          p {
            padding: 0.3rem 1.5rem;
          }

          ul {
            list-style: none;
            display: flex;
            li {
              padding: 0 0.5rem;
              a {
                display: block;
                width: 100%;
                height: 100%;
                padding: 0.3rem 1rem;

                color: #ffffff;
                border: 1px solid #ffffff;
                border-radius: 3px;
                text-decoration: none;
                transition: color, background-color 0.15s;

                :hover {
                  color: #09090f;
                  background-color: #ffffff;
                }
              }
            }
          }
        }
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
    transform: enter ? 'scale(1.05)' : 'scale(1.0)'
  });

  const decoProps = useSpring({
    config: config.wobbly,
    transform: enter
      ? 'translate3d(-10rem,-2rem,0)'
      : 'translate3d(2rem,-10rem,0)'
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
          <animated.div className='deco' style={decoProps}>
            🌝
          </animated.div>
        </animated.div>
      </Link>
    </section>
  );
};

const StyledPrevNext = styled(PrevNext)`
  position: relative;
  width: 100%;
  padding: 5rem;

  a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;

    > div {
      display: flex;
      overflow: hidden;

      width: 100%;
      height: 100%;
      padding: 2rem 0.5rem;
      box-shadow: 0px 3px 10px 0px #09090f30;
      transition: background-color 0.3s;
      background-color: ${({ mode }) => (mode ? 'transparent' : '#13131f')};
      border-radius: 3px;

      > .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        img,
        picture {
          border-radius: 3px;
        }
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
        will-change: transform;
      }

      &.isNext {
        flex-direction: row-reverse;
      }
      &.isPrev {
        flex-direction: row;
      }

      .deco {
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        font-size: 10rem;
        will-change: transform;
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

export default ({ data, pageContext }: PostDefaultProps) => {
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
