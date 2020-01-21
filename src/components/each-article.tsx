import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { EachArticleProps } from 'types/utils';

import styled from '@emotion/styled';

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
        {fluid && <Img fluid={fluid} alt='eyecatch' backgroundColor='#fff' />}
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

export const StyledEachArticle = styled(EachArticle)`
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
    color: ${({ mode }) => (mode ? '#09090fe0' : '#ffffffe0')};
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
          font-size: 1.4rem;
          margin-right: 0.5rem;
          transition: color, border 0.3s;
          border-radius: 3px;
          word-break: keep-all;
          padding: 0.2rem 0.4rem;
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

export default StyledEachArticle;
