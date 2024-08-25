"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { navbarElementsList } from "@/utils/constants";
import InBetween from "./in_between";
import BgWrapper from "../globals/bg_wrapper";
import { useActiveNavbar } from "@/hooks/use_active_navbar";
import SkillsSection from "./skills";
import MyStorySection from "./my_story";
import PhilosophySection from "./philosophy";
import ExperiencesSection from "./experiences";

const AboutMeSection = () => {
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[2],
  });

  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "end end"],
  });

  return (
    <section
      id="about"
      ref={transitionRef}
      className="flex flex-col min-h-screen justify-start items-center"
    >
      <InBetween
        iconType="emoji"
        title="A little about me"
        overallYprogress={scrollYProgress}
      />

      <motion.div className="w-full" ref={contentRef}>
        <BgWrapper
          customClassName={
            "relative z-10 w-full min-h-screen flex flex-col justify-center items-center"
          }
        >
          <div className="flex flex-col justify-center items-center w-[min(800px,100%)] max-md:px-2 mb-24 pt-24 md:my-16">
            <MyStorySection />

            <SkillsSection />

            <PhilosophySection />

            <ExperiencesSection />
          </div>
        </BgWrapper>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;
