"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var next_themes_1 = require("next-themes");
var framer_motion_1 = require("framer-motion");
var cg_1 = require("react-icons/cg");
var link_1 = require("next/link");
var ProjectCard = function (_a) {
    var title = _a.title, subTitle = _a.subTitle, coverPath = _a.coverPath, link = _a.link, isLinkBlankTarget = _a.isLinkBlankTarget, toolsUsed = _a.toolsUsed, projectIndex = _a.projectIndex, range = _a.range, targetScale = _a.targetScale;
    var theme = next_themes_1.useTheme().theme;
    var containerRef = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    }).scrollYProgress;
    var scale = framer_motion_1.useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    var containerScale = framer_motion_1.useTransform(scrollYProgress, range, [1, targetScale]);
    return (react_1["default"].createElement(framer_motion_1.motion.div, { style: {
            scale: containerScale,
            top: "calc(40px + " + projectIndex * 40 + "px)"
        }, ref: containerRef, className: "group/projectInfo cursor-pointer sticky mb-[20vh] flex flex-col justify-start items-center text-neutral-500 min-h-[75vh] w-full bg-white rounded-xl border-2 border-neutral-200 dark:border-0 dark:bg-neutral-800" },
        react_1["default"].createElement("div", { className: "overflow-hidden h-[60vh] w-full rounded-t-lg" },
            react_1["default"].createElement(framer_motion_1.motion.div, { style: { scale: scale }, className: "relative w-full h-full" },
                react_1["default"].createElement(link_1["default"], { className: "block relative", href: link, target: isLinkBlankTarget ? "_blank" : "_self" },
                    react_1["default"].createElement(image_1["default"], { src: "/assets/wesh logo.png", alt: title, fill: true, className: "object-cover rounded-t-lg" })))),
        react_1["default"].createElement("div", { className: "md:w-[60%] p-4 w-full flex flex-col justify-center min-h-[15vh]" },
            react_1["default"].createElement(link_1["default"], { className: "block", href: link, target: isLinkBlankTarget ? "_blank" : "_self" },
                react_1["default"].createElement("div", { className: "flex flex-1 w-full justify-start" },
                    react_1["default"].createElement("h3", { className: "text-1xl font-bold group-hover/projectInfo:text-opacity-70 dark:text-slate-100 text-neutral-700 mb-0" }, title),
                    react_1["default"].createElement(cg_1.CgArrowTopRight, { size: "1.5rem", color: theme === "dark" ? "white" : "rgba(64 64 64 0.7)", className: "flex ml-1 invisible group-hover/projectInfo:visible" }))),
            react_1["default"].createElement(link_1["default"], { className: "block", href: link, target: isLinkBlankTarget ? "_blank" : "_self" },
                react_1["default"].createElement("div", { className: "flex flex-1 w-full" },
                    react_1["default"].createElement("span", { className: "text-neutral-500 dark:text-slate-400 text-[0.7em]" }, subTitle))))));
};
exports["default"] = ProjectCard;
