import { graphql, useStaticQuery } from 'gatsby';
import { UseAllTags } from 'src/types';

export default (): string[] => {
  const { allMdx } = useStaticQuery<UseAllTags>(graphql`
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

  const { nodes } = allMdx;
  const tags = new Set<string>();

  nodes.forEach(({ frontmatter }) => {
    frontmatter.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags.values());
};
