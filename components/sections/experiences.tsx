"use client";

import React, { useRef, useState, useTransition } from "react";
import { experiencesList, navbarElementsList } from "@/utils/constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceBadge from "../globals/experience_badge";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import BgWrapper from "../globals/bg_wrapper";
import { LuLoader2, LuCheck } from "react-icons/lu";
import HeadingWithIcons from "../globals/headings_with_icons";

enum downloadCVIconValues {
  none,
  loading,
  complete,
}

const ExperiencesSection = () => {
  const { theme } = useTheme();

  const [downlodCVIconType, setDownlodCVIconType] =
    useState<downloadCVIconValues>(downloadCVIconValues.none);
  const [isLoading, setTransition] = useTransition();

  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  const scaleContent = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotateContent = useTransform(scrollYProgress, [0, 1], [-1, 0]);

  const handleCVdownload = async () => {
    setDownlodCVIconType(downloadCVIconValues.loading);
    setTransition(async () => {
      await new Promise((res) => setTimeout(res, 1000));

      setDownlodCVIconType(downloadCVIconValues.complete);
      await new Promise((res) => setTimeout(res, 1000));

      window.open(`${process.env.NEXT_PUBLIC_CV_DOWNLOAD_LINK}`, "_blank");
      setDownlodCVIconType(downloadCVIconValues.none);
    });
  };

  return (
    <section
      ref={transitionRef}
      className="flex flex-col min-h-screen max-w-[100vw] justify-center items-center"
    >
      <HeadingWithIcons
        title="Experience"
        iconName="experience"
        customClassName="mt-28 mb-0"
      />

      <motion.div
        id="experience"
        className="w-full"
        style={{ scale: scaleContent, rotate: rotateContent }}
      >
        <BgWrapper
          customClassName={
            "relative z-10 max-w-[100vw] min-h-screen flex flex-1 justify-center items-center"
          }
        >
          <div className="max-sm:px-5 w-[min(800px,100%)] flex flex-col justify-center items-center">
            <VerticalTimeline
              lineColor={theme === "dark" ? "#e5e5e5" : "rgb(229, 229, 229)"}
              animate={false}
            >
              {experiencesList.map((experience) => {
                return (
                  <VerticalTimelineElement
                    key={experience.companyName}
                    visible={true}
                    className="p-0"
                    contentStyle={{
                      borderRadius: "0.75rem",
                      // background: theme === "dark" ? "#262626" : "",
                      background: "transparent",
                      border: "2px solid #e5e5e5",
                      boxShadow: "none",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid #e5e5e5",
                    }}
                    iconStyle={experience.iconStyle}
                    icon={
                      <motion.div
                        initial={{ scale: 0.4, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: "200",
                          duration: 0.7,
                          delay: 0.3,
                        }}
                        className="w-full min-h-full flex items-center justify-center p-1"
                      >
                        <Image
                          src={experience.logoPath}
                          alt={experience.companyName}
                          width="40"
                          height="40"
                        />
                      </motion.div>
                    }
                  >
                    <motion.div
                      className="w-full"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: "200",
                        duration: 0.7,
                        delay: 0.3,
                      }}
                    >
                      <span className="text-[0.3rem] font-light">
                        {experience.year}
                        <br />
                      </span>

                      <h3 className="text-1xl font-bold dark:text-slate-100 text-neutral-700 mb-0">
                        {experience.title}
                      </h3>

                      <span className="text-sm font-semibold dark:text-slate-300 text-neutral-500 mb-1">
                        @{experience.companyName}
                      </span>

                      <span className="text-neutral-500 dark:text-slate-400 text-[0.7em]">
                        {experience.content}
                      </span>

                      <div className="mt-2">
                        {experience.toolsUsed.map((tool) => {
                          return <ExperienceBadge key={tool.title} {...tool} />;
                        })}
                      </div>
                    </motion.div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
            <button
              disabled={isLoading}
              onClick={handleCVdownload}
              className="flex flex-1 items-center justify-center hover:scale-105 cursor-pointer transition-all duration-300 text-sm dark:text-neutral-400 text-neutral-500 py-2 w-[200px] bg-white rounded-xl border-2 border-neutral-200 dark:border-2 dark:bg-neutral-900 mb-10"
            >
              {downlodCVIconType == downloadCVIconValues.loading && (
                <LuLoader2 className="animate-spin" />
              )}
              {downlodCVIconType == downloadCVIconValues.complete && (
                <LuCheck className="" />
              )}
              <span className="ml-1">Download CV</span>
            </button>
          </div>
        </BgWrapper>
      </motion.div>
    </section>
  );
};

export default ExperiencesSection;
