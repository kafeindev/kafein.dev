import {
  BiLogoDocker,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

export const PROJECTS = {
  kafein_dev: {
    title: "kafein.dev",
    description: "My personal website",
    url: "https://github.com/kafeindev/kafein.dev",
    techStack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Vercel"],
    year: ["2024", "Present"],
  },
  social_media_app: {
    title: "Social Media App",
    description: "A social media app built with Next.js and Express.js",
    url: "https://github.com/kafeindev/social-media-app",
    techStack: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "shadcn/ui",
      "Passport",
      "Vercel",
    ],
    year: ["2024", "Present"],
  },
  mineles_library: {
    title: "Mineles Library",
    description: "A library for game servers",
    url: "https://github.com/kafeindev/MinelesLibrary",
    techStack: ["Java", "Docker", "Redis", "MongoDb", "Bukkit"],
    year: ["2023", "2024"],
  },
  command_framework: {
    title: "Command Framework",
    description: "A command framework for JDA(Java Discord API) and Bukkit",
    url: "https://github.com/kafeindev/CommandFramework",
    techStack: ["Java", "JDA", "Bukkit"],
    year: ["2022", "2023"],
  },
};

export const SKILLS = [
  {
    name: "Java",
    icon: <BiLogoJava size={50} />,
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript size={50} />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript size={50} />,
  },
  {
    name: "React",
    icon: <BiLogoReact size={50} />,
  },
  {
    name: "NextJS",
    icon: <RiNextjsFill size={50} />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress size={44} />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size={50} />,
  },
  {
    name: "MongoDb",
    icon: <BiLogoMongodb size={50} />,
  },
  {
    name: "Redis",
    icon: <DiRedis size={44} />,
  },
  {
    name: "Docker",
    icon: <BiLogoDocker size={50} />,
  },
  {
    name: "Tailwind",
    icon: <BiLogoTailwindCss size={50} />,
  },
];

export const TOOLS = [
  {
    name: "Personal Computer",
    specs: "RX 5700XT, R5 3600X, 16GB RAM, 1TB SSD",
  },
  {
    name: "Macbook Air",
    specs: "M1, 16GB RAM, 256GB SSD",
    url: "https://www.apple.com/tr/macbook-air/",
  },
  {
    name: "Akko 5075B Plus",
    specs: "Black",
    url: "https://a.co/d/93MN5ym",
  },
  {
    name: "Darmoshark M3",
    specs: "White, Wireless",
    url: "https://a.co/d/2iZSHHh",
  },
  {
    name: "Corsair HS80",
    specs: "Black, Wireless",
    url: "https://a.co/d/db7I7gG",
  },
];
