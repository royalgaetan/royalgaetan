"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SkillType } from "@/utils/type";
import { motion, MotionValue, useTransform } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";
import { mainProjects } from "@/utils/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useTheme } from "next-themes";

type ProjectCardProps = {
  title: string;
  link: string;
  isLinkBlankTarget: boolean;
  subTitle: string;
  coverPath: string;
  toolsUsed: SkillType[];
  projectIndex: number;
  overallYprogress: MotionValue<number>;
};

const ProjectCard = ({
  title,
  subTitle,
  coverPath,
  link,
  isLinkBlankTarget,
  toolsUsed,
  projectIndex,
  overallYprogress,
}: ProjectCardProps) => {
  const { theme } = useTheme();
  const containerRef = useRef(null);

  const GetContainerScale = (index: number): MotionValue<number> => {
    const targetScale = [1, 1 - (mainProjects.length - index) * 0.05];
    const divider = (1 - 0.6) / mainProjects.length;

    return useTransform(
      overallYprogress,
      [0.6 + divider * index - divider, 0.6 + index * divider],
      targetScale
    );
  };

  return (
    <motion.div
      style={{
        scale: GetContainerScale(projectIndex + 1),
        top: `calc(20px + ${projectIndex * 40}px)`,
      }}
      ref={containerRef}
      className="group/projectInfo cursor-pointer sticky mb-[20vh] flex flex-col justify-start items-center text-neutral-500 min-h-[75vh] w-full bg-white rounded-xl border-2 border-neutral-200 dark:border-0 dark:bg-neutral-800"
    >
      <a
        className="block h-auto w-full rounded-t-lg"
        href={link}
        target={isLinkBlankTarget ? "_blank" : "_self"}
      >
        <div className="relative overflow-hidden h-[70vh] w-full rounded-t-lg">
          <motion.div className="relative w-full h-full">
            <Image
              src={coverPath}
              alt={title}
              fill
              className="object-cover rounded-t-l"
            />
          </motion.div>

          <div className="flex flex-1 absolute right-2 bottom-2">
            {toolsUsed.map((t) => {
              return (
                <TooltipProvider key={t.title}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-9 h-9 mb-1 mr-2 rounded-full shadow-lg bg-gray-800 hover:bg-gray-600s cursor-pointer transition-all duration-300 p-2 flex flex-shrink-0 items-center justify-center">
                        <motion.img
                          src={t.darkIconPath}
                          alt={title}
                          className="object-scale-down"
                          whileHover={{
                            scale: 1.2,
                          }}
                          transition={{
                            scale: { type: "spring", stiffness: 150 },
                          }}
                          width={t.width * 0.8}
                          height={t.height * 0.8}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </div>

        <div className="md:w-[60%] p-4 w-full flex flex-col justify-center min-h-[15vh]">
          <div className="flex flex-1 w-full justify-start">
            <h3 className="text-1xl font-bold group-hover/projectInfo:text-opacity-70 dark:text-slate-100 text-neutral-700 mb-0">
              {title}
            </h3>
            <CgArrowTopRight
              size={"1.5rem"}
              color={theme === "dark" ? "white" : "rgba(64 64 64 0.7)"}
              className="flex ml-1 invisible group-hover/projectInfo:visible"
            />
          </div>

          <div className="flex flex-1 w-full">
            <span className="text-neutral-500 dark:text-slate-400 text-[0.7em]">
              {subTitle}
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
