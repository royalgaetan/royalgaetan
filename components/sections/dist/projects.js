"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var project_card_1 = require("../globals/project_card");
var constants_1 = require("@/utils/constants");
var framer_motion_1 = require("framer-motion");
var in_between_1 = require("./in_between");
var bg_wrapper_1 = require("../globals/bg_wrapper");
var use_active_navbar_1 = require("@/hooks/use_active_navbar");
var ProjectSections = function () {
    var contentRef = use_active_navbar_1.useActiveNavbar({
        elementToActivate: constants_1.navBarElementsList[2]
    });
    var transitionRef = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
        target: transitionRef,
        offset: ["start start", "end end"]
    }).scrollYProgress;
    return (react_1["default"].createElement("section", { ref: transitionRef, className: "flex flex-col min-h-screen max-w-[100vw] justify-center items-center pt-4 -mb-[10vh] pb-3" },
        react_1["default"].createElement(in_between_1["default"], { iconType: "wand", title: "What about my recent works?", overallYprogress: scrollYProgress }),
        react_1["default"].createElement(bg_wrapper_1["default"], { id: "portfolio", customClassName: "relative z-10 w-[100vw] min-h-screen flex flex-1 justify-center items-center" },
            react_1["default"].createElement("div", { ref: contentRef, className: "relative flex flex-col gap-9 h-[full] w-[min(650px,100%)] justify-center items-center max-sm:px-5 " },
                constants_1.mainProjects.map(function (project, i) {
                    var targetScale = 1 - (constants_1.mainProjects.length - i) * 0.05;
                    return (react_1["default"].createElement(project_card_1["default"], __assign({}, project, { range: [i * (1 / constants_1.mainProjects.length), 1], projectIndex: i, targetScale: targetScale, overallYprogress: scrollYProgress })));
                }),
                react_1["default"].createElement("div", { className: "h-[20vh]" })))));
};
exports["default"] = ProjectSections;
