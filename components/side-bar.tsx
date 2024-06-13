import React from "react";

import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SideBar = (props: Props) => {
  return (
    <div
      className={cn("flex min-w-64 flex-col rounded-md p-2", props.className)}
    >
      {props.children}
    </div>
  );
};

export default SideBar;
