"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useActiveNavbar } from "@/hooks/use_active_navbar";
import { navbarElementsList } from "@/utils/constants";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[0],
  });
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "1 0.4"],
  });
  const { theme } = useTheme();

  const animVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.4 * i },
    }),
  };

  const leftHillX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const leftHillY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const leftHillOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const rightHillX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const rightHillY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rightHillOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const middleHillY = useTransform(scrollYProgress, [0, 0.7], ["0%", "50%"]);

  return (
    <section
      ref={contentRef}
      id="home"
      className="flex flex-col w-full text-center items-center justify-center dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_35%_40%_at_50%_-12%,rgba(100,116,139,0.7),rgba(255,255,255,0))] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:16px_16px] dark:bg-[length:100%_100%]"
    >
      <motion.div
        variants={animVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center max-sm:min-h-[95vh] min-h-[85vh] w-full max-sm:px-5 px-10 "
      >
        <motion.h1
          custom={0}
          variants={animVariants}
          className="dark:text-white text-slate-900 font-medium text-4xl mb-8 mt-32 max-sm:mb-5 max-sm:mt-6 leading-tight tracking-tight"
        >
          Quality Apps for Meaningful Impact
        </motion.h1>
        <motion.h2
          custom={1}
          variants={animVariants}
          className="dark:text-gray-400 text-gray-600 text-base max-sm:text-sm leading-relaxed tracking-wide w-[min(800px,100%)] max-sm:px-5"
        >
          I believe that great products, great people, and great teams improve
          our society.
          <br />
          So I create apps that bring people together and improve lives.
        </motion.h2>
        <motion.div custom={2} variants={animVariants}>
          <Link
            href="#aboutsection"
            className="flex flex-col justify-center items-center mt-10 cursor-pointer"
          >
            <p className="text-sm dark:text-slate-300 text-[#F31260] font-bold animate-pulse mb-4">
              See how
            </p>
          </Link>
        </motion.div>
      </motion.div>

      {/* Parallax Effect: content */}
      <div className="relative w-full max-sm:h-[35vh] max-lg:h-[55vh] h-[80vh] flex items-end">
        <div className="flex mb-14 gap-x-[min(30vw,200px)] items-end justify-between absolute z-10 w-full h-full overflow-hidden">
          <motion.img
            style={{ y: middleHillY }}
            src={
              theme === "dark"
                ? "/svg/parallax/hill middle dark.svg"
                : "/svg/parallax/hill middle light.svg"
            }
            alt="hill middle"
            key="hill middle"
            className="absolute left-0 z-10 object-cover w-full h-full dark:opacity-10"
          />

          <motion.img
            style={{ x: leftHillX, y: leftHillY, opacity: leftHillOpacity }}
            src={
              theme === "dark"
                ? "/svg/parallax/hill left dark.svg"
                : "/svg/parallax/hill left light.svg"
            }
            alt="hill left"
            key="hill left"
            className="absolute left-0 z-20 object-cover w-full h-full"
          />

          <motion.img
            style={{ x: rightHillX, y: rightHillY, opacity: rightHillOpacity }}
            src={
              theme === "dark"
                ? "/svg/parallax/hill right dark.svg"
                : "/svg/parallax/hill right light.svg"
            }
            alt="hill right"
            key="hill right"
            className="absolute right-0 z-30 object-cover w-full h-full"
          />
        </div>

        <div className="absolute z-20 w-full max-sm:h-[30vh] max-lg:h-[40vh] h-[55vh]">
          <Image
            src={
              theme === "dark"
                ? "/svg/parallax/african plain dark.svg"
                : "/svg/parallax/african plain light.svg"
            }
            alt="African plain"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
