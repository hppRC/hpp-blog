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
            {headings.map(({ value, depth }, i: number) => (
              <li key={i} style={{ marginLeft: `${(depth - 2) * 12}px` }}>
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
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export default StyledToc;
