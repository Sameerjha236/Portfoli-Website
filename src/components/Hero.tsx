import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center px-6 md:px-12 py-16 w-full min-h-full animateFadeIn">
      <div className="md:w-1/2 w-full text-center md:text-left max-w-lg flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl mb-2">
          Hello, I&apos;m <span className="inline-block animate-wave">👋</span>
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold mb-3 typing">
          Sameer <span className="text-secondary">Jha</span>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-justify">
          Systems Engineer currently working at Tata Consultancy Services,
          passionate about creating high-performance, visually appealing, and
          user-friendly web applications. Focused on optimization and delivering
          seamless user experiences.
        </p>

        <div className="flex justify-center md:justify-start space-x-6 mt-5">
          <div className="hover-scale">
            <a
              href="https://github.com/sameerjha236"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub
                size={36}
                className="text-primary hover:text-secondary transition-colors"
              />
            </a>
          </div>
          <div className="hover-scale">
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
          </div>
          <div className="hover-scale">
            <a href="mailto:sameerjha236@gmail.com" aria-label="Email Sameer">
              <FaEnvelope
                size={36}
                className="text-red-600 hover:text-red-400 transition-colors"
              />
            </a>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <a
            href="https://drive.google.com/file/d/1eRMijzCW7iGCavEAFqgPStXTb8p3zEp2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume Download"
            className="bg-secondary text-background px-3 py-1 md:px-6 md:py-3 rounded-lg text-lg font-semibold hover:bg-accent transition"
          >
            Download Resume
          </a>
          <Link href="/projects">
            <p className="border border-primary text-primary px-3 py-1  md:px-6 md:py-3 rounded-lg text-lg font-semibold hover:bg-accent hover:text-foreground transition">
              View My Work
            </p>
          </Link>
        </div>
      </div>

      <div className=" hidden w-[150px] h-[150px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-secondary md:flex justify-center items-center">
        <Image
          src="/assets/Profile.JPG"
          width={400}
          height={400}
          alt="Sameer Jha"
          className="w-full h-full object-cover rounded-full hover-scale"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
