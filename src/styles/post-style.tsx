import { css } from '@emotion/core';

export const postStyle = css`
  h1,
  h2,
  h3 {
    padding: 2.5rem 0 1rem 0;
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

export default postStyle;
