import { graphql, useStaticQuery } from 'gatsby';
import { Frontmatter, UseAllPosts } from 'types/utils';

export default () => {
  const data = useStaticQuery<UseAllPosts>(graphql`
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
  const { nodes } = data.allMdx;

  const postsByTag: {
    [key: string]: { frontmatter: Frontmatter; excerpt: string }[];
  } = {};

  nodes.forEach(node => {
    const { frontmatter } = node;
    frontmatter.tags.forEach(tag => {
      if (!postsByTag[tag]) {
        postsByTag[tag] = [];
      }
      postsByTag[tag].push(node);
    });
  });

  return postsByTag;
};
