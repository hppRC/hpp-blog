import { FluidObject } from 'gatsby-image';
import { DeepPartial } from 'utility-types';

export type Frontmatter = Partial<{
  slug: string;
  title: string;
  date: string;
  tags: string[];
  cover: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}>;

export type UseAllPosts = {
  allMdx: {
    nodes: {
      body: string;
      excerpt: string;
      frontmatter: Frontmatter;
    }[];
  };
};

export type PostsByTag = {
  [key: string]: { frontmatter: Frontmatter; excerpt: string }[];
};

export type UseAllTags = {
  allMdx: {
    nodes: {
      frontmatter: {
        tags: string[];
      };
    }[];
  };
};

export type UseAnyImage = {
  allFile: Partial<{
    nodes: {
      relativePath: string;
      childImageSharp?: {
        fluid?: FluidObject;
      };
    }[];
  }>;
};

export type UseSiteBuildtime = {
  site: {
    buildTime: string;
  };
};

export type UseSiteMetadata = {
  site: {
    siteMetadata: DeepPartial<{
      siteTitle: string;
      siteTitleAlt: string;
      siteHeadline: string;
      siteUrl: string;
      siteDescription: string;
      siteLanguage: string;
      author: string;
      social: {
        twitter: string;
        github: string;
        qiita: string;
      };
    }>;
  };
};

export type JsonLdConfig = Partial<{
  '@context': string;
  '@type': string;
  inLanguage: string;
  url: string;
  headline: string;
  name: string;
  alternateName: string;
  description: string;
  author: Partial<{
    '@type': string;
    name: string;
    sameas: string;
    url: string;
    image: Partial<{
      '@type': string;
      url: string;
      width: number;
      height: number;
    }>;
  }>[];
  publisher: Partial<{
    '@type': string;
    name: string;
    description: string;
    logo: Partial<{
      '@type': string;
      url: string;
      width: number;
      height: number;
    }>;
  }>;
  image:
    | Partial<{
        '@type': string;
        url: string;
      }>
    | string;
  itemListElement: [
    Partial<{
      '@type': string;
      position: number;
      item: Partial<{
        '@id': string;
        name: string;
        image: string;
      }>;
    }>
  ];
  datePublished: string;
  dateModified: string;
  potentialAction: {};
  mainEntityOfPage: Partial<{
    '@type': string;
    '@id': string;
  }>;
}>[];

export type AllPosts = {
  body: string;
  excerpt: string;
  frontmatter: Frontmatter;
}[];

export type PostPageContext = {
  previous: PostNode;
  next: PostNode;
  slug: string;
};

export type PostNode = { frontmatter: Frontmatter; excerpt: string } | null;

export type PostData = {
  mdx: {
    body: string;
    excerpt: string;
    headings: {
      value: string;
      depth: number;
    }[];
    frontmatter: Frontmatter;
  } | null;
};

export type PostsByTagPageContext = {
  posts: { frontmatter: Frontmatter; excerpt: string }[];
  tagName: string;
};

export type Theme = {
  color: string;
  backgroundColor: string;
  cardBackground: string;
  cardBoxShadow: string;
  codeBackground: string;
  headingBorder: string;
  tocBackground: string;
};
