import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  allMdx: {
    nodes: {
      frontmatter: {
        tags: string[];
      };
    }[];
  };
};

export const useAllTags = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  const tags = new Set<string>();

  posts.forEach(({ frontmatter }) => {
    frontmatter.tags.forEach((tag: string) => {
      tags.add(tag);
    });
  });

  return Array.from(tags.values());
};

export default useAllTags;
