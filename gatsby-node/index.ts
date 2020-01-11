import { GatsbyNode } from 'gatsby';
import path from 'path';

const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

type Result = {
  allMdx: {
    edges: {
      previous: {
        frontmatter: {
          slug: string;
        };
      } | null;
      next: {
        frontmatter: {
          slug: string;
        };
      } | null;
      node: {
        frontmatter: {
          slug: string;
        };
      };
    }[];
  };
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage }
}) => {
  const postTemplate = path.resolve('src/templates/post.tsx');

  const result = await graphql<Result>(`
    query {
      allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          previous {
            frontmatter {
              slug
            }
          }
          next {
            frontmatter {
              slug
            }
          }
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const edges = result?.data?.allMdx.edges;

  edges?.forEach(({ previous, next, node }) => {
    createPage({
      path: `posts/${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        previous: previous?.frontmatter.slug,
        next: next?.frontmatter.slug,
        slug: node.frontmatter.slug
      }
    });
  });
};

export const onCreateNode: GatsbyNode['createPages'] = ({
  node,
  actions: { createNodeField },
  getNode
}: any) => {
  fmImagesToRelative(node);
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
