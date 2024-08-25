"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import HeadingWithIcons from "../globals/headings_with_icons";
import AnimatedText from "../globals/animated_text";

const PhilosophySection = () => {
  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={transitionRef}
      id="skills"
      className="flex flex-col justify-center items-center w-[min(500px,85vw)]"
    >
      <HeadingWithIcons
        title="My Philosophy"
        iconName="philosophy"
        customClassName="mt-44 mb-3 flex max-md:hidden"
      />
      <HeadingWithIcons
        title="Philosophy"
        iconName="philosophy"
        customClassName="mt-44 mb-3 hidden max-md:flex"
      />

      {/* GRID: Skills cards */}
      <h3 className="font-medium max-md:text-sm max-md:mt-2">
        My thoughts on Programing Languages
      </h3>
      <motion.p className="max-md:text-xs text-xs w-full md:w-full mt-6">
        <AnimatedText
          key={2}
          overallYprogress={scrollYProgress}
          overallYprogressArray={[0, 0.35]}
          text="I’ve worked with several languages to build apps (both mobile and web). <br> Initially, when I learned a new language, I felt like I was committed to it for life, rarely considering other options (not a bad approach in itself)."
        />
      </motion.p>

      <motion.p className="max-md:text-xs text-xs w-full md:w-full mt-6">
        <AnimatedText
          key={2}
          overallYprogress={scrollYProgress}
          overallYprogressArray={[0.4, 0.7]}
          text="Recently, however, my philosophy has evolved. <br> Now, I adopt a more pragmatic approach: learning new languages or frameworks quickly, deeply, and with intent (applied to real-world scenarios)."
        />
      </motion.p>

      <motion.p className="max-md:text-xs text-xs w-full md:w-full mt-6">
        <AnimatedText
          key={2}
          overallYprogress={scrollYProgress}
          overallYprogressArray={[0.75, 0.95]}
          text="This gives me the advantage of becoming a specialist in no time while maintaining the flexibility to switch languages or frameworks to better meet my needs or project demands. <br> It’s similar to how a blacksmith or carpenter selects the right tool—a hammer, saw, or a state-of-the-art machine—to get their work done effectively and efficiently."
        />
      </motion.p>
    </section>
  );
};

export default PhilosophySection;
