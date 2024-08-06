"use client";
"use strict";
exports.__esModule = true;
var navbar_button_1 = require("../globals/navbar_button");
var constants_1 = require("@/utils/constants");
var theme_toggle_button_1 = require("../globals/theme_toggle_button");
var active_bar_provider_1 = require("@/providers/active_bar_provider");
var navigation_1 = require("next/navigation");
var lu_1 = require("react-icons/lu");
var Navbar = function () {
    var _a = active_bar_provider_1.useActiveNavBarContext(), isMobileMenuOpen = _a.isMobileMenuOpen, setMobileMenuVisibility = _a.setMobileMenuVisibility;
    var pathName = navigation_1.usePathname();
    return (React.createElement("nav", { className: "z-[80] fixed top-0" },
        pathName === "/" && (React.createElement("div", { className: "md:flex hidden z-[90] fixed top-4 w-[100vw] flex-1 justify-around items-center" },
            React.createElement("div", { className: "flex flex-1 justify-around items-center max-w-[min(600px,100%)]" },
                React.createElement("div", { className: "overflow-hidden min-w-full text-sm flex flex-1 justify-around rounded-xl" }, constants_1.navBarElementsList.map(function (navEl) {
                    return React.createElement(navbar_button_1["default"], { key: navEl.hash, navElement: navEl });
                }))))),
        React.createElement("div", { className: "h-fit min-w-fit gap-2 z-[99] fixed top-4 right-4 flex flex-1 justify-end items-end" },
            React.createElement("div", { className: "w-8 h-8 rounded-full " },
                React.createElement(theme_toggle_button_1["default"], null)),
            pathName === "/" && (React.createElement("button", { onKeyDown: function () { return setMobileMenuVisibility(!isMobileMenuOpen); }, onClick: function () { return setMobileMenuVisibility(!isMobileMenuOpen); }, className: "max-sm:flex flex-col gap-2 hidden w-8 h-8 rounded-full" },
                React.createElement("div", { className: "w-full h-full flex flex-1 justify-center items-center bg-gray-800 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400 cursor-pointer transition-all duration-300 text-white dark:text-white text-sm rounded-full shadow-sm" }, isMobileMenuOpen ? React.createElement(lu_1.LuX, null) : React.createElement(lu_1.LuMenu, null)))))));
};
exports["default"] = Navbar;
