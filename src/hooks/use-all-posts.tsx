import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

type Props = {
  allMdx: {
    nodes: {
      id: string;
      body: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
        slug: string;
        tags: string[];
        cover: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
      };
    }[];
  };
};

export const useAllPosts = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
        nodes {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `);
  return data.allMdx.nodes;
};

export default useAllPosts;
