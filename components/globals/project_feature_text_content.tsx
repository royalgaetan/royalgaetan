"use client";

import { cn } from "@/lib/utils";
import { isEmpty } from "@/utils/strings_utils";
import { ContentType } from "@/utils/type";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { createId } from "@paralleldrive/cuid2";

export const ProjectFeatureTextContent = ({
  contentText,
}: {
  contentText: ContentType[];
}) => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-start">
      {contentText.map((text) => {
        // SINGLE ELEMENT
        const generatedId = createId();

        // if "logo" then
        if (text.type === "logo") {
          return (
            <motion.div
              key={generatedId}
              className="relative w-[70px] h-[70px] mt-10"
            >
              <Image
                src={text.content}
                alt={text.content}
                fill
                className="object-cover rounded-t-lg w-full h-full"
              />
            </motion.div>
          );
        }

        // if "h1" then
        else if (text.type === "h1") {
          return (
            <motion.h1
              key={generatedId}
              className="dark:text-white font-bold text-slate-700 text-5xl leading-relaxed tracking-wide w-full"
            >
              {text.content}
            </motion.h1>
          );
        }

        // if "h2" then
        else if (text.type === "h2") {
          return (
            <motion.h2
              key={generatedId}
              className="dark:text-white font-semibold text-slate-700 text-xl leading-relaxed tracking-wide w-full"
            >
              {text.content}
            </motion.h2>
          );
        }
        // if "h3" then
        else if (text.type === "h3") {
          return (
            <motion.h3
              key={generatedId}
              className={cn(
                "dark:text-white font-semibold text-base mt-10 leading-relaxed tracking-wide",
                !isEmpty(text.color)
                  ? "text-[#F31260]/70 dark:text-[#F31260]"
                  : ""
              )}
            >
              {text.content}
            </motion.h3>
          );
        }
        // if "paragraph" then
        else if (text.type === "p") {
          return (
            <motion.p
              key={generatedId}
              className="mt-3 mb-2 text-xs dark:text-white text-slate-500 font-normal"
            >
              {text.content}
            </motion.p>
          );
        }

        // if "hr" then
        else if (text.type === "hr") {
          return (
            <motion.div key={generatedId} className="min-h-[7px] w-[80%]">
              <hr className="mb-2 dark:bg-white bg-gray-200" />
            </motion.div>
          );
        }

        // GROUP ELEMENTS
        else if (text.type === "buttons-group" && text.group!.length > 0) {
          return (
            <motion.div
              key={generatedId}
              className="flex flex-wrap gap-2 mt-8 mb-2"
            >
              {text.group?.map((buttonChild, i) => {
                const childGeneratedId = createId();

                if (buttonChild.type === "button-link") {
                  return (
                    <motion.a
                      href={buttonChild.link}
                      key={childGeneratedId}
                      target={
                        buttonChild.isLinkTargetBlank ? "_blank" : "_self"
                      }
                      className="flex flex-nowrap items-center justify-center cursor-pointer rounded-2xl bg-slate-700 hover:bg-slate-500 text-white dark:bg-gray-500/70 dark:hover:bg-gray-500 px-3 py-1 text-sm transition-all duration-300"
                    >
                      {buttonChild.leadingIcon && (
                        <span className="mr-2">{buttonChild.leadingIcon}</span>
                      )}
                      {buttonChild.content}
                    </motion.a>
                  );
                } else if (buttonChild.type === "button-disabled") {
                  return (
                    <motion.div
                      key={childGeneratedId}
                      className="flex flex-nowrap items-center justify-center cursor-not-allowed rounded-2xl bg-neutral-400/50 dark:bg-neutral-800/90 text-white/80 px-3 py-2 text-sm"
                    >
                      {buttonChild.leadingIcon && (
                        <span className="mr-2">{buttonChild.leadingIcon}</span>
                      )}
                      {buttonChild.content}
                    </motion.div>
                  );
                } else {
                  return (
                    <div key={childGeneratedId}>{buttonChild.content}</div>
                  );
                }
              })}
            </motion.div>
          );
        }

        // ELSE RETURN simpe DIV
        else {
          return <motion.div key={generatedId}>{text.content}</motion.div>;
        }
      })}
    </div>
  );
};
