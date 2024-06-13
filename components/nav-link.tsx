"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuArrowUpRight } from "react-icons/lu";

import { cn, isExternalLink } from "@/lib/utils";

type NavLinkWrapperProps = {
  child: NavLinkProps[];
};

const NavLinkWrapper = (props: NavLinkWrapperProps) => {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col gap-1">
      {Object.values(props.child).map((child, index) => {
        return (
          <NavLink
            key={index}
            {...child}
            isSelected={child.href === pathname}
          />
        );
      })}
    </div>
  );
};

type NavLinkProps = {
  href: string;
  title: string;
  icon?: JSX.Element;
  iconOutline?: JSX.Element;
  isSelected?: boolean;
  fromPublicDirectory?: boolean;
  includeArrowRightIcon?: boolean;
};

const NavLink = (props: NavLinkProps) => {
  const icon = props.isSelected
    ? props.icon ?? props.iconOutline
    : props.iconOutline ?? props.icon;
  const content = (
    <div
      className={cn(
        "flex h-10 w-full items-center gap-5 rounded-md px-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-gray-200",
        {
          "text-foreground bg-black font-semibold text-white hover:bg-black":
            props.isSelected,
        }
      )}
    >
      {icon}
      <p>{props.title}</p>
      {props.includeArrowRightIcon && (
        <LuArrowUpRight size={16} className="ml-auto" />
      )}
    </div>
  );

  if (isExternalLink(props.href)) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (props.fromPublicDirectory) {
    return (
      <Link
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        locale={false}
      >
        {content}
      </Link>
    );
  }

  return <Link href={props.href}>{content}</Link>;
};

export { NavLinkWrapper, NavLink };
export type { NavLinkWrapperProps, NavLinkProps };
