import { Link } from 'gatsby';
import React, { memo } from 'react';
import { useTheme } from 'src/theme';
import { Theme } from 'src/types';

import styled from '@emotion/styled';

type ContainerProps = { tags: string[] | undefined; isTitle?: boolean };
type Props = { theme: Theme } & ContainerProps;

const Component: React.FCX<Props> = memo(({ className, tags, isTitle }) => (
  <ul className={className}>
    {tags?.map((tag, i) =>
      isTitle ? (
        <li key={i}>
          <Link to={`/tags/${tag}`}>{tag}</Link>
        </li>
      ) : (
        <li key={i}>{tag}</li>
      )
    )}
  </ul>
));

const StyledComponent = styled(Component)`
  display: flex;
  padding: 0.8rem 0;
  overflow: auto;
  list-style: none;
  ${({ isTitle }) => isTitle && `flex-wrap: wrap;`}
  ${({ isTitle }) => isTitle && `justify-content: center;`}

  &::-webkit-scrollbar {
    display: none;
  }

  > li {
    padding: ${({ isTitle }) => (isTitle ? `0 0` : `0.2rem 0.4rem`)};
    margin: 0 0.3rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color};
    word-break: keep-all;
    border: 0.5px solid ${({ theme, isTitle }) => (isTitle ? `#ffffff` : theme.color)};
    border-radius: 3px;
    font-weight: 500;
    transition: color 0.3s, border 0.3s;

    > a {
      display: block;
      color: #ffffff;
      border-radius: 2px;
      padding: 0.4rem 0.6rem;
      transition: color, background-color 0.15s;
      font-weight: ${({ isTitle }) => (isTitle ? `700` : `500`)};

      :hover {
        color: #09090f;
        background-color: #ffffff;
      }
    }
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    padding: 0.4rem 0;
    > li {
      font-size: 1rem;
      > a {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = ({ tags, isTitle }) => {
  const theme = useTheme();
  return <StyledComponent {...{ tags, isTitle, theme }} />;
};

export default memo(Container);
