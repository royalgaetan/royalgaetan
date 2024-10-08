"use client";

import { useTheme } from "next-themes";
import React from "react";
import {
  LuSmile,
  LuMouse,
  LuBadgeCheck,
  LuWand2,
  LuMessageCircle,
} from "react-icons/lu";
import { FaGear } from "react-icons/fa6";

export const LuMouseIcon = () => {
  const { theme } = useTheme();

  return (
    <LuMouse
      size={"1.8em"}
      color={theme === "dark" ? "white" : "#0f172a"}
      className="center mt-1 animate-bounce"
    />
  );
};

export const EmojiIcon = () => {
  const { theme } = useTheme();

  return (
    <LuSmile
      size={"1.8em"}
      color={theme === "dark" ? "white" : "#0f172a"}
      className="center mt-1 animate-bounce "
    />
  );
};

export const GearIcon = () => {
  const { theme } = useTheme();

  return (
    <FaGear
      size={"1.8em"}
      color={theme === "dark" ? "white" : "#0f172a"}
      className="center mt-1 animate-spin"
    />
  );
};

export const WandIcon = () => {
  const { theme } = useTheme();

  return (
    <LuWand2
      size={"1.8em"}
      color={theme === "dark" ? "white" : "#0f172a"}
      className="center mt-1 animate-pulse"
    />
  );
};

export const BadgeIcon = () => {
  const { theme } = useTheme();

  return (
    <LuBadgeCheck
      size={"1.8em"}
      color={theme === "dark" ? "white" : "#0f172a"}
      className="center mt-1 animate-ping"
    />
  );
};

export const MessageChatIcon = () => {
  const { theme } = useTheme();

  return (
    <div className="relative animate-pulse">
      <LuMessageCircle
        size={"1.8em"}
        color={theme === "dark" ? "white" : "#0f172a"}
        className="center mt-1"
      />
      <div className="w-3 h-3 flex justify-center items-center absolute -top-1 -right-1 z-10 rounded-full bg-[#F31260] text-white text-xs p-2">
        1
      </div>
    </div>
  );
};
