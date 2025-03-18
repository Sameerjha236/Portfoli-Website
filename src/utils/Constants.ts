import { IExperienceData, IProjectsData } from "@/Types/IData";

export const ExpericeData: IExperienceData[] = [
  {
    company: "Rizzle AI",
    role: "Trainee Engineer - Frontend",
    timeline: "Sep 2024 - Mar 2025",
    logo: "https://images.softwaresuggest.com/software_logo/rizzleai-20240605175518.jpg",
  },
];

export const Skills: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "C++",
  "HTML",
  "CSS",
  "Python",
  "Flask",
  "Tailwind CSS",
  "GraphQL",
  "Git & GitHub",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export const ProjectsData: IProjectsData[] = [
  {
    title: "Youtube Clone",
    imageUrl: "https://i.ytimg.com/vi/TIu_KrdWO1M/mqdefault.jpg",
    Description:
      "A Youtube Clone made using React.js and Tailwind CSS. It uses the Youtube API to fetch videos and display them in a grid layout. It also has a search functionality to search for videos.",
    tags: ["React.js", "Tailwind CSS", "Youtube API"],
    sourceCode: "https://github.com/Sameerjha236/Youtube-Clone",
    liveLink: "https://youtube-clone-flax-nine.vercel.app/",
  },
  {
    title: "Stock Dashboard",
    imageUrl: "",
    Description:
      "A Stock Dashboard made using React.js and Tailwind CSS. It uses the Finnhub API to fetch stock data and display them in a grid layout. It also has a search functionality to search for stocks.",
    tags: ["React.js", "Tailwind CSS", "Finnhub API"],
    sourceCode: "",
    liveLink: "",
  },
];
