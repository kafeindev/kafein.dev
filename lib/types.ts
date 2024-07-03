import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Project = {
  title: string;
  description: string;
  url?: string;
  techStack: string[];
  year?: string[];
};

export type Skill = {
  name: string;
  icon: JSX.Element;
};

export type Tool = {
  name: string;
  specs: string;
  url?: string;
};

export type Post = {
  title: string;
  source: MDXRemoteSerializeResult;
  publishDate: string;
  slug: string;
};
