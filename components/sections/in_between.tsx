"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import {
  BadgeIcon,
  EmojiIcon,
  GearIcon,
  LuMouseIcon,
  MessageChatIcon,
  WandIcon,
} from "../ui/icons_adaptive";

const InBetween = ({
  title,
  overallYprogress,
  iconType,
}: {
  overallYprogress: MotionValue<number>;
  title: string;
  iconType: string;
}) => {
  const scale = useTransform(overallYprogress, [0, 1], [1, 0.8]);
  const rotate = useTransform(overallYprogress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 dark:bg-neutral-900 bg-slate-200 h-screen w-full justify-center items-center"
    >
      <div className="flex flex-col h-screen w-full justify-center items-center">
        <h2 className="dark:text-white text-slate-900 font-medium text-2xl mb-8 max-sm:mb-5 leading-tight tracking-tight">
          {title}
        </h2>
        <div>
          {iconType === "" && <LuMouseIcon />}
          {iconType === "emoji" && <EmojiIcon />}
          {iconType === "gear" && <GearIcon />}
          {iconType === "wand" && <WandIcon />}
          {iconType === "badge" && <BadgeIcon />}
          {iconType === "chat" && <MessageChatIcon />}
        </div>
      </div>
    </motion.div>
  );
};

export default InBetween;
