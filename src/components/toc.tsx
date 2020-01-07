import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';
import { Location } from '@reach/router';

const GithubSlugger = require('github-slugger');
const slugger = new GithubSlugger();

type Props = {
  headings: {
    value: string;
    depth: number;
  }[];
};

const Toc: React.FCX<Props> = ({ headings, className }) => {
  slugger.reset();
  return (
    <Location>
      {({ location }) => (
        <section className={className}>
          <ul>
            {headings.map(({ value, depth }, i) => (
              <li key={i} style={{ paddingLeft: `${(depth - 2) * 12}px` }}>
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

export const StyledToc = styled(Toc)`
  padding: 1rem;

  ul {
    position: -webkit-sticky;
    position: sticky;
    top: 7.5vh;
  }

  ul {
    list-style: none;
    li {
      padding: 0.5rem 0.25rem;
      a {
        text-decoration: none;
        color: #09090f90;
        transition: color 0.15s;

        :hover {
          color: #09090f;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export default StyledToc;
