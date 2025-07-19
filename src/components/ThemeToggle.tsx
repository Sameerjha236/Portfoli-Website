"use client";
import { useEffect, useState } from "react";

import { FaMoon, FaSun } from "react-icons/fa";
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = sessionStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    sessionStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-20 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all"
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full bg-white dark:bg-black shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-3 md:translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <FaMoon size={20} className="text-gray-600" />
        ) : (
          <FaSun size={20} className="text-yellow-400" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
