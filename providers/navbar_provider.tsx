"use client";

import { navbarElementsList } from "@/utils/constants";
import { NavbarElementType } from "@/utils/type";
import React, { createContext, useContext, useState } from "react";

export type NavbarValues = {
  activeNavbarElement: NavbarElementType;
  setActiveNavbarElement: (el: any) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isVisible: boolean) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (isVisible: boolean) => void;
};

const navbarDefaultValues: NavbarValues = {
  activeNavbarElement: navbarElementsList[0],
  setActiveNavbarElement: () => {},
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
  isDialogOpen: false,
  setIsDialogOpen: () => {},
};

export const NavbarContext = createContext<NavbarValues>(navbarDefaultValues);

export const NavbarProvider = ({ children }: any) => {
  // Nav Elements: update/check active
  const [activeNavbarElement, setActiveNavbarElement] =
    useState<NavbarElementType>(navbarElementsList[0]);

  // Menu: mobile visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dialog: visibility (anyone displayed on screen)
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        activeNavbarElement,
        setActiveNavbarElement,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isDialogOpen,
        setIsDialogOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);

  if (NavbarContext === null) {
    throw new Error(
      "useActiveNavBarContext must be used within a ActiveNavbarProvider"
    );
  }

  return context;
};
