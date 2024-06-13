import {
  IoBriefcaseOutline,
  IoDesktop,
  IoDesktopOutline,
  IoFileTrayFull,
  IoFileTrayFullOutline,
  IoFolderOpen,
  IoFolderOpenOutline,
  IoHome,
  IoHomeOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

import { NavLinkProps, NavLinkWrapper } from "@/components/nav-link";

const NavLinks: NavLinkProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <IoHome size={20} />,
    iconOutline: <IoHomeOutline size={20} />,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <IoFolderOpen size={20} />,
    iconOutline: <IoFolderOpenOutline size={20} />,
  },
  {
    title: "Posts",
    href: "/posts",
    icon: <IoFileTrayFull size={20} />,
    iconOutline: <IoFileTrayFullOutline size={20} />,
  },
  {
    title: "Tools",
    href: "/tools",
    icon: <IoDesktop size={20} />,
    iconOutline: <IoDesktopOutline size={20} />,
  },
  {
    title: "Resume",
    href: "/resume.pdf",
    iconOutline: <IoBriefcaseOutline size={20} />,
    includeArrowRightIcon: true,
    fromPublicDirectory: true,
  },
];

const ProfileNavLinks: NavLinkProps[] = [
  {
    title: "GitHub",
    href: "https://github.com/kafeindev",
    iconOutline: <IoLogoGithub size={20} />,
    includeArrowRightIcon: true,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/kafeindev/",
    iconOutline: <IoLogoLinkedin size={20} />,
    includeArrowRightIcon: true,
  },
  {
    title: "Twitter",
    href: "https://x.com/KafeinDev",
    iconOutline: <IoLogoTwitter size={20} />,
    includeArrowRightIcon: true,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@kafeindev",
    iconOutline: <IoLogoYoutube size={20} />,
    includeArrowRightIcon: true,
  },
];

const MainSideBarContent = () => {
  return (
    <>
      <a href="https://github.com/kafeindev/kafein.dev" target="_blank">
        <div className="flex gap-2 rounded-md p-1.5 transition-colors duration-200 hover:bg-gray-200">
          <div className="flex flex-col justify-center">
            <h1 className="text-sm font-semibold">Batuhan Karaca</h1>
            <h1 className="text-xs text-gray-500">Software Developer</h1>
          </div>
        </div>
      </a>
      <hr className="bg-gray-150 mb-3 mt-1.5 h-0.5 w-full" />
      <NavLinkWrapper child={NavLinks} />
      <hr className="bg-gray-150 my-3 h-0.5 w-full" />
      <h1 className="mb-2 px-3 text-xs font-semibold opacity-50">Profiles</h1>
      <NavLinkWrapper child={ProfileNavLinks} />
      <div className="mt-auto flex justify-center">
        <h1 className="text-gray-500">kafein.dev</h1>
      </div>
    </>
  );
};

export default MainSideBarContent;
