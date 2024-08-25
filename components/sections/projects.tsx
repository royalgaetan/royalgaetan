"use client";

import React, { useRef } from "react";
import ProjectCard from "../globals/project_card";
import { mainProjects, navbarElementsList } from "@/utils/constants";
import { motion, useScroll } from "framer-motion";
import BgWrapper from "../globals/bg_wrapper";
import { useActiveNavbar } from "@/hooks/use_active_navbar";
import ProjectCard2 from "../globals/project_card_2";
import ProjectInBetween from "./project_in_between";
import HeadingWithIcons from "../globals/headings_with_icons";

const ProjectSections = () => {
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[1],
  });

  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={transitionRef}
      className="flex flex-col min-h-screen max-w-[100vw] justify-center items-center -mb-[10vh] pb-3"
    >
      <ProjectInBetween overallYprogress={scrollYProgress} />

      <motion.div ref={contentRef} id="portfolio" className="w-full h-full">
        <BgWrapper
          customClassName={
            "relative z-10 w-full min-h-screen mt-52 flex flex-1 justify-center items-center"
          }
        >
          <div className="flex flex-col items-center justify-center relative w-full h-full">
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
          </div>
        </BgWrapper>
      </motion.div>
    </section>
  );
};

export default ProjectSections;
