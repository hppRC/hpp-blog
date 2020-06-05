import { graphql, useStaticQuery } from 'gatsby';
import { Nodes, UseAllPosts } from 'src/types';

export default (): Nodes => {
  const { allMdx } = useStaticQuery<UseAllPosts>(graphql`
    query {
      allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
        nodes {
          body
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return allMdx.nodes;
};
