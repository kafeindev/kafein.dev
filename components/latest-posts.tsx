import { HTMLAttributes } from "react";
import Link from "next/link";

import { getPosts } from "@/lib/actions";
import { Post } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

export type LatestPostsProps = HTMLAttributes<HTMLDivElement>;

export const LatestPosts = async ({
  className,
  ...props
}: LatestPostsProps) => {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 5);

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <div>
        <h1 className="mb-2 text-2xl font-semibold">Latest Posts</h1>
        {posts.length === 0 && (
          <p className="text-sm text-gray-500">No posts found.</p>
        )}
      </div>
      {latestPosts.map((post: Post, index) => (
        <LatestPostItem key={index} post={post} />
      ))}
      <Link
        href="/posts"
        className="mx-auto mt-2 text-sm text-gray-500 hover:text-black"
      >
        View All Posts
      </Link>
    </div>
  );
};

export const LatestPostItem = ({ post }: { post: Post }) => {
  const href = `/posts/${post.slug}`;
  const formattedDate = formatDate(new Date(post.publishDate));

  return (
    <div>
      <Link
        href={href}
        className="text-medium group flex items-center gap-2 text-sm text-gray-500 hover:text-black"
      >
        <span className="flex-1 truncate group-hover:underline">
          {post.title}
        </span>
        <span>{formattedDate}</span>
      </Link>
      <hr className="my-2 border-gray-200 group-hover:border-black" />
    </div>
  );
};
