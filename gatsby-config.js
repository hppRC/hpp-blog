const siteMetadata = {
  siteTitle: `hpp blog🌝`,
  siteTitleAlt: `hpp blog - @hppRC/hpp-blog`,
  siteHeadline: `personal blog of @hppRC`,
  siteUrl: `https://blog.hpprc.com`,
  siteDescription: `personal blog made with Gatsby, TypeScript.`,
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

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `@hpprc/gatsby-theme-blog`,
      options: {
        googleAnalyticsTrackingId: `UA-149661454-2`,
      },
    },
  ],
};
