"use server";

import fs from "fs";
import { readdir } from "fs/promises";

import { serialize } from "next-mdx-remote/serialize";

import { Post } from "./types";

export async function getPosts(): Promise<Post[]> {
  const slugs = (
    await readdir("./resources/posts/", { withFileTypes: true })
  ).filter((dirent) => dirent.isFile() && dirent.name.endsWith(".mdx"));

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const post = await getPost(name.replace(".mdx", ""));
      return post;
    })
  );

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

export async function getPost(slug: string): Promise<Post> {
  const { metadata } = await import(`../resources/posts/${slug}.mdx`);

  const fileContent = fs.readFileSync(`./resources/posts/${slug}.mdx`, "utf-8");
  const serializedFile = await serialize(fileContent);

  return {
    source: serializedFile,
    slug: slug,
    ...metadata,
  };
}
