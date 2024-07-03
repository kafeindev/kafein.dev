import { ProjectCardWrapper } from "@/components/project-card";
import { PROJECTS } from "@/lib/constants";

export default function Page() {
  return (
    <div className="content">
      <div className="flex h-full flex-col">
        <h1 className="mb-4 text-3xl font-semibold">Projects</h1>
        <p className="mb-1">Here are some of the projects I've worked on.</p>
        <ProjectCardWrapper projects={Object.values(PROJECTS)} />
      </div>
    </div>
  );
}
