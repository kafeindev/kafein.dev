import ToolsTable from "@/components/tools-table";
import { TOOLS } from "@/lib/constants";

export default function Page() {
  return (
    <div className="content">
      <div className="flex h-full flex-col">
        <h1 className="mb-4 text-3xl font-semibold">Tools</h1>
        <p className="mb-2">Here are some of the tools I use.</p>
        <ToolsTable tools={TOOLS} />
      </div>
    </div>
  );
}
