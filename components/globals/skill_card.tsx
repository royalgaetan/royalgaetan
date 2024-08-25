"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { isEmpty } from "@/utils/strings_utils";
import { motion, Variants } from "framer-motion";

const SkillCard = ({
  title,
  iconPath,
  darkIconPath,
  height,
  width,
  index,
  variants,
}: {
  title: string;
  category?: "frontend" | "backend" | "mobile" | "database" | "tools";
  iconPath: string;
  darkIconPath?: string;
  width: number;
  height: number;
  index: number;
  variants: Variants;
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      key={title}
      variants={variants}
      custom={index}
      className="p-4 max-md:p-3 max-md:mx-1 border-2 border-slate-200 rounded-xl w-[min(10vw,9vw)] max-md:w-[90px]"
    >
      <div className="hover:scale-110 transition-all duration-20 flex flex-col cursor-pointer justify-center items-center">
        <Image
          src={
            theme === "dark" && !isEmpty(darkIconPath)
              ? darkIconPath!
              : iconPath
          }
          alt={title}
          className="mb-3 max-md:mb-1 max-md:scale-75"
          height={height}
          width={width}
        />
        <div className="text-center max-md:text-xs text-xs dark:text-white text-slate-500 font-medium text-wrap">
          {title}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
