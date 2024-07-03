import { PostContent } from "@/components/post-content";
import { getPost } from "@/lib/actions";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return <PostContent post={post} />;
}
