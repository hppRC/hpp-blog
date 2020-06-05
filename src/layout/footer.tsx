import React, { memo } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useSiteMetadata } from 'src/hooks';
import { useTheme } from 'src/theme';
import { Theme } from 'src/types';

import styled from '@emotion/styled';

type Props = { theme: Theme; author: string };

const Component: React.FCX<Props> = memo(({ className, author }) => (
  <footer className={className}>
    <div>
      Copyright©2020.
      <a href={`https://twitter.com/${author.slice(1)}`}>{author}</a>
    </div>
    <div>
      <a href='https://github.com/hppRC' target='_blank' rel='noopener noreferrer' aria-label='Github Link'>
        <i>
          <FaGithub />
        </i>
      </a>
      <a
        href='https://github.com/hppRC/gatsby-projects/tree/master/themes/gatsby-theme-blog'
        target='_blank'
        rel='noopener noreferrer'
      >
        Theme
      </a>
      by
      {` `}
      <a href='https://hpprc.com' target='_blank' rel='noopener noreferrer'>
        hpp
        <span role='img' aria-label='eyecatch'>
          🌝
        </span>
      </a>
    </div>
  </footer>
));

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  > div {
    margin: 0.2rem 0;
    font-weight: 500;
    color: ${({ theme }) => theme.color};
    transition: color 0.3s;
    > a {
      margin-right: 0.5rem;
      color: ${({ theme }) => theme.color};
      text-decoration: none;
      transition: color 0.3s, opacity 0.3s;

      :hover {
        opacity: 0.6;
      }

      > span {
        margin-left: 0.3rem;
      }
    }
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX = () => {
  const { author } = useSiteMetadata();
  const theme = useTheme();

  return <StyledComponent theme={theme} author={author || `hppRC`} />;
};

export default memo(Container);
