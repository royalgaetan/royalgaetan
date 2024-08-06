"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { SkillType } from "@/utils/type";
import { isEmpty } from "@/utils/strings_utils";

const SkillCard = ({
  title,
  iconPath,
  darkIconPath,
  height,
  width,
}: SkillType) => {
  const { theme } = useTheme();

  return (
    <div className="hover:scale-110 transition-all duration-150">
      <div className="flex flex-col cursor-pointer justify-center items-center">
        <Image
          src={
            theme === "dark" && !isEmpty(darkIconPath)
              ? darkIconPath!
              : iconPath
          }
          alt={title}
          className="mb-3"
          height={height}
          width={width}
        />
        <div className="text-sm dark:text-white text-slate-500 font-medium text-wrap">
          {title}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
