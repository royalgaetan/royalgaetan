"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SkillType } from "@/utils/type";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  link: string;
  isLinkBlankTarget: boolean;
  subTitle: string;
  coverPath: string;
  toolsUsed: SkillType[];
  projectIndex: number;
  range: number[];
  targetScale: number;
};

const ProjectCard = ({
  title,
  subTitle,
  coverPath,
  link,
  isLinkBlankTarget,
  toolsUsed,
  projectIndex,
  range,
  targetScale,
}: ProjectCardProps) => {
  const { theme } = useTheme();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const containerScale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <motion.div
      style={{
        scale: containerScale,
        top: `calc(60px + ${projectIndex * 40}px)`,
      }}
      ref={containerRef}
      className="group/projectInfo cursor-pointer sticky mb-[20vh] flex flex-col justify-start items-center text-neutral-500 min-h-[75vh] w-full bg-white rounded-xl border-2 border-neutral-200 dark:border-0 dark:bg-neutral-800"
    >
      <a
        className="block h-auto w-full rounded-t-lg"
        href={link}
        target={isLinkBlankTarget ? "_blank" : "_self"}
      >
        <div className="overflow-hidden h-[70vh] w-full rounded-t-lg">
          <motion.div style={{ scale }} className="relative w-full h-full">
            <Image
              src={coverPath}
              alt={title}
              fill
              className="object-cover rounded-t-l"
            />
          </motion.div>
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
