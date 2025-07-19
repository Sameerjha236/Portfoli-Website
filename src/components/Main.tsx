import React from "react";
import Hero from "./Hero";
import AboutHero from "./AboutHero";
import ProjectsHero from "./ProjectsHero";
import ContactsHero from "./ContactsHero";

const Main = () => {
  return (
    <main className="snap-y snap-mandatory min-h-screen overflow-y-scroll scroll-smooth">
      <section
        id="hero"
        className="md:h-[85vh] snap-start scroll-mt-16 flex justify-center"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="snap-start scroll-mt-16 flex justify-center animateFadeIn"
      >
        <AboutHero />
      </section>
      <section
        id="projects"
        className="snap-start scroll-mt-16 flex justify-center"
      >
        <ProjectsHero />
      </section>
      <section
        id="contacts"
        className="snap-start scroll-mt-16 flex justify-center"
      >
        <ContactsHero />
      </section>
    </main>
  );
};

export default Main;
