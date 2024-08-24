"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

const MyStorySection = () => {
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
      id="story"
      className="flex flex-col justify-start items-start w-[min(670px,95vw)] mb-24"
    >
      <div className="flex flex-1 justify-start w-full">
        <motion.p className="max-md:text-sm text-xs w-full md:w-[23vw]">
          I started programming at 14, when I was introduced to that by my
          brother (I was back at home for vacation from boarding school).
          <br />
          <br />
          At the beginning it was about creating funny and some sort of useful
          stuff. I remember creating my 1st ever big project: a social platform
          for Students (with some JavaScript/Bootstrap for Front-end, SQL for
          database, backed by the popular, back then, PHP).
          <br />
          <br />
          And, Hmm that wasn't the big success as expected, but I learned a lot
          :)
          <br />
          But all of this is not that important...
        </motion.p>
      </div>

      <div className="flex flex-1 justify-end w-full">
        <motion.p className="max-md:text-sm text-xs w-full md:w-[23vw] mt-4">
          Fast forward years later... <br />
          My journey took a very transformative avenue just 4 years ago when I
          spent almost 3 months working with business owners from a particular
          niche.
          <br />
          <br />
          I witnessed from the 1st hand, how software, apps, websites (you name
          it) were transforming their entire businesses: from staff management,
          operations and processes effectiveness, to decision making.
          <br />
          <br />
          That leads to savings them costs, increasing their income, taking
          data-driven decisions and even MORE free up time (some, for the 1st
          time of their life, even took their 1st vacation with their families,
          awesome right!)
        </motion.p>
      </div>

      <div className="flex flex-1 justify-start w-full">
        <motion.p className="max-md:text-sm text-xs w-full md:w-[23vw] mt-6">
          Since then I'm committed to create apps that bring real value to
          either people (on their day to day life) or businesses (big and small
          ones)
        </motion.p>
      </div>

      <div className="flex flex-1 justify-end w-full">
        <motion.div className="relative w-[200px] h-[200px] mr-16">
          <Image
            src={"/assets/brushed.png"}
            alt={"/assets/brushed.png"}
            fill
            className="object-top object-scale-down w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MyStorySection;
