"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var framer_motion_1 = require("framer-motion");
var use_active_navbar_1 = require("@/hooks/use_active_navbar");
var constants_1 = require("@/utils/constants");
var HeroSection = function () {
    var contentRef = use_active_navbar_1.useActiveNavbar({
        elementToActivate: constants_1.navBarElementsList[0]
    });
    var animVariants = {
        initial: {
            opacity: 0,
            y: 10
        },
        visible: function (i) { return ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.4 * i }
        }); }
    };
    return (react_1["default"].createElement("section", { ref: contentRef, id: "home", className: "flex min-h-screen w-full text-center px-5 items-center justify-center dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_35%_40%_at_50%_-12%,rgba(100,116,139,0.7),rgba(255,255,255,0))] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:16px_16px] dark:bg-[length:100%_100%]" },
        react_1["default"].createElement(framer_motion_1.motion.div, { variants: animVariants, initial: "initial", whileInView: "visible", viewport: { once: true }, className: "flex flex-col items-center justify-center" },
            react_1["default"].createElement(framer_motion_1.motion.h1, { custom: 0, variants: animVariants, className: "dark:text-white text-slate-900 font-medium text-4xl mb-8 max-sm:mb-5 leading-tight tracking-tight" }, "Quality Apps for Meaningful Impact"),
            react_1["default"].createElement(framer_motion_1.motion.h2, { custom: 1, variants: animVariants, className: "dark:text-gray-400 text-gray-600 text-lg max-sm:text-sm leading-relaxed tracking-wide w-[min(800px,100%)] max-sm:px-5" },
                "I believe that great products, great people, and great teams improve our society.",
                react_1["default"].createElement("br", null),
                "So I aim to create apps that bring people together and improve lives."),
            react_1["default"].createElement(framer_motion_1.motion.div, { custom: 2, variants: animVariants },
                react_1["default"].createElement(link_1["default"], { href: "#aboutsection", className: "flex flex-col justify-center items-center mt-10 cursor-pointer" },
                    react_1["default"].createElement("p", { className: "text-sm dark:text-slate-300 text-[#F31260] font-bold animate-pulse mb-4" }, "See how"))))));
};
exports["default"] = HeroSection;
