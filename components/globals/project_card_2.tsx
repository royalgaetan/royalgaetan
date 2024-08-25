"use client";

import React, { useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectType } from "@/utils/type";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { isEmpty } from "@/utils/strings_utils";
import { cn } from "@/lib/utils";
import LaptopPreview from "./laptop_preview";

const ProjectCard2 = ({
  title,
  subTitle,
  toolsUsed,
  previewsType,
  previews,
  accentColor,
  secondaryColor,
  link,
}: ProjectType) => {
  const projectContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectContainerRef,
    offset: ["start end", "end end"],
  });
  const { theme } = useTheme();
  const captionY = useTransform(scrollYProgress, [0.3, 0.5], [0, -100]);

  const GetY = (
    index: number,
    customVelocity?: number
  ): MotionValue<number> => {
    const finalIndex = previews.length - 1 - index;
    const velocity = customVelocity ?? index >= 2 ? 260 : 310;

    return useTransform(
      scrollYProgress,
      [0, 1],
      [0, -velocity - velocity * 0.7 * finalIndex]
    );
  };

  return (
    <div
      ref={projectContainerRef}
      className={cn(
        "group/projectcard flex flex-1 min-h-screen mb-1 justify-center",
        `${
          previewsType == "mobile"
            ? "w-[min(900px,85vw)] gap-[min(7rem,3vw)]"
            : "w-full relative mt-24 mb-11 overflow-x-clip"
        }`
      )}
    >
      {/* Caption */}
      <div
        className={cn(
          "relative flex flex-1 lg:pl-24",
          `${
            previewsType == "laptop"
              ? "max-w-[min(900px,85vw)] gap-[min(7rem,3vw)] justify-center"
              : ""
          }`
        )}
      >
        <motion.div
          style={{ y: captionY }}
          className={cn(
            "flex flex-col items-start justify-center",
            `${previewsType == "laptop" ? "flex flex-1" : ""}`
          )}
        >
          {/* Title */}
          <h2 className="dark:text-white text-[2.30rem] max-md:text-3xl font-bold text-black mb-4 leading-tight">
            {title}
          </h2>
          {/* Subtitle */}
          <p className="dark:text-gray-400 text-gray-600 text-sm max-md:text-xs mb-5 pr-20">
            {subTitle}
          </p>

          {/* Tool Used */}
          <div>
            {toolsUsed.map((t) => {
              return (
                <TooltipProvider key={t.title}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.img
                        src={
                          theme === "dark" && !isEmpty(t.darkIconPath)
                            ? t.darkIconPath!
                            : t.iconPath
                        }
                        alt={title}
                        className="mb-3 mr-3 cursor-pointer inline"
                        whileHover={{
                          scale: 1.2,
                        }}
                        transition={{
                          scale: { type: "spring", stiffness: 150 },
                        }}
                        width={t.width * 1.2}
                        height={t.height * 1.2}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>

          {/* CTA: view project */}
          <button
            onClick={() => {
              window.open(link, "_blank");
            }}
            className="relative inline-flex h-8 mt-5 overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span
              style={{
                position: "absolute",
                inset: "-1000%",
                animation: "spin 2s linear infinite",
                background: `conic-gradient(from 90deg at 50% 50%, ${accentColor} 0%, ${secondaryColor} 50%, ${accentColor} 100%)`,
              }}
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
            />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-[0.5rem] font-medium text-white backdrop-blur-3xl">
              View Project
            </span>
          </button>
        </motion.div>
        <div
          className={cn(
            `${previewsType == "laptop" ? "flex flex-1 w-full" : ""}`
          )}
        ></div>
      </div>

      {/* Previews */}
      <div
        className={cn(
          "flex flex-1 items-center justify-center",
          `${
            previewsType == "mobile"
              ? "relative mt-[130vh]"
              : "absolute top-0 right-0 w-fit h-fit mt-[30vh]"
          }`
        )}
      >
        {previewsType == "mobile" &&
          previews.map((p, i) => {
            const initialY = i >= 2 ? 570 : 270;
            const initialScale = 1 - i * 0.1;
            return (
              <motion.img
                key={i}
                initial={{ y: initialY }}
                src={p}
                alt={p}
                width={"190"}
                height={"320"}
                whileHover={{
                  scale: initialScale * 1.1,
                }}
                transition={{
                  scale: { type: "spring", stiffness: 150 },
                }}
                style={{
                  y: GetY(i, initialY),
                  scale: initialScale,
                  zIndex: previews.length - i,
                  width: "min(190px,22vw)",
                  right:
                    i % 2 == 0
                      ? i >= 2
                        ? "max(17.3vw,10.7rem)"
                        : "max(18vw,11.5rem)"
                      : i >= 2
                      ? "1vw"
                      : "0",
                }}
                className="rounded-xl dark:shadow-slate-500/90 shadow-lg mx-2 bg-gray-400 absolute"
              />
            );
          })}

        {previewsType == "laptop" && (
          <LaptopPreview
            y={GetY(1, 200)}
            overallYprogress={scrollYProgress}
            previewsArray={previews}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard2;
