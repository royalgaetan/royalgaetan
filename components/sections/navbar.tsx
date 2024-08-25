"use client";

import { navbarElementsList } from "@/utils/constants";
import ThemeToggleButton from "../globals/theme_toggle_button";
import { useNavbarContext } from "@/providers/navbar_provider";
import { usePathname } from "next/navigation";
import { LuX, LuMenu } from "react-icons/lu";
import NavbarButton from "../ui/navbar_button";
import BackButton from "../ui/back_button";

const Navbar = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useNavbarContext();
  const pathName = usePathname();

  return (
    <nav className="z-[80] fixed top-0">
      {/* Back Button: invisible on Homepage */}
      {pathName !== "/" && <BackButton />}

      {/* Navbar: only for large screens */}
      {/* Navbar: only on Homepage */}
      {pathName === "/" && (
        <div className="md:flex hidden z-[90] fixed top-4 w-[100vw] flex-1 justify-around items-center">
          <div className="flex flex-1 justify-around items-center max-w-[min(600px,100%)]">
            <div className="overflow-hidden min-w-full text-sm flex flex-1 justify-around rounded-xl">
              {navbarElementsList.map((navEl) => {
                return <NavbarButton key={navEl.hash} navElement={navEl} />;
              })}
            </div>
          </div>
        </div>
      )}

      <div className="h-fit min-w-fit gap-2 z-[99] fixed top-4 right-4 flex flex-1 justify-end items-end">
        {/* Theme Toggler: visible on all screens */}
        <div className="w-8 h-8 rounded-full ">
          <ThemeToggleButton />
        </div>

        {/* Navbar Menu Burger: only for mobile screens */}
        {/* Navbar Menu Burger: only on Homepage */}
        {pathName === "/" && (
          <button
            onKeyDown={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="max-sm:flex flex-col gap-2 hidden w-8 h-8 rounded-full"
          >
            <div className="w-full h-full flex flex-1 justify-center items-center bg-gray-800 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400 cursor-pointer transition-all duration-300 text-white dark:text-white text-sm rounded-full shadow-sm">
              {isMobileMenuOpen ? <LuX /> : <LuMenu />}
            </div>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
