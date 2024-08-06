"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { aboutMeContent, navbarElementsList } from "@/utils/constants";
import InBetween from "./in_between";
import BgWrapper from "../globals/bg_wrapper";
import { useActiveNavbar } from "@/hooks/use_active_navbar";
import { isEmpty } from "@/utils/strings_utils";

const AboutMeSection = () => {
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[1],
  });

  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["center center", "end end"],
  });

  const scaleContent = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotateContent = useTransform(scrollYProgress, [0, 1], [-2, 0]);

  const valuesTable = {
    opacity: [0, 1],
    y: [40, 0],
  };

  // Animation: history parts
  const useAnimationValues = (index: number) => {
    const keyframesStart = 0.66;
    const keyframesEnd = 0.77;
    const interval = (keyframesStart + keyframesEnd) / aboutMeContent.length;

    const newKeyFrames = [
      keyframesStart * interval * index,
      keyframesEnd * interval * index,
    ];

    const hOpacity = useTransform(
      scrollYProgress,
      newKeyFrames,
      valuesTable.opacity
    );
    const hY = useTransform(scrollYProgress, newKeyFrames, valuesTable.y);

    return {
      hOpacity,
      hY,
    };
  };

  return (
    <section
      id="aboutsection"
      ref={transitionRef}
      className="flex flex-col min-h-screen justify-start items-center"
    >
      <InBetween
        iconType="emoji"
        title="A little about me"
        overallYprogress={scrollYProgress}
      />

      <motion.div
        id="about"
        ref={contentRef}
        style={{ scale: scaleContent, rotate: rotateContent }}
      >
        <BgWrapper
          customClassName={
            "relative z-10 w-full min-h-screen flex flex-1 justify-center items-center"
          }
        >
          <div className="flex flex-col justify-center items-center w-[min(500px,100%)] max-sm:px-5 py-32 md:my-16">
            {aboutMeContent.map((value, index) => {
              const { hY, hOpacity } = useAnimationValues(index);

              // if "h2" then
              if (value.type === "h2") {
                return (
                  <motion.h2
                    key={value.content}
                    style={{ y: hY, opacity: hOpacity }}
                    className="text-center dark:text-white font-semibold text-slate-900 text-3xl leading-relaxed tracking-wide w-[min(800px,100%)] max-sm:px-5"
                  >
                    {value.content}
                  </motion.h2>
                );
              }
              // if "h3" then
              else if (value.type === "h3") {
                return (
                  <motion.h3
                    key={value.content}
                    style={{ y: hY, opacity: hOpacity }}
                    className={cn(
                      "text-center dark:text-white font-semibold text-sm mt-3 leading-relaxed tracking-wide",
                      !isEmpty(value.color)
                        ? "text-[#F31260]/70 dark:text-[#F31260]"
                        : ""
                    )}
                  >
                    {value.content}
                  </motion.h3>
                );
              }
              // if "hr" then
              else if (value.type === "hr") {
                return (
                  <motion.div
                    key={value.content}
                    className="min-h-[10px] w-[min(100%,300px)]"
                    style={{ y: hY, opacity: hOpacity }}
                  >
                    <hr className="mx-10 mt-6 dark:bg-white bg-gray-200" />
                  </motion.div>
                );
              }
              // if "paragraph" then
              else if (value.type === "p") {
                return (
                  <motion.p
                    key={value.content}
                    style={{ y: hY, opacity: hOpacity }}
                    className="mt-4 text-sm dark:text-white text-slate-600 font-medium max-sm:px-5"
                  >
                    {value.content}
                  </motion.p>
                );
              } else {
                return (
                  <motion.div
                    key={value.content}
                    style={{ y: hY, opacity: hOpacity }}
                  >
                    {value.content}
                  </motion.div>
                );
              }
            })}
          </div>
        </BgWrapper>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;
