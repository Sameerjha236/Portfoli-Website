import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center px-6 md:px-12 py-16 w-full h-full">
      <div className="md:w-1/2 w-full text-center md:text-left max-w-lg flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl mb-2 ">Hello, I&apos;m</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-3 text-accent">
          Sameer Jha
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          A Frontend Developer with 6 months of experience, currently working at
          Rizzle AI. Passionate about optimizing performance and crafting
          visually appealing, user-friendly websites.
        </p>

        <div className="flex justify-center md:justify-start space-x-6 mt-5">
          <a
            href="https://github.com/sameerjha236"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub
              size={36}
              className="text-gray-300 hover:text-gray-100 transition-colors"
            />
          </a>
          <a
            href="https://linkedin.com/in/sameer-jha-23m6y2002/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin
              size={36}
              className="text-blue-600 hover:text-blue-400 transition-colors"
            />
          </a>
          <a href="mailto:sameerjha236@gmail.com" aria-label="Email Sameer">
            <FaEnvelope
              size={36}
              className="text-red-600 hover:text-red-400 transition-colors"
            />
          </a>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-secondary flex justify-center items-center">
        <Image
          src="/assets/Profile.JPG"
          width={400}
          height={400}
          alt="Sameer Jha"
          className="w-full h-full object-cover rounded-full"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
