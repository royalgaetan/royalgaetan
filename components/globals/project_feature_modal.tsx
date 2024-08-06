"use client";

import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useNavbarContext } from "@/providers/navbar_provider";
import ProjectFeaturePreview from "./project_feature_preview";
import { ProjectFeature } from "@/utils/type";
import { cn } from "@/lib/utils";

const ProjectFeatureModal = ({ feature }: { feature: ProjectFeature }) => {
  const { isDialogOpen, setIsDialogOpen } = useNavbarContext();

  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className="fixed inset-0 bg-black/30 dark:bg-black/10 dark:backdrop-blur-sm" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          className={cn(
            "w-min h-min",
            feature.previewType === "text"
              ? "dark:bg-neutral-950 bg-white min-w-[100vw] h-[100vh] pr-8 pt-14 overflow-y-scroll no-scrollbar"
              : ""
          )}
        >
          <ProjectFeaturePreview featureSelected={feature} x={0} y={0} />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ProjectFeatureModal;
