"use client";

import { FullProject, ProjectFeature } from "@/utils/type";
import React, { useState } from "react";
import ProjectFeaturePreview, {
  EmptyProjectFeaturePreview,
  MiniProjectIntro,
} from "../globals/project_feature_preview";
import ProjectFeatureModal from "../globals/project_feature_modal";
import { useNavbarContext } from "@/providers/navbar_provider";
import ProjectFeatureButton from "../ui/project_feature_button";

const FullProjectSection = ({ project }: { project: FullProject }) => {
  const [{ x, y }, setmousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState<ProjectFeature | null>(
    null
  );
  const [hoveredFeature, setHoveredFeature] = useState<ProjectFeature | null>(
    null
  );

  const { setIsDialogOpen } = useNavbarContext();

  return (
    <div className="relative flex md:flex-1 max-sm:flex-col-reverse md:gap-5 gap-2 justify-start items-center h-full md:h-[100vh] w-[100vw] px-10 lg:px-[20%] overflow-y-auto overflow-x-hidden">
      {/* Left Side Buttons: Home, Features, etc. */}
      <div className="flex flex-col md:max-h-[80vh] max-h-full md:w-[min(300px,100%)] w-[80vw] md:pb-0 pb-14">
        {project.features.map((feature) => {
          return (
            <ProjectFeatureButton
              key={feature.tabName}
              isActive={feature.tabName === activeFeature?.tabName}
              feature={feature}
              onMouseLeave={() => {
                // Clean current hovered feature
                setHoveredFeature(null);
              }}
              onMouseEnter={(feature) => {
                // Set New feature as hovered
                setHoveredFeature(null);
                setHoveredFeature(feature);
              }}
              onClick={(feature) => {
                // Set/unset New feature clicked
                if (
                  activeFeature != null &&
                  activeFeature?.tabName === feature.tabName
                ) {
                  setActiveFeature(null);
                } else {
                  setActiveFeature(feature);
                }
              }}
              onModalTrigger={(feature) => {
                // Set New feature clicked as active
                setActiveFeature(feature);

                // Display Modal
                setIsDialogOpen(true);
              }}
              onMouseMove={({ x, y }) => {
                setmousePosition({ x, y });
              }}
            />
          );
        })}
      </div>

      {/* Mini Intro: visible on Mobile Screen only */}
      <div className="md:hidden flex flex-col mb-8 mt-[15vh] w-[74vw]">
        <MiniProjectIntro
          title="Wesh"
          description="
          Tap these buttons to walkthrough the app: from its history to its
          features"
        />
      </div>

      {/* Right Side: Content (Preview + Text) */}
      {/* Right Side: Visible only on large screens */}
      <div className="sticky top-0 hidden md:flex justify-center items-center md:max-h-[100vh] h-full w-full no-scrollbar overflow-y-scroll">
        {/* If Project Feature Contains Media to preview (Image/Video) */}
        {hoveredFeature != null ? (
          <ProjectFeaturePreview featureSelected={hoveredFeature} x={x} y={y} />
        ) : (
          activeFeature != null && (
            <ProjectFeaturePreview
              featureSelected={activeFeature}
              x={x}
              y={y}
            />
          )
        )}

        {hoveredFeature == null && activeFeature == null && (
          <EmptyProjectFeaturePreview />
        )}
      </div>

      {/* Modal: only visible on mobile screens */}
      {activeFeature && <ProjectFeatureModal feature={activeFeature} />}
    </div>
  );
};

export default FullProjectSection;
