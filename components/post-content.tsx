"use client";

import { MDXRemote } from "next-mdx-remote";

import { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export const PostContent = ({ post }: { post: Post }) => {
  const publishDateFormatted = formatDate(new Date(post.publishDate));

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <h1 className="mb-1 text-3xl font-semibold">{post.title}</h1>
        <time dateTime={post.publishDate} className="font-medium text-gray-400">
          {publishDateFormatted}
        </time>
      </div>
      <MDXRemote {...post.source} />
    </div>
  );
};
