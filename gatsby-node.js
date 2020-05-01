const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);

// you can't use QraphQL query fragments to get fluid object in gatsby-node.
const query = `
query {
  allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
    edges {
      previous {
        excerpt
        frontmatter {
          slug
          title
          date(formatString: "YYYY-MM-DD")
          tags
          cover {
            childImageSharp {
              fluid(maxWidth: 1400, quality: 90) {
                tracedSVG
                base64
                sizes
                srcSet
                src
                srcSetWebp
                srcWebp
                aspectRatio
              }
            }
          }
        }
      }
      next {
        excerpt
        frontmatter {
          slug
          title
          date(formatString: "YYYY-MM-DD")
          tags
          cover {
            childImageSharp {
              fluid(maxWidth: 1400, quality: 90) {
                tracedSVG
                base64
                sizes
                srcSet
                src
                srcSetWebp
                srcWebp
                aspectRatio
              }
            }
          }
        }
      }
      node {
        excerpt
        frontmatter {
          slug
          title
          date(formatString: "YYYY-MM-DD")
          tags
          cover {
            childImageSharp {
              fluid(maxWidth: 1400, quality: 90) {
                tracedSVG
                base64
                sizes
                srcSet
                src
                srcSetWebp
                srcWebp
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
}
`;

exports.createPages = async ({ reporter, graphql, actions: { createPage } }, themeOptions) => {
  const postTemplate = require.resolve(`./src/templates/post.tsx`);
  const postsByTagTemplate = require.resolve(`./src/templates/posts-by-tag.tsx`);

  const result = await graphql(query);
  if (!result || !result.data || !result.data.allMdx || !result.data.allMdx.edges) return;

  const { edges } = result.data.allMdx;
  const postsByTag = {}; // Store posts for each tags

  edges.forEach(({ previous, next, node }) => {
    const { slug, tags } = node.frontmatter;
    if (!tags) return;
    tags.forEach((tag) => {
      if (!postsByTag[tag]) postsByTag[tag] = [];
      postsByTag[tag].push(node);
    });

    createPage({
      path: `posts/${slug}`,
      component: postTemplate,
      context: {
        previous,
        next,
        slug,
      },
    });
  });

  // generate each tag's posts page if the template exits
  const tags = Object.keys(postsByTag);

  tags.forEach((tagName) => {
    const posts = postsByTag[tagName];
    createPage({
      path: `tags/${tagName}`,
      component: postsByTagTemplate,
      context: {
        posts,
        tagName,
      },
    });
  });
};

exports.onCreateNode = (args) => {
  const { node } = args;
  if (node.internal.type !== `Mdx`) return;

  fmImagesToRelative(node);
};
