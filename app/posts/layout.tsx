import { PostsSideBarContent } from "@/components/posts-side-bar-content";
import SideBar from "@/components/side-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex h-full gap-2">
      <SideBar className="w-48 min-w-48 border-r border-gray-200">
        <PostsSideBarContent />
      </SideBar>
      <div className="mx-20 mt-10 w-full">{children}</div>
    </div>
  );
}
