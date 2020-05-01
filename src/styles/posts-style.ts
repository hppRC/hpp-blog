import { css } from '@emotion/core';

export default css`
  position: relative;
  width: 100%;

  > section {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 75vh;

    > h1 {
      font-size: 10rem;
      color: #ffffff;
    }
  }

  > ul {
    display: grid;
    grid-template-columns: repeat(4, 24%);
    grid-row-gap: 3rem;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;
    padding: 4%;
    margin: 0 auto;
  }

  @media screen and (max-width: 1500px) {
    > ul {
      grid-template-columns: repeat(3, 32%);
      padding: 6%;
    }
  }
  @media screen and (max-width: 1100px) {
    > ul {
      grid-template-columns: 48%, 48%;
    }
  }
  @media screen and (max-width: 768px) {
    > ul {
      display: block;
      padding: 0 8%;
      > li {
        margin: 1.5rem 0;
      }
    }
  }
  @media screen and (max-width: 480px) {
    > section {
      height: 40vh;
    }
    > ul {
      padding: 0 2%;
    }
  }
  @media screen and (max-height: 430px) {
  }
`;
