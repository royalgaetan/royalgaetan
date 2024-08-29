"use client";

import React, { useRef } from "react";
import ProjectCard from "../globals/project_card";
import { mainProjects, navbarElementsList } from "@/utils/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import BgWrapper from "../globals/bg_wrapper";
import { useActiveNavbar } from "@/hooks/use_active_navbar";
import ProjectCard2 from "../globals/project_card_2";
import ProjectInBetween from "./project_in_between";
import HeadingWithIcons from "../globals/headings_with_icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { isEmpty } from "@/utils/strings_utils";
import { title } from "process";
import { useTheme } from "next-themes";
import { SkillType } from "@/utils/type";

const ProjectSections = () => {
  const { theme } = useTheme();
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[1],
  });

  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  const portfolioY = useTransform(scrollYProgress, [0.75, 0.95], [0, -200]);

  const portfolioToolsUsed: SkillType[] = [
    {
      iconPath: "/svg/languages logos/nextjs.svg",
      darkIconPath: "/svg/languages logos/nextjs white.svg",
      title: "Next.js",
      width: 25,
      height: 25,
    },
    {
      title: "Typescript",
      category: "frontend",
      iconPath: "/svg/languages logos/typescript.svg",
      darkIconPath: "/svg/languages logos/typescript white.svg",
      width: 24,
      height: 24,
    },
    {
      title: "Tailwind",
      category: "frontend",
      iconPath: "/svg/languages logos/tailwind-css.svg",
      darkIconPath: "/svg/languages logos/tailwind-css white.svg",
      width: 25,
      height: 25,
    },
    {
      title: "Framer Motion",
      category: "frontend",
      iconPath: "/svg/languages logos/framer-motion.svg",
      darkIconPath: "/svg/languages logos/framer-motion white.svg",
      width: 21,
      height: 21,
    },
  ];

  return (
    <section
      ref={transitionRef}
      className="flex flex-col min-h-screen max-w-[100vw] justify-center items-center pb-3"
    >
      <ProjectInBetween overallYprogress={scrollYProgress} />

      <motion.div ref={contentRef} id="portfolio" className="w-full h-full">
        <BgWrapper
          customClassName={
            "relative z-10 w-full min-h-screen mt-52 flex flex-1 justify-center items-center"
          }
        >
          <div className="flex flex-col items-center justify-center relative w-full h-full pb-2">
            <HeadingWithIcons
              title="My Works"
              iconName="work"
              customClassName="mt-28 mb-20"
            />

            {/* Mobile only: stack effect */}
            <div className="w-full hidden max-sm:flex flex-col h-max max-w-[90vw] justify-center items-center max-sm:px-1">
              {mainProjects.map((project, i) => {
                return (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    overallYprogress={scrollYProgress}
                    projectIndex={i}
                  />
                );
              })}
              <motion.div className="sticky z-50 w-[min(600px,100%)] h-[50vh]"></motion.div>
            </div>

            {/* Large Screen Only: parallax effect  */}
            <div className="max-sm:hidden flex flex-col h-full w-full justify-center items-center mt-20">
              {mainProjects.map((project, i) => {
                return <ProjectCard2 key={project.title} {...project} />;
              })}
              <div className="h-[10vh]"></div>
            </div>

            {/* Portfolio Project: special  */}
            <motion.div
              style={{ y: portfolioY }}
              className="w-[min(650px,85vw)] flex flex-col justify-center items-center py-6 mb-10 mt-36 max-md:mt-56"
            >
              <span className="md:block max-sm:hidden -mb-1 text-xs text-slate-700 dark:text-gray-500">
                Quick note on
              </span>
              <h3 className="dark:text-white text-[2.30rem] max-md:text-3xl font-bold text-black mb-4 leading-tight">
                This Portfolio
              </h3>
              {/* Sub */}
              <p className="text-center dark:text-gray-400 text-gray-600 text-sm max-md:text-xs max-md:p-0 px-20 mt-2 mb-6">
                This portfolio is a from-scratch project built with popular web
                technologies, including Next.js. It took nearly a month to
                assemble everything—from design choices and asset creation to
                coding and deployment.
                <br />
                <br /> It highlights my recent projects and is regularly updated
                with plans for a blog, detailed case studies, and additional
                features.
              </p>
              {/* Tools Used */}
              <div>
                {portfolioToolsUsed.map((t) => {
                  return (
                    <TooltipProvider key={t.title}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.img
                            src={
                              theme === "dark" && !isEmpty(t.darkIconPath)
                                ? t.darkIconPath!
                                : t.iconPath
                            }
                            alt={title}
                            className="mb-3 mx-2 cursor-pointer inline"
                            whileHover={{
                              scale: 1.2,
                            }}
                            transition={{
                              scale: { type: "spring", stiffness: 150 },
                            }}
                            width={t.width * 1.2}
                            height={t.height * 1.2}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </BgWrapper>
      </motion.div>
    </section>
  );
};

export default ProjectSections;
