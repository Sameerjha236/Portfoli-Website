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
        className="snap-start scroll-mt-16 h-screen flex justify-center"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="snap-start scroll-mt-16 flex justify-center "
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
