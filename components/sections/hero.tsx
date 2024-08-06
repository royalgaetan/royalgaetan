"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveNavbar } from "@/hooks/use_active_navbar";
import { navbarElementsList } from "@/utils/constants";

const HeroSection = () => {
  const contentRef = useActiveNavbar({
    elementToActivate: navbarElementsList[0],
  });

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

  return (
    <section
      ref={contentRef}
      id="home"
      className="flex min-h-screen w-full text-center px-5 items-center justify-center dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_35%_40%_at_50%_-12%,rgba(100,116,139,0.7),rgba(255,255,255,0))] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:16px_16px] dark:bg-[length:100%_100%]"
    >
      <motion.div
        variants={animVariants}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
      >
        <motion.h1
          custom={0}
          variants={animVariants}
          className="dark:text-white text-slate-900 font-medium text-4xl mb-8 max-sm:mb-5 leading-tight tracking-tight"
        >
          Quality Apps for Meaningful Impact
        </motion.h1>
        <motion.h2
          custom={1}
          variants={animVariants}
          className="dark:text-gray-400 text-gray-600 text-lg max-sm:text-sm leading-relaxed tracking-wide w-[min(800px,100%)] max-sm:px-5"
        >
          I believe that great products, great people, and great teams improve
          our society.
          <br />
          So I aim to create apps that bring people together and improve lives.
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
    </section>
  );
};

export default HeroSection;
