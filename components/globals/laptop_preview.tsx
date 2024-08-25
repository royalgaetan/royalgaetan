"use client";

import { getFileType } from "@/utils/functions";
import { motion, MotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { LuLoader2 } from "react-icons/lu";
import VideoContainer from "./video_container";

const LaptopPreview = ({
  previewsArray,
  overallYprogress,
  y,
}: {
  previewsArray: string[];
  overallYprogress: MotionValue<number>;
  y: MotionValue<number>;
}) => {
  const websitePreviewRef = useRef<HTMLDivElement>(null);
  const scrollY = useTransform(
    overallYprogress,
    [0.72, 0.92],
    [0, websitePreviewRef.current?.scrollHeight || 0]
  );

  useEffect(() => {
    scrollY.on("change", (v: any) => {
      if (websitePreviewRef.current) {
        // Scroll the div based on overallScroll
        websitePreviewRef.current.scrollTo({
          top: v,
          behavior: "auto", // For smooth scrolling
        });
      }
    });
  }, []);

  return (
    <motion.div
      className="relative w-full h-max max-md:-mr-[40vw] lg:-mr-[58%] -mr-[80%]"
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        scale: { type: "spring", stiffness: 130 },
      }}
    >
      {/* Laptop Mockup */}
      <motion.img
        initial={{ y: 220 }}
        src={"/assets/MacBook Mock.png"}
        alt={"/assets/MacBook Mock.png"}
        width={800}
        height={1000}
        style={{
          y: y,
        }}
        className="relative top-0 z-10 max-md:h-[55vh]"
      />

      {/* Website Preview*/}
      <motion.div
        ref={websitePreviewRef}
        className="bg-black overflow-y-scroll no-scollbar absolute z-20 top-[23px] left-[85px] h-[397px] max-md:top-[12px] max-md:left-[53px] max-md:h-[45vh]"
        initial={{ y: 220 }}
        style={{
          y: y,
        }}
      >
        {previewsArray.map((p, i) => {
          return getFileType(p) == "video" ? (
            <div
              className="relative h-fit w-full mb-2 mt-7 bg-gray-400"
              key={previewsArray[i]}
            >
              <VideoContainer
                videoUrl={previewsArray[i]}
                displayButtons={true}
                isLooped={false}
                // isAutoplayed={false}
                customClassName="absolute top-0 z-20 max-md:h-[30vh] h-[357px] relative min-w-fit"
                customVideoClassName="absolute top-0 z-0"
                buttonsPostion="items-end justify-end"
              />
              <div className="flex flex-col h-full w-full items-center justify-center absolute top-0 z-10 bg-transparent">
                <LuLoader2
                  className="animate-spin"
                  color="white"
                  size={"2rem"}
                />
              </div>
            </div>
          ) : (
            <motion.img
              src={previewsArray[i]}
              alt={previewsArray[i]}
              key={previewsArray[i]}
              width={630}
              height={0}
              className="w-fill object-cover object-top"
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default LaptopPreview;
