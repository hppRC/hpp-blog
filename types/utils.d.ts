import { FluidObject } from 'gatsby-image';

export type Frontmatter = {
  slug: string;
  title: string;
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
        excerpt: string;
      } | null;
      next: {
        frontmatter: Frontmatter;
        excerpt: string;
      } | null;
      node: {
        frontmatter: Frontmatter;
        excerpt: string;
      };
    }[];
  };
};

export type PostPageContext = {
  previous: { frontmatter: Frontmatter; excerpt: string } | null;
  next: { frontmatter: Frontmatter; excerpt: string } | null;
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
