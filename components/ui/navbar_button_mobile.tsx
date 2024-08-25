"use client";

import { cn } from "@/lib/utils";
import { useNavbarContext } from "@/providers/navbar_provider";
import { NavbarElementType } from "@/utils/type";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const NavbarButtonMobile = ({
  navElement,
  onClick,
}: {
  navElement: NavbarElementType;
  onClick: () => void;
}) => {
  const { activeNavbarElement, setActiveNavbarElement } = useNavbarContext();

  return (
    <Link
      href={navElement.hash}
      onClick={() => {
        setActiveNavbarElement(navElement);
        onClick();
      }}
      className={cn(
        "whitespace-nowrap flex-nowrap font-medium text-neutral-500 cursor-pointer",
        activeNavbarElement.title == navElement.title
          ? "text-white font-bold"
          : "hover:font-semibold hover:text-neutral-300"
      )}
    >
      <motion.span
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.4 }}
      >
        {navElement.title}
      </motion.span>
    </Link>
  );
};

export default NavbarButtonMobile;
