import { IProjectsData } from "@/Types/IData";

const ProjectCard = (props: IProjectsData) => {
  return (
    <div className="relative w-80 h-60 rounded-lg overflow-hidden transition-all duration-300 group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 z-0 group-hover:transform group-hover:scale-110"
        style={{ backgroundImage: `url('${props.imageUrl}')` }}
      ></div>

      <div className="absolute bottom-0 w-full h-10 bg-secondary group-hover:h-full p-1 text-background transition-all duration-300 group-hover:backdrop-blur-md z-10 flex flex-col">
        <h3 className="w-full h-10 flex justify-center items-center font-semibold transition-all duration-300 group-hover:h-12 ">
          {props.title}
        </h3>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-3 mt-4">
          <p className="text-sm">{props.Description}</p>
          <div className="flex flex-wrap gap-2">
            {props.tags.map((tag, ind) => (
              <span
                key={ind}
                className="bg-secondary text-primary px-2 py-1 rounded-lg text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between mt-2">
            {props.sourceCode && (
              <a
                href={props.sourceCode}
                target="_blank"
                className="text-sm text-blue-400 hover:underline"
              >
                Source Code
              </a>
            )}
            {props.liveLink && (
              <a
                href={props.liveLink}
                target="_blank"
                className="text-sm text-green-400 hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
