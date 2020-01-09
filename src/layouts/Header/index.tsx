import { Link } from 'gatsby';
import React from 'react';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

import { StyledModeButton } from './mode-button';

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
            <StyledModeButton mode={mode} />
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
  width: 100vw;
  padding: 0 0.5rem;

  h1 {
    color: #ffffff;
  }

  nav {
    padding: 1.5rem;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      li {
        a {
          color: #ffffff;
          text-decoration: none;
          padding: 2rem;
        }
      }
    }
  }
  z-index: 1000;
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
    nav {
      padding: 1rem 0.5rem;
    }
  }
  @media screen and (max-width: 480px) {
    nav {
      padding: 0.5rem 0;
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledHeader;
