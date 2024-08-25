"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

const AnimatedImage = ({
  path,
  overallYprogress,
  overallYprogressArray,
}: {
  path: string;
  overallYprogress: MotionValue<number>;
  overallYprogressArray: number[];
}) => {
  const imageOpacity = useTransform(
    overallYprogress,
    overallYprogressArray,
    [0, 0, 0.4, 1, 1]
  );
  const imageY = useTransform(
    overallYprogress,
    overallYprogressArray,
    [25, 20, 15, 5, 0]
  );

  return (
    <motion.div className="flex flex-wrap min-w-[23vw]">
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        style={{ opacity: imageOpacity, y: imageY }}
        src={path}
        alt={path}
        className="object-top object-scale-down w-full h-full"
      />
    </motion.div>
  );
};

export default AnimatedImage;
