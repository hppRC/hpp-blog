import { FluidObject } from 'gatsby-image';

export type Frontmatter = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  cover: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

export type Result = {
  allMdx: {
    edges: {
      previous: {
        frontmatter: Frontmatter;
      } | null;
      next: {
        frontmatter: Frontmatter;
      } | null;
      node: {
        frontmatter: Frontmatter;
      };
    }[];
  };
};

export type PostPageContext = {
  previous: { frontmatter: Frontmatter } | null;
  next: { frontmatter: Frontmatter } | null;
  slug: string;
};

export type PostProps = {
  data: {
    mdx: {
      body: string;
      excerpt: string;
      headings: {
        value: string;
        depth: number;
      }[];
      frontmatter: Frontmatter;
    };
  };
  pageContext: PostPageContext;
};
