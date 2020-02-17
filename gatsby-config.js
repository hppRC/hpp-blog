module.exports = {
  plugins: [
    {
      resolve: `@hpprc/gatsby-theme-blog`,
      options: {
        basePath: '/',
        blogPath: '/blog',
        tagsPath: '/tags',
        assetsPath: 'contents/assets',
        postsPath: 'contents/posts',
        templatesPath: 'src/templates',
        gatsbyRemarkPlugins: [],
        mdx: true
      }
    }
  ]
};
