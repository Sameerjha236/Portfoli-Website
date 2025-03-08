import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div></div>
      <div className="flex justify-between gap-2 text-md p-2 rounded-md w-60 glass">
        <Link href={"/"}>
          <span className="hover:text-accent cursor-pointer">Home</span>
        </Link>
        <Link href={"/about"}>
          <span className="hover:text-accent cursor-pointer">About</span>
        </Link>
        <Link href={"/projects"}>
          <span className="hover:text-accent cursor-pointer">Projects</span>
        </Link>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
