const siteTitle = `hpp blog🌝`;
const siteDescription = `Personal blog made with Gatsby, TypeScript, and many interactions!`;

const siteMetadata = {
  siteTitle,
  siteTitleAlt: `hpp blog - @hppRC/hpp-blog`,
  siteHeadline: `personal blog of @hppRC`,
  siteUrl: `https://blog.hpprc.com`,
  siteDescription,
  siteLanguage: `ja`,
  siteImage: `/banner.jpg`,
  author: `@hpp_ricecake`, // twitter account id
  basePath: `/`,
  social: {
    twitter: `https://twitter.com/hpp_ricecake`,
    github: `https://github.com/hppRC`,
    qiita: `https://qiita.com/hppRC`,
  },
};

const mdxPlugins = {
  resolve: `gatsby-plugin-mdx`,
  options: {
    extensions: [`.mdx`, `.md`],
    gatsbyRemarkPlugins: [
      {
        resolve: `gatsby-remark-autolink-headers`,
        options: {
          offsetY: `500`,
          icon: false,
          className: `autolink-headers`,
        },
      },
      {
        resolve: `gatsby-remark-external-links`,
        options: {
          target: `_blank`,
          rel: `noopener`,
        },
      },
      `gatsby-remark-relative-images`,
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1400,
          quality: 90,
          linkImagesToOriginal: true,
        },
      },
      `gatsby-remark-katex`,
      `gatsby-remark-code-titles`,
      {
        resolve: `gatsby-remark-embed-youtube`,
        options: {
          width: 800,
          height: 400,
        },
      },
      {
        resolve: `gatsby-remark-emojis`,
        options: {
          active: true,
          size: 64,
          class: `emoji-icon`,
          styles: {
            display: `inline`,
            margin: `0`,
            'margin-top': `1px`,
            position: `relative`,
            top: `5px`,
            width: `25px`,
          },
        },
      },
      `gatsby-remark-graphviz`,
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: `language-`,
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: true,
          noInlineHighlight: false,
        },
      },
    ],
  },
};

const RSSFeedPlugin = {
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
    {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
        }
      }
    }
  `,
    feeds: [
      {
        serialize: ({ query: { site, allMdx } }) => {
          const { siteUrl } = site.siteMetadata;
          return allMdx.nodes.map(({ excerpt, body, frontmatter }) => {
            const { slug, date } = frontmatter;
            return {
              ...frontmatter,
              description: excerpt,
              date,
              url: `${siteUrl}/posts${slug}`,
              guid: `${siteUrl}/posts${slug}`,
              // eslint-disable-next-line @typescript-eslint/camelcase
              custom_elements: [{ 'content:encoded': body }],
            };
          });
        },
        query: `
        {
          allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
            nodes {
              excerpt
              body
              frontmatter {
                title
                date
                slug
              }
            }
          }
        }
      `,
        output: `/rss.xml`,
        title: `${siteTitle} RSS feed`,
      },
    ],
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `contents/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `contents/assets`,
      },
    },
    {
      resolve: `@hpprc/gatsby-theme-core`,
      options: {
        siteTitle,
        siteDescription,
        iconPath: `./contents/assets/icon.png`,
      },
    },
    mdxPlugins,
    RSSFeedPlugin,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        openAnalyzer: false,
      },
    },
  ],
};
