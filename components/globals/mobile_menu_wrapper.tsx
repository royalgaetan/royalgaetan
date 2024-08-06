"use client";
import { cn } from "@/lib/utils";
import { useNavbarContext } from "@/providers/navbar_provider";
import { navbarElementsList } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import NavbarButtonMobile from "./navbar_button_mobile";

const MobileMenuWrapper = ({ children }: any) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useNavbarContext();

  const bgSpringVariants = {
    initial: {
      scaleX: 1,
    },
    visible: (i: number) => ({
      scaleX: -15,
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 300,
        damping: 10,
        delayChildren: 1,
      },
    }),
    exit: {
      scaleX: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const navContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div
      className={cn(
        "flex flex-1",
        isMobileMenuOpen
          ? "fixed top-0 z-[70] h-[100vh] w-[100vw] bg-grey-200/20 backdrop-blur-sm"
          : ""
      )}
    >
      {/* (Pan) Menu: visible only on Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 z-[70] h-[100vh] w-[100vw] flex flex-1">
          {/* (Pan) Left Side: backdrop + click to dismiss nav */}
          <button
            className="bg-transparent w-[25vw]"
            onClick={() => {
              if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
              }
            }}
          ></button>

          {/* (Pan) Right Side: bg springs + nav elements */}
          <div className="bg-transparent w-full">
            {/* Bg Spring */}
            <AnimatePresence>
              <motion.div
                exit="exit"
                whileInView="visible"
                variants={bgSpringVariants}
                className="absolute right-0 top-0 bg-neutral-800/90 h-[100vh] w-[10vw]"
              ></motion.div>
            </AnimatePresence>

            {/* Nav Elements: only for Mobile */}
            <div className="absolute right-0 top-0 h-[100vh] w-[80vw] flex flex-col justify-center items-center">
              <motion.ul
                variants={navContainerVariants}
                initial="hidden"
                animate="show"
              >
                {navbarElementsList.map((navEl) => {
                  return (
                    <motion.li
                      key={navEl.hash}
                      className="my-3"
                      variants={navItemVariants}
                    >
                      <NavbarButtonMobile
                        onClick={() => setIsMobileMenuOpen(false)}
                        navElement={navEl}
                      />
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </div>
        </div>
      )}

      {/* Remaining elements */}
      <div>{children}</div>
    </div>
  );
};

export default MobileMenuWrapper;
