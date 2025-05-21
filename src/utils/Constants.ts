import { IExperienceData, IProjectsData } from "@/Types/IData";

export const ExpericeData: IExperienceData[] = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Systems Engineer",
    timeline: "Apr 2025 - Present",
    logo: "https://mir-s3-cdn-cf.behance.net/projects/404/a1a934149082851.Y3JvcCwzNDUxLDI3MDAsNzYsMA.jpg", // You can replace with another preferred TCS logo URL
  },
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
  "Python",
  "Node.js",
  "Express.js",
  "C++",
  "HTML",
  "CSS",
  "GraphQL",
  "Flask",
  "Tailwind CSS",
  "Git & GitHub",
  "MongoDB",
];

export const ProjectsData: IProjectsData[] = [
  {
    title: "YouTube Clone",
    imageUrl: "/assets/projects/Youtube.png",
    Description:
      "A YouTube Clone made using React.js and Tailwind CSS. It fetches videos using the YouTube API and displays them in a grid layout. It also includes a search functionality.",
    tags: ["React.js", "Material UI", "Rapid API"],
    sourceCode: "https://github.com/Sameerjha236/Youtube-Clone",
    liveLink: "https://youtube-clone-flax-nine.vercel.app/",
  },
  {
    title: "Memory Puzzle Game",
    imageUrl: "/assets/projects/Puzzle.png",
    Description:
      "A memory puzzle game inspired by Purble Palace, built using Next.js. It challenges players to match card pairs within a limited number of moves.",
    tags: ["Next.js", "Game Development"],
    sourceCode: "https://github.com/Sameerjha236/Memory-Puzzle",
    liveLink: "https://memory-puzzle-mocha.vercel.app/",
  },
  {
    title: "Flippy - AI Outfit Recommender",
    imageUrl: "/assets/projects/flippy.jpg",
    Description:
      "Flippy is an AI-driven chatbot that leverages the OpenAI API to provide personalized outfit recommendations based on user preferences and needs. Developed for the Flipkart Grid Hackathon.",
    tags: ["Python", "Flask", "OpenAI API"],
    sourceCode: "https://github.com/Sameerjha236/Flippy",
    liveLink: "",
  },
  {
    title: "Stock Dashboard",
    imageUrl: "/assets/projects/stocks.png",
    Description:
      "A Stock Dashboard made using React.js and Tailwind CSS. It fetches stock data using the Finnhub API and displays them in a grid layout. It also includes a search functionality.",
    tags: ["React.js", "Tailwind CSS", "Finnhub API"],
    sourceCode: "https://github.com/Sameerjha236/Stock-DashBoard",
    liveLink: "",
  },
  {
    title: "Book Browser",
    imageUrl: "/assets/projects/Book.png",
    Description:
      "A wiki-style book browser that contains data on all available books with an infinite scroll functionality for seamless browsing.",
    tags: ["React.js", "Infinite Scroll"],
    sourceCode: "https://github.com/Sameerjha236/Book_Browser",
    liveLink: "https://book-browser-fawn.vercel.app/",
  },
  {
    title: "CarWale - Price Prediction System",
    imageUrl: "/assets/projects/Car.jpeg",
    Description:
      "A price prediction system for estimating the resale value of cars using Machine Learning, built with Python and Flask.",
    tags: ["Python", "Flask", "Machine Learning"],
    sourceCode: "https://github.com/Sameerjha236/CarWale",
    liveLink: "",
  },
];
