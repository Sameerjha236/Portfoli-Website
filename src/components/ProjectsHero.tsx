import { ProjectsData } from "@/utils/Constants";
import ProjectCard from "./ProjectCard";

const ProjectsHero = () => {
  return (
    <div className="h-full flex flex-col gap-8 items-center px-6 md:px-12 py-16 w-full animateFadeIn">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-3 text-secondary">
          My Projects
        </h2>
        <p className="text-lg md:text-xl leading-relaxed  text-justify ">
          Explore some of the projects I&apos;ve worked on, showcasing my skills
          in frontend development.
        </p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 w-full gap-6 lg:gap-8 justify-items-center">
        {ProjectsData.map((curr, ind) => (
          <ProjectCard key={ind} {...curr} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsHero;
