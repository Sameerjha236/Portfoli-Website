"use client";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 z-50 p-2 w-full backdrop-blur">
      <div className="hidden md:block relative w-14 h-8"></div>
      <div className="w-96 flex justify-between items-center gap-2 text-md p-2 rounded-md">
        <a href="#hero" className="text-lg hover:text-accent cursor-pointer">
          Home
        </a>
        <a href="#about" className="text-lg hover:text-accent cursor-pointer">
          About
        </a>
        <a
          href="#projects"
          className="text-lg hover:text-accent cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#contacts"
          className="text-lg hover:text-accent cursor-pointer"
        >
          Contact
        </a>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
