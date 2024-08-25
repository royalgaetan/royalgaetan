"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

const AnimatedText = ({
  text,
  overallYprogress,
  overallYprogressArray,
}: {
  text: string;
  overallYprogress: MotionValue<number>;
  overallYprogressArray: number[];
}) => {
  const textLength = text.split(" ").length;

  const GetOpacity = (index: number): MotionValue<number> => {
    const diviser =
      (overallYprogressArray[1] - overallYprogressArray[0]) / textLength;

    const getIndexArray = [
      overallYprogressArray[0] + diviser * index - diviser,
      overallYprogressArray[0] + diviser * index,
    ];

    return useTransform(overallYprogress, getIndexArray, [0, 1]);
  };

  return (
    <motion.div className="flex flex-wrap min-w-[23vw]">
      {text.split(" ").map((word: string, i) => {
        return word.includes("<br>") ? (
          <motion.div
            initial={{ opacity: 0 }}
            style={{ opacity: GetOpacity(i + 1) }}
            className="block h-4 m-0 p-0 min-w-full"
          ></motion.div>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            style={{ opacity: GetOpacity(i + 1) }}
            className="mr-1"
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;
