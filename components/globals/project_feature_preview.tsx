"use client";

import { LuLoader2 } from "react-icons/lu";
import { ProjectFeature } from "@/utils/type";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectFeatureTextContent } from "./project_feature_text_content";
import VideoContainer from "./video_container";

const ProjectFeaturePreview = ({
  featureSelected,
  x,
  y,
}: {
  featureSelected: ProjectFeature | null;
  x: number;
  y: number;
}) => {
  return (
    <div className="w-full h-full">
      {featureSelected != null ? (
        <div className="flex flex-1 w-full min-h-full">
          {/* Preview Device: to preview video or image type */}
          {featureSelected.previewType != "text" &&
            featureSelected.previewType != "none" && (
              <motion.div
                initial={{ scale: 1.09, opacity: 0.8 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  damping: 6,
                  stiffness: 140,
                }}
                className="flex md:mr-3 md:w-[min(60%,40vh)] w-full justify-center items-center"
              >
                <motion.div
                  style={{
                    x: x / 10,
                    y: y / 2,
                  }}
                >
                  <div className="transition-all duration-400 md:h-[70vh] md:w-[35vh] h-[90vh] w-[45vh] bg-gray-800 rounded-[1.1rem]  dark:md:shadow-slate-500/90 shadow-lg shadow-neutral-800/20">
                    <div className="flex flex-1 justify-center items-center w-full h-full relative">
                      <div className="absolute z-20">
                        {featureSelected.previewType === "video" ? (
                          <VideoContainer
                            key={featureSelected.previewPath}
                            videoUrl={featureSelected.previewPath}
                            customVideoClassName="rounded-[1.1rem]"
                            customClassName="rounded-[1.1rem]"
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                      <div>
                        {featureSelected.previewType == "image" ? (
                          <div className="bg-gray-400 h-full w-full"></div>
                        ) : (
                          <></>
                        )}
                      </div>

                      {/* Loader */}
                      <div className="flex flex-col h-full w-full items-center justify-center relative z-10 bg-transparent">
                        <LuLoader2
                          className="animate-spin"
                          color="white"
                          size={"2rem"}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

          {/* if Feature has (media to preview) && has Content: display its content only on large screens */}
          {featureSelected.previewType === "image" ||
            (featureSelected.previewType === "video" && (
              <motion.div
                className={cn(
                  "md:flex hidden flex-1 w-full justify-center items-center",
                  featureSelected.previewPath == "" ? "ml-10" : ""
                )}
              >
                <ProjectFeatureTextContent
                  contentText={featureSelected.contentText}
                />
              </motion.div>
            ))}

          {/* if Feature has only Text Content: display it */}
          {featureSelected.previewType === "text" && (
            <div
              className={cn(
                "flex-1 w-full justify-center items-center mb-10",
                featureSelected.previewPath == "" ? "ml-10" : ""
              )}
            >
              <ProjectFeatureTextContent
                contentText={featureSelected.contentText}
              />
            </div>
          )}
        </div>
      ) : (
        <EmptyProjectFeaturePreview />
      )}
    </div>
  );
};

export default ProjectFeaturePreview;

export const EmptyProjectFeaturePreview = () => {
  return (
    <>
      {/* Large screens only */}
      <div className="md:flex w-full hidden items-center justify-center">
        <div className="max-w-[min(300px,100%)]">
          <MiniProjectIntro
            title="Wesh"
            description="
          Tap these buttons to walkthrough the app, from its history to its
          features"
          />
        </div>
      </div>
      {/* Mobile Only */}
      <div className="md:hidden text-slate-400 text-center text-xs animate-pulse flex justify-center items-center h-full">
        Hover a tab to preview
      </div>
    </>
  );
};

export const MiniProjectIntro = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex-col h-full">
      <motion.h1 className="dark:text-white font-semibold text-slate-700 text-4xl leading-relaxed tracking-wide w-full">
        {title}
      </motion.h1>
      <motion.p className="dark:text-slate-300 font-medium text-slate-500 text-xs leading-snug tracking-wide w-full">
        {description}
      </motion.p>
    </div>
  );
};
