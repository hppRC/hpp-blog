import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';
import { Location } from '@reach/router';

const GithubSlugger = require('github-slugger');
const slugger = new GithubSlugger();

type ContainerProps = {
  headings: {
    value: string;
    depth: number;
  }[];
  mode: boolean;
};
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = ({ headings, className }) => {
  slugger.reset();

  return (
    <Location>
      {({ location }) => (
        <section className={className}>
          <ul>
            {headings.map(({ value, depth }, i) => (
              <li key={i} style={{ paddingLeft: `${depth * 1.1}rem` }}>
                <Link to={`${location.pathname}#${slugger.slug(value)}`}>
                  {value}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Location>
  );
};

const StyledComponent = styled(Component)`
  padding: 1rem 0 1rem 3rem;

  ul {
    position: -webkit-sticky;
    position: sticky;
    top: 7.5vh;
    list-style: none;

    li {
      padding: 0.5rem;
      transition: background-color 0.15s;
      border-radius: 3px;
      :hover {
        background-color: ${({ mode }) => (mode ? '#09090f10' : '#ffffff10')};
      }

      a {
        text-decoration: none;
        color: ${({ mode }) => (mode ? '#09090f90' : '#ffffff90')};
        transition: color 0.15s;
        :hover {
          color: ${({ mode }) => (mode ? '#09090fc0' : '#ffffffc0')};
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

const Container: React.FCX<ContainerProps> = props => {
  return <StyledComponent {...props} />;
};

export default Container;
