import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { SEO } from 'src/components';
import { useAllPosts, usePostBackground } from 'src/hooks';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

const Posts: React.FCX<{ mode: boolean }> = ({ mode, className }) => {
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
            <StyledEachArticle
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

type EachArticleProps = {
  key: number;
  slug: string;
  fluid: FluidObject;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  mode: boolean;
};

const EachArticle: React.FCX<EachArticleProps> = ({
  key,
  slug,
  fluid,
  title,
  date,
  tags,
  excerpt,
  className,
  mode
}) => {
  const [enter, setEnter] = useState(false);

  const props = useSpring({
    config: config.wobbly,
    transform: enter ? 'scale(1.05)' : 'scale(1.0)'
  });

  const decoProps = useSpring({
    config: config.wobbly,
    transform: enter
      ? 'translate3d(-10rem,0rem,0)'
      : 'translate3d(2rem,-10rem,0)'
  });

  return (
    <animated.article
      key={key}
      className={className}
      onMouseEnter={(e: any) => {
        setEnter(true);
      }}
      onMouseLeave={(e: any) => {
        setEnter(false);
      }}
      style={props}
    >
      <Link to={`/posts/${slug}`}>
        <Img fluid={fluid} alt='eyecatch' backgroundColor='#fff' />
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
          <ul>
            {tags.map((tag, j) => (
              <li key={j}>{tag}</li>
            ))}
          </ul>
          <p>{excerpt}</p>
        </div>
      </Link>
      <animated.div style={decoProps} className='deco'>
        🌝
      </animated.div>
    </animated.article>
  );
};

const StyledEachArticle = styled(EachArticle)`
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;
  box-shadow: 0px 3px 10px 0px #09090f30;
  background-color: ${({ mode }) => (mode ? 'transparent' : '#13131f')};
  > a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 1rem;
    transition: color 0.3s;
    color: ${({ mode }) => (mode ? '#09090ff0' : '#fffffff0')};
    text-decoration: none;

    img,
    picture {
      border-radius: 3px;
    }

    div {
      padding: 1rem;
      ul {
        display: flex;
        list-style: none;
        padding: 1rem 0;
        overflow: auto;

        li {
          margin-right: 0.5rem;
          transition: color, border 0.3s;
          border-radius: 3px;
          word-break: keep-all;
          padding: 0.1rem 0.3rem;
          border: 0.5px solid
            ${({ mode }) => (mode ? '#09090ff0' : '#fffffff0')};
          color: ${({ mode }) => (mode ? '#09090ff0' : '#fffffff0')};
        }
      }

      p {
        padding: 0.5rem 0;
      }
    }
  }

  .deco {
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    font-size: 8rem;
    will-change: transform;
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

export default (props: any) => {
  const { mode } = ColorModeContainer.useContainer();
  return (
    <>
      <SEO title='Posts' pathname={props.path} />
      <StyledPosts mode={mode} />
    </>
  );
};
