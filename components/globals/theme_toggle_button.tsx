"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      className="w-full h-full flex flex-1 justify-center items-center bg-gray-800 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400 cursor-pointer transition-all duration-300 text-white dark:text-white text-sm rounded-full shadow-sm"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme == "dark" ? <FaMoon /> : <FaSun />}
    </motion.button>
  );
};

export default ThemeToggleButton;
