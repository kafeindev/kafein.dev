import { getPosts } from "@/lib/actions";
import { formatDate } from "@/lib/utils";

import { NavLinkWrapper } from "./nav-link";

export const PostsSideBarContent = async () => {
  const posts = await getPosts();
  const postsMapped = posts.map((post) => {
    const href = `/posts/${post.slug}`;
    const formattedDate = formatDate(new Date(post.publishDate));

    return {
      title: post.title,
      href: href,
      className: "p-2",
      children: <p className="text-xs text-gray-400">{formattedDate}</p>,
    };
  });

  return (
    <>
      <h1 className="px-2 py-3.5 text-sm font-semibold">Posts</h1>
      <hr className="bg-gray-150 mb-3 mt-1.5 h-0.5 w-full" />
      {posts.length === 0 && (
        <p className="px-2 text-sm text-gray-500">No posts found.</p>
      )}
      <NavLinkWrapper child={postsMapped} />
    </>
  );
};
