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
  } | null;
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

export type PostDefaultProps = {
  data: {
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
  pageContext: PostPageContext;
};

export type PostProps = {
  title: string;
  body: string;
  date: string;
  tags: string[];
  headings: {
    value: string;
    depth: number;
  }[];
  fluid: FluidObject | undefined;
  background: FluidObject | undefined;
  mode: boolean;
  previous: { frontmatter: Frontmatter; excerpt: string } | null;
  next: { frontmatter: Frontmatter; excerpt: string } | null;
};

export type EachArticleProps = {
  key: number;
  slug: string;
  fluid: FluidObject | undefined;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  mode: boolean;
};

export type PostsByTagPageContext = {
  posts: { frontmatter: Frontmatter; excerpt: string }[];
  tagName: string;
};

export type UseAllPosts = {
  allMdx: {
    nodes: {
      id: string;
      body: string;
      excerpt: string;
      frontmatter: Frontmatter;
    }[];
  };
};
