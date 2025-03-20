"use client";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 p-2 w-full backdrop-blur ">
      <div className=" hidden md:block relative w-14 h-8"></div>
      <div className="w-96 flex justify-between items-center gap-2 text-md p-2 rounded-md">
        <Link href="/">
          <span
            className={`text-lg hover:text-accent cursor-pointer ${
              pathname === "/" ? "text-accent font-semibold" : ""
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/about">
          <span
            className={`text-lg hover:text-accent cursor-pointer ${
              pathname === "/about" ? "text-accent font-semibold" : ""
            }`}
          >
            About
          </span>
        </Link>
        <Link href="/projects">
          <span
            className={`text-lg hover:text-accent cursor-pointer ${
              pathname === "/projects" ? "text-accent font-semibold" : ""
            }`}
          >
            Projects
          </span>
        </Link>
        <Link href="/contact">
          <span
            className={`text-lg hover:text-accent cursor-pointer ${
              pathname === "/contact" ? "text-accent font-semibold" : ""
            }`}
          >
            Contact
          </span>
        </Link>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
