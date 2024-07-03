import { HTMLAttributes } from "react";
import { RiCommandFill } from "react-icons/ri";

import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

export type MobileDrawerProps = HTMLAttributes<HTMLDivElement>;

export const MobileDrawer = ({ children, className }: MobileDrawerProps) => (
  <Drawer>
    <DrawerTrigger className="md:hidden" asChild>
      <div className="fixed z-50 mb-auto w-full border-b border-gray-300 bg-gray-50 p-4">
        <RiCommandFill size={20} />
      </div>
    </DrawerTrigger>
    <DrawerContent className={className}>{children}</DrawerContent>
  </Drawer>
);
