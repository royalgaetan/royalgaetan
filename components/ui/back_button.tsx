"use client";

import { useNavbarContext } from "@/providers/navbar_provider";
import { motion } from "framer-motion";
import React from "react";
import { LuArrowLeft, LuX } from "react-icons/lu";

const BackButton = () => {
  const { isDialogOpen, setIsDialogOpen } = useNavbarContext();

  const handleBackButton = () => {
    // If any dialog is open: close it 1st
    if (isDialogOpen) {
      setIsDialogOpen(false);
    }
    // Else go back to previous page
    else {
      window.open("/", "_self");
    }
  };

  return (
    <button
      onClick={handleBackButton}
      className="h-fit min-w-fit gap-2 z-[99] fixed top-4 left-4"
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="transition-all duration-500 group/button flex flex-1 justify-center items-center rounded-full w-max h-max text-sm cursor-pointer text-white bg-gray-800 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400"
      >
        {/* Handle Back button/Close Button of (any) dialog currently open */}
        <div className="h-8 w-8 flex flex-1 justify-center items-center">
          {isDialogOpen ? (
            <LuX size={"1.3em"} />
          ) : (
            <LuArrowLeft size={"1.3em"} />
          )}
        </div>
        {!isDialogOpen && (
          <div className="hidden group-hover/button:block transition-all duration-500 mr-3 -ml-1">
            Home
          </div>
        )}
      </motion.div>
    </button>
  );
};

export default BackButton;
