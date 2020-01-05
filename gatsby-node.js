const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post.tsx');

  const result = await graphql(`
    query {
      allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    createPage({
      path: `posts/${post.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
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
