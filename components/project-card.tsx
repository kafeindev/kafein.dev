import { IoFolderOutline } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";

import { Project } from "@/lib/types";

export const ProjectCardWrapper = ({ projects }: { projects: Project[] }) => (
  <div className="max-h-[47rem] w-full overflow-y-auto pr-4">
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
);

export const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="mb-4 mt-1 flex h-40 w-[95%] transform truncate rounded-md border border-gray-200 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md lg:w-full"
  >
    <div className="mr-4 flex flex-col items-center text-gray-500">
      <IoFolderOutline size={18} />
      <hr className="mt-2 h-full w-px flex-1 bg-gray-300" />
    </div>
    <div className="flex flex-col justify-between">
      {project.year && (
        <p className="pt-0.5 text-xs font-medium text-gray-500">
          {project.year.join(" - ")}
        </p>
      )}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">{project.title}</h1>
          {project.url && <LuArrowUpRight size={16} strokeWidth={2.5} />}
        </div>
        <p className="text-sm font-medium">{project.description}</p>
      </div>
      {project.techStack && (
        <div className="flex w-fit gap-1.5 truncate text-wrap text-sm font-medium lg:w-[39rem]">
          {Object.values(project.techStack).map((tech) => (
            <p key={tech}>#{tech}</p>
          ))}
        </div>
      )}
    </div>
  </a>
);
