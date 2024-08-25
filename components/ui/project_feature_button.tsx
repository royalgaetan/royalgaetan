import { cn } from "@/lib/utils";
import useMouse from "@react-hook/mouse-position";
import React, { useEffect, useRef } from "react";
import { ProjectFeature } from "@/utils/type";

const ProjectFeatureButton = ({
  feature,
  isActive,
  key,
  onMouseMove,
  onMouseLeave,
  onMouseEnter,
  onClick,
  onModalTrigger,
}: {
  onMouseMove: (pos: any) => void;
  onMouseLeave: () => void;
  onMouseEnter: (feature: ProjectFeature) => void;
  onClick: (feature: ProjectFeature) => void;
  onModalTrigger: (feature: ProjectFeature) => void;
  feature: ProjectFeature;
  isActive: boolean;
  key: React.Key;
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const mouse = useMouse(buttonRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  useEffect(() => {
    if (mouse.x && mouse.y) {
      const x = parseInt(mouse.x.toString());
      const y = parseInt(mouse.y.toString());

      onMouseMove({ x, y });
    }
  }, [mouse, onMouseMove]);

  return (
    <div key={key} ref={buttonRef} className="w-full">
      {/* Mobile Screen Button */}
      <div className="max-sm:flex hidden w-full">
        <button
          onClick={() => onModalTrigger(feature)}
          className="mb-3 group/button flex-1 items-center justify-center w-full"
        >
          <div
            className={cn(
              "hover:bg-slate-200/60 group-hover/button:text-slate-500 dark:group-hover/button:bg-neutral-600/80 dark:group-hover/button:text-neutral-200",
              "text-slate-400 dark:text-neutral-400/90 bg-transparent dark:bg-neutral-900/60",
              "rounded-xl text-sm text-left cursor-pointer w-full px-4 py-2 font-medium transition-all duration-200",
              isActive
                ? "font-semibold text-slate-600 dark:text-neutral-300"
                : ""
            )}
          >
            {feature.tabName}
          </div>
        </button>
      </div>

      {/* Large Screen Button */}
      <button
        onClick={() => onClick(feature)}
        onMouseOver={() => onMouseEnter(feature)}
        onFocus={() => onMouseEnter(feature)}
        onMouseOut={() => onMouseLeave()}
        onBlur={() => onMouseLeave()}
        className="md:flex hidden mb-3 group/button flex-1 items-center justify-center w-full"
      >
        <div
          className={cn(
            "hover:bg-slate-200/60 group-hover/button:text-slate-500 dark:group-hover/button:bg-neutral-600/80 dark:group-hover/button:text-neutral-200",
            "text-slate-400 dark:text-neutral-500 bg-transparent dark:bg-neutral-700/50",
            "rounded-xl text-sm text-left cursor-pointer w-full px-4 py-2 font-medium transition-all duration-200",
            isActive ? "font-semibold text-slate-600 dark:text-neutral-300" : ""
          )}
        >
          {feature.tabName}
        </div>
      </button>
    </div>
  );
};

export default ProjectFeatureButton;
