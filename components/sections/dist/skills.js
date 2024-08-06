"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var skill_card_1 = require("../globals/skill_card");
var constants_1 = require("@/utils/constants");
var framer_motion_1 = require("framer-motion");
var in_between_1 = require("./in_between");
var bg_wrapper_1 = require("../globals/bg_wrapper");
var use_active_navbar_1 = require("@/hooks/use_active_navbar");
var SkillsSection = function () {
    var contentRef = use_active_navbar_1.useActiveNavbar({
        elementToActivate: constants_1.navBarElementsList[1]
    });
    var transitionRef = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
        target: transitionRef,
        offset: ["start start", "end end"]
    }).scrollYProgress;
    var scaleContent = framer_motion_1.useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    var rotateContent = framer_motion_1.useTransform(scrollYProgress, [0, 1], [-2, 0]);
    var variants = {
        initial: {
            y: 5,
            opacity: 0
        },
        show: function (i) { return ({
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: "120",
                duration: 0.4,
                delay: i * 0.2
            }
        }); }
    };
    return (react_1["default"].createElement("section", { ref: transitionRef, id: "skills", className: "flex flex-col min-h-screen w-full justify-center items-center" },
        react_1["default"].createElement(in_between_1["default"], { iconType: "gear", title: "What do I use to get there?", overallYprogress: scrollYProgress }),
        react_1["default"].createElement(framer_motion_1.motion.div, { ref: contentRef, style: { scale: scaleContent, rotate: rotateContent } },
            react_1["default"].createElement(bg_wrapper_1["default"], { customClassName: "py-14 relative z-10 w-full min-h-screen flex flex-1 justify-center items-center" },
                react_1["default"].createElement(framer_motion_1.motion.div, { variants: variants, initial: "initial", whileInView: "show", className: "flex flex-wrap gap-4 items-center justify-center w-[min(800px,100%)] max-sm:px-8" }, constants_1.skillsList.map(function (skill, index) {
                    return (react_1["default"].createElement(framer_motion_1.motion.div, { variants: variants, custom: index, className: "p-4 mx-2 border-2 border-slate-200 rounded-xl w-[min(100px,100%)]" },
                        react_1["default"].createElement(skill_card_1["default"], { key: index, title: skill.title, iconPath: skill.iconPath, width: skill.width, height: skill.height, darkIconPath: skill.darkIconPath })));
                }))))));
};
exports["default"] = SkillsSection;
