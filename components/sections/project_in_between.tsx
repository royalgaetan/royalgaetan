"use client";

import { cn } from "@/lib/utils";
import { motion, MotionValue, useTransform } from "framer-motion";

const ProjectInBetween = ({
  overallYprogress,
}: {
  overallYprogress: MotionValue<number>;
}) => {
  const scale = useTransform(overallYprogress, [0.6, 1], [1, 0.8]);
  const rotate = useTransform(overallYprogress, [0.6, 1], [0, -5]);

  const firstIntroOpacity = useTransform(
    overallYprogress,
    [0, 0.045, 0.08, 0.15],
    [0, 1, 1, 0]
  );
  const firstIntroY = useTransform(
    overallYprogress,
    [0, 0.045, 0.08, 0.15],
    [15, 0, 0, -35]
  );

  const secondIntroOpacity = useTransform(
    overallYprogress,
    [0.17, 0.215, 0.25, 0.32],
    [0, 1, 1, 0]
  );
  const secondIntroY = useTransform(
    overallYprogress,
    [0.17, 0.215, 0.25, 0.32],
    [15, 0, 0, -35]
  );

  const thirdIntroOpacity = useTransform(
    overallYprogress,
    [0.34, 0.385, 0.42, 0.49],
    [0, 1, 1, 0]
  );
  const thirdIntroY = useTransform(
    overallYprogress,
    [0.34, 0.385, 0.42, 0.49],
    [15, 0, 0, -35]
  );

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 flex flex-col dark:bg-neutral-900 bg-slate-200 min-h-[450vh] pt-12 w-full justify-start items-center"
    >
      <div className="relative flex flex-col h-fit w-[min(450px,90vw)] justify-center items-center">
        {/* Intro: 1st part */}
        <motion.div
          id="aboutsection"
          initial={{ opacity: 0, y: 0 }}
          style={{ opacity: firstIntroOpacity, y: firstIntroY }}
          className="absolute top-0 z-0 flex flex-col justify-center items-center mt-28"
        >
          <motion.p className="mt-4 -mb-1 text-sm dark:text-white text-slate-600 font-medium max-sm:px-5">
            Hi, I'm
          </motion.p>

          <motion.h2 className="text-center dark:text-white font-semibold text-slate-900 text-3xl leading-relaxed tracking-wide max-sm:px-5">
            Royal GAETAN
          </motion.h2>

          <motion.h3 className="text-center font-semibold text-sm mt-3 leading-relaxed tracking-wide text-[#F31260]/70 dark:text-[#F31260]">
            A Full-Stack Mobile and Web Developer who creates apps that bring
            value and solve real-life problems
          </motion.h3>
        </motion.div>

        {/* Intro: 2nd part */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          style={{ opacity: secondIntroOpacity, y: secondIntroY }}
          className="absolute top-0 z-10 flex flex-col justify-center items-center mt-36"
        >
          <motion.p className="mt-4 -mb-1 text-sm dark:text-white text-slate-600 font-medium max-sm:px-5 text-center">
            <span className="block mb-1 italic">
              - Create stunning designs takes time
            </span>
            <span className="block mb-1 italic">
              - Create fully functional apps is hard
            </span>
            <span className="block mb-1 italic">
              - Create apps that provide value is a challenge
            </span>
          </motion.p>
        </motion.div>

        {/* Intro: 3rd part */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          style={{ opacity: thirdIntroOpacity, y: thirdIntroY }}
          className="absolute top-0 z-20 flex flex-col justify-center items-center mt-32"
        >
          <motion.p className="text-center text-sm dark:text-white text-slate-600 font-medium max-sm:px-5">
            From User interactions (Social Networks) to Complex B2B apps
            (Dashboards, Automations, Data Visualisation)
            <br />
            <br />
            Over the last 4 years I've been partaking in projects (as solo or
            with teams) that mix all these 3 key factors to build world-class
            top-notch Apps
            <br />
            <br />
            <b> Beautiful, Bug-free and Useful</b>
            <br />
            <br />
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectInBetween;
