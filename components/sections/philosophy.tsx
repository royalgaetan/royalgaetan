"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import HeadingWithIcons from "../globals/headings_with_icons";

const PhilosophySection = () => {
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
        title="My Philosophy"
        iconName="philosophy"
        customClassName="mt-28 mb-20"
      />

      {/* GRID: Skills cards */}
      <motion.p>
        My thoughts on Programing Languages I've been using several languages to
        built apps (both mobile and web) and for me when I learned one language
        I felt like married and stick to it forever, and not moving to
        alternatives or look at other ones (Not too bad as approach) <br />
      </motion.p>

      <motion.p>
        But my philosophy has shifted to a more pragmatic one, no long time ago:
        it involves learning a new language/framework as fast as possible,
        deeply and purposefully (applied to real case situations) <br />
      </motion.p>

      <motion.p>
        This give me the both benefits of being a specialist with experience in
        no time and the flexibility to switch language/framework to better suits
        my needs or project requirements.
        <br />
        <br />
        Similar to a blacksmith or a carpenter who will carefully pick either a
        hammer or a saw or a modern brand new machine to get his/her work done
      </motion.p>
    </section>
  );
};

export default PhilosophySection;
