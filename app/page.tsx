import { LatestPosts } from "@/components/latest-posts";
import SkillList from "@/components/skill-list";
import HomeMdx from "@/resources/home.mdx";

export default function Home() {
  return (
    <div className="content">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">kafein.dev</h1>
          <HomeMdx />
        </div>
        <LatestPosts className="my-auto" />
        <SkillList />
      </div>
    </div>
  );
}
