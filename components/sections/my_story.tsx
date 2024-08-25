"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AnimatedText from "../globals/animated_text";
import AnimatedImage from "../globals/animated_image";

const MyStorySection = () => {
  const transitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start center", "end end"],
  });

  return (
    <section
      ref={transitionRef}
      id="story"
      className="flex flex-col justify-start items-start w-[min(670px,85vw)] mb-24 max-md:mb-10"
    >
      <div className="flex flex-1 justify-start w-full">
        <motion.p className="max-md:text-xs text-xs w-[40%] max-md:w-[70vw]">
          <AnimatedText
            key={0}
            overallYprogress={scrollYProgress}
            overallYprogressArray={[0, 0.4]}
            text="I started my programming journey at 14, thanks to my brother, while I was home on vacation from boarding school. <br> At first, it was about creating funny and somewhat useful things. <br> I remember creating my first major project: a social platform for students using JavaScript/Bootstrap for the front-end, SQL for the database, and the then-popular PHP for the back-end. <br> Although it wasn’t as successful as I had hoped, it was a tremendous learning experience :) <br> But that’s not the most important part..."
          />
        </motion.p>
      </div>

      <div className="flex flex-1 justify-end w-full">
        <motion.p className="max-md:text-xs text-xs w-[40%] max-md:w-[70vw] max-md:mt-10 mt-4">
          <AnimatedText
            key={1}
            overallYprogress={scrollYProgress}
            overallYprogressArray={[0.45, 0.7]}
            text="Fast forward to four years ago, my journey took a transformative turn when I spent almost 3 months working with business owners from a specific niche. <br> I witnessed firsthand how software, apps, and websites were transforming their entire businesses: from staff management and operational efficiency to decision-making. <br> This led to cost savings, increased income, data-driven decisions, and even more free time. <br> Some of them, for the first time in their lives, took a vacation with their families—how awesome is that?"
          />
        </motion.p>
      </div>

      <div className="flex flex-1 justify-start w-full">
        <motion.p className="max-md:text-xs text-xs w-[40%] max-md:w-[70vw] max-md:mt-10 mt-4">
          <AnimatedText
            key={2}
            overallYprogress={scrollYProgress}
            overallYprogressArray={[0.75, 0.85]}
            text="Since then, I’ve been dedicated to creating apps that provide genuine and real value to people in their everyday lives and to businesses, whether large or small."
          />
        </motion.p>
      </div>

      <div className="flex flex-1 justify-end max-md:justify-center w-full">
        <motion.div className="relative w-[200px] h-[200px] max-md:w-60 max-md:h-60 mr-32 mt-0 max-md:mt-10 max-md:mr-0">
          <AnimatedImage
            key={3}
            overallYprogress={scrollYProgress}
            overallYprogressArray={[0.87, 0.9, 0.94, 0.97, 1]}
            path="/assets/brushed.png"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MyStorySection;
