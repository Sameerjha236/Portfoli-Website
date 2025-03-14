import { ProjectsData } from "@/utils/Constants";
import ProjectCard from "./ProjectCard";

const ProjectsHero = () => {
  return (
    <div className="flex flex-col gap-8 items-center px-6 md:px-12 py-16 w-full min-h-full animateFadeIn">
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.map((curr, ind) => (
          <ProjectCard key={ind} {...curr} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsHero;
