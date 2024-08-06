"use client";

import { cn } from "@/lib/utils";
import { useNavbarContext } from "@/providers/navbar_provider";
import { NavbarElementType } from "@/utils/type";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const NavbarButton = ({
  navElement,
  key,
}: {
  navElement: NavbarElementType;
  key: React.Key;
}) => {
  const { activeNavbarElement, setActiveNavbarElement } = useNavbarContext();

  return (
    <Link
      key={key}
      href={navElement.hash}
      onClick={() => {
        setActiveNavbarElement(navElement);
      }}
      className={cn(
        "hover:bg-slate-400/60 hover:text-slate-700 dark:hover:bg-neutral-600/80 dark:hover:text-neutral-200",
        "text-slate-500 dark:text-neutral-400 bg-slate-300/80 dark:bg-neutral-700/80",
        "whitespace-nowrap flex-nowrap font-medium  backdrop-blur-sm w-full h-full cursor-pointer",
        activeNavbarElement.title == navElement.title
          ? "bg-slate-400/60 text-slate-800 dark:bg-neutral-600/80 dark:text-neutral-200 font-bold"
          : ""
      )}
    >
      <motion.span
        className="flex flex-1 justify-center items-center py-2 px-2 w-full h-full bg-transparent"
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.4 }}
      >
        {navElement.title}
      </motion.span>
    </Link>
  );
};

export default NavbarButton;
