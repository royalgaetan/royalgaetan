"use client";

import React, { useRef } from "react";
import ProjectCard from "../globals/project_card";
import { mainProjects, navbarElementsList } from "@/utils/constants";
import { useScroll } from "framer-motion";
import InBetween from "./in_between";
import BgWrapper from "../globals/bg_wrapper";
import { useActiveNavbar } from "@/hooks/use_active_navbar";

const ProjectSections = () => {
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[2],
  });

  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={transitionRef}
      className="flex flex-col min-h-screen max-w-[100vw] justify-center items-center pt-4 -mb-[10vh] pb-3"
    >
      <InBetween
        iconType="wand"
        title="What about my recent works?"
        overallYprogress={scrollYProgress}
      />

      <BgWrapper
        id="portfolio"
        customClassName={
          "relative z-10 w-[100vw] min-h-screen flex flex-1 justify-center items-center"
        }
      >
        <div
          ref={contentRef}
          className="relative flex flex-col gap-9 h-[full] w-[min(650px,100%)] justify-center items-center max-sm:px-5 "
        >
          {mainProjects.map((project, i) => {
            const targetScale = 1 - (mainProjects.length - i) * 0.05;
            return (
              <ProjectCard
                {...project}
                range={[i * (1 / mainProjects.length), 1]}
                projectIndex={i}
                targetScale={targetScale}
              />
            );
          })}
          <div className="h-[20vh]"></div>
        </div>

        {/* <h2 className="text-center flex flex-4 max-sm:text-2xl text-4xl font-bold items-center mb-7 mt-24">
        Other projects worth mentioning
      </h2>

      <div className="flex flex-wrap gap-5 justify-center items-start mt-7 max-sm:px-5">
        {otherProjects.map((project) => {
          return (
            <ProjectCard2
              key={project.title}
              title={project.title}
              subTitle={project.subTitle}
              coverPath={project.coverPath}
              toolsUsed={project.toolsUsed}
            />
          );
        })}
      </div> */}
      </BgWrapper>
    </section>
  );
};

export default ProjectSections;
