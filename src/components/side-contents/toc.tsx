import { Link } from 'gatsby';
import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Location } from '@reach/router';

import { Theme } from '../../../types';
import { useTheme } from '../../theme';

const GithubSlugger = require(`github-slugger`);

const slugger = new GithubSlugger();

type ContainerProps = {
  headings: {
    value: string;
    depth: number;
  }[];
};

type Props = { theme: Theme } & ContainerProps;

const Component: React.FCX<Props> = memo(({ className, headings }) => (
  <Location>
    {({ location }) => (
      <ul className={className}>
        {headings.map(({ value, depth }, i) => (
          <li key={i} style={{ paddingLeft: `${depth * 1.1}rem` }}>
            <Link to={`${location.pathname}#${slugger.slug(value)}`}>{value}</Link>
          </li>
        ))}
      </ul>
    )}
  </Location>
));

const StyledComponent = styled(Component)`
  list-style: none;

  > li {
    border-radius: 3px;
    transition: background-color 0.15s;
    :hover {
      background-color: ${({ theme }) => theme.tocBackground};
    }

    > a {
      display: block;
      padding: 0.5rem;
      color: ${({ theme }) => theme.color};
      text-decoration: none;
      opacity: 0.6;
      transition: opacity 0.15s;
      :hover {
        opacity: 0.8;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = ({ headings }) => {
  const theme = useTheme();
  slugger.reset();
  return <StyledComponent headings={headings} theme={theme} />;
};

// when you memolize this, you'll get an error to jump headdings(you can jump only once)
export default Container;
