import { Link } from 'gatsby';
import React from 'react';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

import { StyledModeButton as ModeButton } from './mode-button';

const Header: React.FCX = ({ className }) => {
  const { mode } = ColorModeContainer.useContainer();
  return (
    <header className={className}>
      <h1>hpp blog🌝</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Top</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
          <li>
            <ModeButton mode={mode} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  width: 100%;

  nav {
    padding: 2rem;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      li {
        a {
          padding: 2rem;
        }
      }
    }
  }
  z-index: 1000;
`;

export default StyledHeader;
