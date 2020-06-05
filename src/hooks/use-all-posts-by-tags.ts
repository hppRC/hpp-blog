import { graphql, useStaticQuery } from 'gatsby';
import { PostsByTag, UseAllPosts } from 'src/types';

export default (): PostsByTag => {
  const { allMdx } = useStaticQuery<UseAllPosts>(graphql`
    query {
      allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
        nodes {
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
  const { nodes } = allMdx;
  const postsByTag: PostsByTag = {};

  nodes.forEach((node) => {
    // eslint-disable-next-line no-unused-expressions
    node.frontmatter.tags?.forEach((tag) => {
      if (!postsByTag[tag]) postsByTag[tag] = [];

      postsByTag[tag].push(node);
    });
  });

  return postsByTag;
};
