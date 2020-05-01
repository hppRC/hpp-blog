import { css } from '@emotion/core';

export default css`
  h1,
  h2,
  h3 {
    padding: 2.5rem 0 1rem 0;
  }

  > h1,
  > h2,
  > h3 {
    ::after {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      width: calc(100% + min((100vw - 1200px) / 2, 1vw));
      height: var(--borderWidth);
      content: '';
      background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
      background-size: 300% 300%;
      border-radius: calc(2 * var(--borderWidth));
      animation: animatedgradient 10s ease alternate infinite;
    }
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    h1,
    h2,
    h3 {
      padding: 2rem 0 1rem 0;
    }
  }
  @media screen and (max-height: 430px) {
  }
`;
