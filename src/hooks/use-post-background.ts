import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

type Props = {
  file: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

/**
 * use site's default banner's fluid object
 */
export const usePostBackground = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return data.file.childImageSharp.fluid;
};

export default usePostBackground;
