"use client";

import React, { useRef } from "react";
import SkillCard from "../globals/skill_card";
import { navbarElementsList, skillsList } from "@/utils/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import InBetween from "./in_between";
import BgWrapper from "../globals/bg_wrapper";
import { useActiveNavbar } from "@/hooks/use_active_navbar";

const SkillsSection = () => {
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[1],
  });

  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  const scaleContent = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotateContent = useTransform(scrollYProgress, [0, 1], [-2, 0]);

  const variants = {
    initial: {
      y: 5,
      opacity: 0,
    },
    show: (i: number) => ({
      y: 0,
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: "120",
        duration: 0.4,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section
      ref={transitionRef}
      id="skills"
      className="flex flex-col min-h-screen w-full justify-center items-center"
    >
      <InBetween
        iconType="gear"
        title="What do I use to get there?"
        overallYprogress={scrollYProgress}
      />

      <motion.div
        ref={contentRef}
        style={{ scale: scaleContent, rotate: rotateContent }}
      >
        <BgWrapper
          customClassName={
            "py-14 relative z-10 w-full min-h-screen flex flex-1 justify-center items-center"
          }
        >
          {/* GRID: Skills cards */}
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="show"
            className="flex flex-wrap gap-4 items-center justify-center w-[min(800px,100%)] max-sm:px-8"
          >
            {skillsList.map((skill, index) => {
              return (
                <motion.div
                  key={skill.title}
                  variants={variants}
                  custom={index}
                  className="p-4 mx-2 border-2 border-slate-200 rounded-xl w-[min(100px,100%)]"
                >
                  <SkillCard
                    title={skill.title}
                    iconPath={skill.iconPath}
                    width={skill.width}
                    height={skill.height}
                    darkIconPath={skill.darkIconPath}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </BgWrapper>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
