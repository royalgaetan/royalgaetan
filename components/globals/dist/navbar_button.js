"use client";
"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var active_bar_provider_1 = require("@/providers/active_bar_provider");
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var react_1 = require("react");
var NavbarButton = function (_a) {
    var navElement = _a.navElement, key = _a.key;
    var _b = active_bar_provider_1.useActiveNavBarContext(), activeNavElement = _b.activeNavElement, setActiveNavElement = _b.setActiveNavElement;
    return (react_1["default"].createElement(link_1["default"], { key: key, href: navElement.hash, onClick: function () {
            setActiveNavElement(navElement);
        }, className: utils_1.cn("whitespace-nowrap flex-nowrap hover:bg-neutral-400/80 hover:text-neutral-600 dark:hover:bg-neutral-600/80 dark:hover:text-neutral-200 hover:font-bold font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-300/80 dark:bg-neutral-700/80  backdrop-blur-sm w-full h-full cursor-pointer", activeNavElement.title == navElement.title
            ? "bg-neutral-400/80 text-neutral-600 dark:bg-neutral-600/80 dark:text-neutral-200 font-bold"
            : "") },
        react_1["default"].createElement(framer_motion_1.motion.span, { className: "flex flex-1 justify-center items-center py-2 px-2 w-full h-full bg-transparent", initial: { scale: 1 }, whileTap: { scale: 0.9 }, transition: { duration: 0.4 } }, navElement.title)));
};
exports["default"] = NavbarButton;
