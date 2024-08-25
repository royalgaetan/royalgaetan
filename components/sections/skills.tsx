"use client";

import React, { useRef } from "react";
import SkillCard from "../globals/skill_card";
import { navbarElementsList, skillsList } from "@/utils/constants";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import HeadingWithIcons from "../globals/headings_with_icons";
import { useActiveNavbar } from "@/hooks/use_active_navbar";

const SkillsSection = () => {
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[3],
  });
  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start center", "end end"],
  });

  const getCategoryY = (index: number): MotionValue<number> => {
    return useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  };

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

  const skillCategories = [
    { category: "frontend", title: "Frontend" },
    { category: "backend", title: "Backend" },
    { category: "database", title: "Database" },
    { category: "mobile", title: "Mobile" },
    { category: "tools", title: "Worth metioning" },
  ];

  return (
    <section
      id="skills"
      ref={contentRef}
      className="flex flex-col w-full justify-center items-center"
    >
      <HeadingWithIcons
        title="Skill Set"
        iconName="skillset"
        customClassName="max-md:mb-5 mt-28 mb-20"
      />

      <div ref={transitionRef}>
        {/* GRID: Skills cards */}
        {skillCategories.map((cat, i) => {
          const catElements = skillsList.filter(
            (skill) => skill.category == cat.category
          );
          return (
            <div
              key={i}
              className="flex flex-col w-full justify-center items-center"
            >
              <motion.h3
                style={{ y: getCategoryY(i + 1) }}
                initial={{ y: 0 }}
                className="text-slate-300 text-5xl max-md:text-4xl max-md:mt-14 mt-11 mb-3 max-md:mb-1 font-medium"
              >
                {cat.title}
              </motion.h3>
              <motion.div
                variants={variants}
                initial="initial"
                whileInView="show"
                className="flex flex-wrap gap-4 h-fit items-center justify-center w-[min(650px,90vw)] max-sm:px-2"
              >
                {catElements.map((skill, index) => {
                  return (
                    <SkillCard
                      key={skill.title}
                      variants={variants}
                      index={index}
                      title={skill.title}
                      iconPath={skill.iconPath}
                      width={skill.width}
                      height={skill.height}
                      darkIconPath={skill.darkIconPath}
                    />
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
