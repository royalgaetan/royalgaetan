"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
var constants_1 = require("@/utils/constants");
var in_between_1 = require("./in_between");
var bg_wrapper_1 = require("../globals/bg_wrapper");
var use_active_navbar_1 = require("@/hooks/use_active_navbar");
var strings_utils_1 = require("@/utils/strings_utils");
var AboutMeSection = function (_a) {
    var contentRef = use_active_navbar_1.useActiveNavbar({
        elementToActivate: constants_1.navBarElementsList[1]
    });
    var transitionRef = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
        target: transitionRef,
        offset: ["center center", "end end"]
    }).scrollYProgress;
    var scaleContent = framer_motion_1.useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    var rotateContent = framer_motion_1.useTransform(scrollYProgress, [0, 1], [-2, 0]);
    var valuesTable = {
        opacity: [0, 1],
        y: [40, 0]
    };
    // Animation: history parts
    var getAnimationValues = function (index) {
        var keyframesStart = 0.66;
        var keyframesEnd = 0.77;
        var interval = (keyframesStart + keyframesEnd) / constants_1.aboutMeContent.length;
        var newKeyFrames = [
            keyframesStart * interval * index,
            keyframesEnd * interval * index,
        ];
        var hOpacity = framer_motion_1.useTransform(scrollYProgress, newKeyFrames, valuesTable.opacity);
        var hY = framer_motion_1.useTransform(scrollYProgress, newKeyFrames, valuesTable.y);
        return {
            hOpacity: hOpacity,
            hY: hY
        };
    };
    return (react_1["default"].createElement("section", { id: "aboutsection", ref: transitionRef, className: "flex flex-col min-h-screen justify-start items-center" },
        react_1["default"].createElement(in_between_1["default"], { iconType: "emoji", title: "A little about me", overallYprogress: scrollYProgress }),
        react_1["default"].createElement(framer_motion_1.motion.div, { id: "about", ref: contentRef, style: { scale: scaleContent, rotate: rotateContent } },
            react_1["default"].createElement(bg_wrapper_1["default"], { customClassName: "relative z-10 w-full min-h-screen flex flex-1 justify-center items-center" },
                react_1["default"].createElement("div", { className: "flex flex-col justify-center items-center w-[min(500px,100%)] max-sm:px-5 py-32 md:my-16" }, constants_1.aboutMeContent.map(function (value, index) {
                    var _a = getAnimationValues(index), hY = _a.hY, hOpacity = _a.hOpacity;
                    // if "h2" then
                    if (value.type === "h2") {
                        return (react_1["default"].createElement(framer_motion_1.motion.h2, { key: index, style: { y: hY, opacity: hOpacity }, className: "text-center dark:text-white font-semibold text-slate-900 text-3xl leading-relaxed tracking-wide w-[min(800px,100%)] max-sm:px-5" }, value.content));
                    }
                    // if "h3" then
                    else if (value.type === "h3") {
                        return (react_1["default"].createElement(framer_motion_1.motion.h3, { key: index, style: { y: hY, opacity: hOpacity }, className: utils_1.cn("text-center dark:text-white font-semibold text-sm mt-3 leading-relaxed tracking-wide", !strings_utils_1.isEmpty(value.color)
                                ? "text-[#F31260]/70 dark:text-[#F31260]"
                                : "") }, value.content));
                    }
                    // if "hr" then
                    else if (value.type === "hr") {
                        return (react_1["default"].createElement(framer_motion_1.motion.div, { key: index, className: "min-h-[10px] w-[min(100%,300px)]", style: { y: hY, opacity: hOpacity } },
                            react_1["default"].createElement("hr", { className: "mx-10 mt-6 dark:bg-white bg-gray-200" })));
                    }
                    // if "paragraph" then
                    else if (value.type === "p") {
                        return (react_1["default"].createElement(framer_motion_1.motion.p, { key: index, style: { y: hY, opacity: hOpacity }, className: "mt-4 text-sm dark:text-white text-slate-600 font-medium max-sm:px-5" }, value.content));
                    }
                    else {
                        return (react_1["default"].createElement(framer_motion_1.motion.div, { key: index, style: { y: hY, opacity: hOpacity } }, value.content));
                    }
                }))))));
};
exports["default"] = AboutMeSection;
