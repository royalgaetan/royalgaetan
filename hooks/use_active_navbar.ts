"use client";

import { useNavbarContext } from "@/providers/navbar_provider";
import { NavbarElementType } from "@/utils/type";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export function useActiveNavbar({
  elementToActivate,
}: {
  elementToActivate: NavbarElementType;
}) {
  // Use of Active Navbar Provider
  const { activeNavbarElement, setActiveNavbarElement } = useNavbarContext();

  // Track if content is in view
  const contentRef = useRef(null);
  const isVisible = useInView(contentRef, { margin: "-50%" });

  useEffect(() => {
    // Update ActiveNavBarProvide
    if (isVisible) {
      setActiveNavbarElement(elementToActivate);
      console.log(activeNavbarElement);
    }
  }, [isVisible]);

  return contentRef;
}
