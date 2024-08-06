import React from "react";
import { FaFolder } from "react-icons/fa";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectType } from "@/utils/type";

const ProjectCard2 = ({ title, subTitle, toolsUsed }: ProjectType) => {
  return (
    <div className="group/projectcard transition-all duration-300 cursor-pointer hover:scale-105 flex flex-col bg-[#04161E] w-[min(250px,100%)] h-[220px] rounded-lg mb-1">
      {/* Card Header: Image */}
      <div className="ml-3 mt-3 p-3 w-full relative mb-2">
        <FaFolder size={"3em"} color="gray" />
      </div>
      {/* Card Content  */}
      <div className="px-4">
        <div className="flex justify-between">
          <h2
            className={`font-semibold text-white group-hover/projectcard:text-[#F31260] w-full text-base`}
          >
            {title}
          </h2>
        </div>
        <p className="text-ellipsis text-neutral-400 text-xs mt-2">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard2;
