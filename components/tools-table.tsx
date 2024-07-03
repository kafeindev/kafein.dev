import { Tool } from "@/lib/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const ToolsTable = ({ tools }: { tools: Tool[] }) => {
  return (
    <div className="rounded-md border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-56">Product</TableHead>
            <TableHead className="min-w-80">Specs</TableHead>
            <TableHead className="min-w-12" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {tools.map((tool, index) => (
            <ToolsTableRow key={index} tool={tool} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const ToolsTableRow = ({ tool }: { tool: Tool }) => {
  return (
    <TableRow className="hover:bg-gray-200/50">
      <TableCell className="py-3 font-medium">{tool.name}</TableCell>
      <TableCell className="py-3">{tool.specs}</TableCell>
      <TableCell className="py-3">
        {tool.url && (
          <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className="font-medium after:content-['_↗'] hover:underline"
          >
            Buy
          </a>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ToolsTable;
