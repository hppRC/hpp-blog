import { GatsbyNode } from 'gatsby';
import { fmImagesToRelative } from 'gatsby-remark-relative-images';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';
import { Frontmatter, PostPageContext, PostsByTagPageContext, Result } from 'types/utils';

//you can't use QraphQL query fragments to get fluid object in gatsby-node.
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
              fluid(maxWidth: 1000, quality: 90) {
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
              fluid(maxWidth: 1000, quality: 90) {
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
              fluid(maxWidth: 1000, quality: 90) {
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

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage }
}) => {
  const postTemplate = path.resolve('src/templates/post.tsx');
  const postByTagTemplate = path.resolve('src/templates/posts-by-tag.tsx');

  const result = await graphql<Result>(query);

  const edges = result?.data?.allMdx.edges;
  const postsByTag: {
    [key: string]: { frontmatter: Frontmatter; excerpt: string }[];
  } = {}; //タグごとの投稿を格納する

  edges?.forEach(({ previous, next, node }) => {
    node.frontmatter.tags?.forEach(tag => {
      if (!postsByTag[tag]) {
        postsByTag[tag] = [];
      }
      postsByTag[tag].push(node);
    });

    createPage<PostPageContext>({
      path: `posts/${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        previous,
        next,
        slug: node.frontmatter.slug
      }
    });
  });

  const tags = Object.keys(postsByTag);

  tags.forEach(tagName => {
    const posts = postsByTag[tagName];
    createPage<PostsByTagPageContext>({
      path: `/tags/${tagName}`,
      component: postByTagTemplate,
      context: {
        posts,
        tagName
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
