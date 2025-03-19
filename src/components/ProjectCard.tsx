import { IProjectsData } from "@/Types/IData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = (props: IProjectsData) => {
  return (
    <div className="relative w-72 h-60 md:w-[28rem] md:h-80 lg:md-[30rem] rounded-lg overflow-hidden transition-all duration-300 group shadow-md">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 z-0 group-hover:transform group-hover:scale-110"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>

      <div className=" flex flex-col items-center justify-around absolute bottom-0 w-full h-14 bg-primaryLight group-hover:h-full md:p-2 text-background transition-all duration-300 group-hover:backdrop-blur-md z-10 ">
        <h2 className="w-full h-10 text-lg flex justify-center items-center font-semibold transition-all duration-300 ">
          {props.title}
        </h2>

        <div className="opacity-0 h-full flex flex-col items-center justify-around group-hover:opacity-100 transition-opacity duration-300 mt-4 p-1 md:p-4">
          <p className=" text-xs md:text-lg">{props.Description}</p>
          <div className="flex gap-3">
            {props.tags.map((tech, index) => (
              <span
                key={index}
                className="bg-secondary p-1 md:px-2 text-sm md:text-md rounded-md hover:bg-accent hover:text-primary transition-colors cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>

          {(props.sourceCode || props.liveLink) && (
            <div className="flex justify-between items-center w-full">
              {props.sourceCode && (
                <a
                  href={props.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className="w-max h-6 p-1 md:p-4 flex justify-between items-center gap-2 rounded-md border cursor-pointer hover:bg-background hover:text-primary transition-colors"
                >
                  <FaGithub className="text-lg" />
                  <span>Source Code</span>
                </a>
              )}

              {props.liveLink && (
                <a
                  href={props.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-max h-6 p-1 md:p-4 flex justify-between items-center gap-2 rounded-md border cursor-pointer hover:bg-background hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
