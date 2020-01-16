import { graphql, useStaticQuery } from 'gatsby';
import { Frontmatter, UseAllPosts } from 'types/utils';

export const useAllPostsByTags = () => {
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

export default useAllPostsByTags;
