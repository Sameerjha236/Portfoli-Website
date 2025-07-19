"use client";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 p-2 w-full backdrop-blur">
      <div className="hidden md:block relative w-14 h-8"></div>
      <div className="w-96 flex justify-between items-center gap-2 text-md p-2 rounded-md">
        <a
          href="#hero"
          className={`text-lg hover:text-accent cursor-pointer ${
            activeHash === "#hero" || activeHash === ""
              ? "text-accent font-semibold"
              : ""
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-lg hover:text-accent cursor-pointer ${
            activeHash === "#about" ? "text-accent font-semibold" : ""
          }`}
        >
          About
        </a>
        <a
          href="#projects"
          className={`text-lg hover:text-accent cursor-pointer ${
            activeHash === "#projects" ? "text-accent font-semibold" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#contacts"
          className={`text-lg hover:text-accent cursor-pointer ${
            activeHash === "#contacts" ? "text-accent font-semibold" : ""
          }`}
        >
          Contact
        </a>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
