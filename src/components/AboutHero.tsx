import { ExpericeData, Skills } from "@/utils/Constants";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="flex flex-col gap-8 items-center px-6 md:px-12 py-16 w-full min-h-full animateFadeIn">
      <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden bg-secondary flex justify-center items-center">
        <Image
          src="/assets/Profile.JPG"
          width={400}
          height={400}
          alt="Sameer Jha"
          className="w-full h-full object-cover rounded-full hover-scale"
          priority
        />
      </div>
      <div className="max-w-2xl text-lg leading-relaxed text-justify md:text-left mt-6">
        Hey, I&apos;m{" "}
        <span className="text-accent font-semibold">Sameer Jha</span>, a Systems
        Engineer currently working at{" "}
        <span className="text-primary font-semibold">
          Tata Consultancy Services
        </span>
        . I am passionate about crafting seamless and interactive web
        experiences, with strong skills in{" "}
        <span className="font-semibold">
          React.js, Next.js, TypeScript, and Python
        </span>
        .
      </div>

      <div className="rounded-md p-3 border-2 max-w-2xl w-full">
        {ExpericeData.map((curr, ind) => (
          <div className="flex items-center gap-8 p-2" key={ind}>
            <div className="w-20 h-22 rounded-full overflow-hidden bg-secondary flex justify-center items-center aspect-square">
              <Image
                height={80}
                width={80}
                src={curr.logo}
                alt={curr.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="text-lg font-semibold text-secondary">
                {curr.company}
              </div>
              <div className="w-full flex gap-4 text-md justify-between">
                <span>{curr.role}</span>
                <span>{curr.timeline}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-bold text-accent mb-6 text-center md:text-left">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Skills.map((skill, index) => (
            <span
              key={index}
              className="bg-secondary text-background px-4 py-2 rounded-full shadow-md text-sm md:text-base 
                  animateFadeIn hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
