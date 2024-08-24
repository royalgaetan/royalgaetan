import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HeadingWithIcons = ({
  title,
  iconName,
  customClassName,
}: {
  title: string;
  iconName: string;
  customClassName?: string;
}) => {
  type IconMap = {
    path: string;
    size: number[];
    rotation: string[];
    animation: string;
  };

  const getIconData = (icon: string): IconMap => {
    switch (icon) {
      case "work":
        return {
          path: "/svg/headings icons/star.svg",
          size: [15, 25, 15],
          animation: "animate-pulse",
          rotation: ["0deg", "0deg", "0deg"],
        } as IconMap;
      case "skillset":
        return {
          path: "/svg/headings icons/puzzle.svg",
          size: [15, 25, 15],
          animation: "animate-bounce",
          rotation: ["-14deg", "20deg", "-20deg"],
        } as IconMap;

      case "philosophy":
        return {
          path: "/svg/headings icons/lightbulb.svg",
          size: [35, 25, 15],
          animation: "animate-pulse",
          rotation: ["-13deg", "25deg", "-16deg"],
        } as IconMap;
      case "experience":
        return {
          path: "/svg/headings icons/compass.svg",
          size: [35, 25, 15],
          animation: "animate-spin",
          rotation: ["-13deg", "25deg", "-16deg"],
        } as IconMap;
      default:
        return {
          path: "",
          size: [0, 0, 0],
          animation: "",
          rotation: ["0deg", "0deg", "0deg"],
        } as IconMap;
    }
  };

  return (
    <div
      className={cn(
        "flex flex-1 w-full items-center justify-center",
        customClassName
      )}
    >
      <h2 className="relative text-center dark:text-white text-slate-700 font-semibold text-6xl leading-relaxed tracking-wide max-sm:px-5">
        <span>{title}</span>

        {/* Icons */}
        <Image
          src={getIconData(iconName)?.path}
          alt={iconName}
          width={getIconData(iconName)?.size[0]}
          height={getIconData(iconName)?.size[0]}
          style={{ rotate: getIconData(iconName)?.rotation[0] }}
          className={cn(
            "object-scale-down absolute top-10 -left-7",
            iconName === "experience" ? "top-8 -left-10" : "",
            iconName === "philosophy" ? "top-2 -left-8" : "",
            getIconData(iconName)?.animation
          )}
        />

        <Image
          src={getIconData(iconName)?.path}
          alt={iconName}
          width={getIconData(iconName)?.size[1]}
          height={getIconData(iconName)?.size[1]}
          style={{ rotate: getIconData(iconName)?.rotation[1] }}
          className={cn(
            "object-scale-down absolute top-2 -right-7 animate-pulse",
            getIconData(iconName)?.animation
          )}
        />

        <Image
          src={getIconData(iconName)?.path}
          alt={iconName}
          width={getIconData(iconName)?.size[2]}
          height={getIconData(iconName)?.size[2]}
          style={{ rotate: getIconData(iconName)?.rotation[2] }}
          className={cn(
            "object-scale-down absolute top-[4.4rem] -right-4 animate-pulse",
            getIconData(iconName)?.animation
          )}
        />
      </h2>
    </div>
  );
};

export default HeadingWithIcons;
