import { graphql, useStaticQuery } from 'gatsby';
import { UseSiteMetadata } from 'src/types';

/**
 * ex. const {siteTitle, siteUrl} = useSiteMetadata();
 */
export default () => {
  const { site } = useStaticQuery<UseSiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          author
          social {
            twitter
            github
            qiita
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};
