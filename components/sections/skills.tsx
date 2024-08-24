"use client";

import React, { useRef } from "react";
import SkillCard from "../globals/skill_card";
import { navbarElementsList, skillsList } from "@/utils/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useActiveNavbar } from "@/hooks/use_active_navbar";
import HeadingWithIcons from "../globals/headings_with_icons";

const SkillsSection = () => {
  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

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
      className="flex flex-col w-full justify-center items-center"
    >
      <HeadingWithIcons
        title="Skillset"
        iconName="skillset"
        customClassName="mt-28 mb-20"
      />

      {/* GRID: Skills cards */}
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="show"
        className="flex flex-wrap gap-4 h-fit items-center justify-center w-[min(800px,100%)] max-sm:px-8"
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
    </section>
  );
};

export default SkillsSection;
