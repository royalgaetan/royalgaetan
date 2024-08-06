"use client";
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Highlight = exports.HeroHighlight = void 0;
var cn_1 = require("@/utils/cn");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
exports.HeroHighlight = function (_a) {
    var children = _a.children, className = _a.className, containerClassName = _a.containerClassName;
    var mouseX = framer_motion_1.useMotionValue(0);
    var mouseY = framer_motion_1.useMotionValue(0);
    function handleMouseMove(_a) {
        var currentTarget = _a.currentTarget, clientX = _a.clientX, clientY = _a.clientY;
        if (!currentTarget)
            return;
        var _b = currentTarget.getBoundingClientRect(), left = _b.left, top = _b.top;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (react_1["default"].createElement("div", { className: cn_1.cn("relative min-h-screen flex items-center bg-slate-200 dark:bg-slate-950 justify-center w-full group", containerClassName), onMouseMove: handleMouseMove },
        react_1["default"].createElement("div", { className: "absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" }),
        react_1["default"].createElement(framer_motion_1.motion.div, { className: "pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100", style: {
                WebkitMaskImage: framer_motion_1.useMotionTemplate(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            radial-gradient(\n              200px circle at ", "px ", "px,\n              black 0%,\n              transparent 100%\n            )\n          "], ["\n            radial-gradient(\n              200px circle at ", "px ", "px,\n              black 0%,\n              transparent 100%\n            )\n          "])), mouseX, mouseY),
                maskImage: framer_motion_1.useMotionTemplate(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            radial-gradient(\n              200px circle at ", "px ", "px,\n              black 0%,\n              transparent 100%\n            )\n          "], ["\n            radial-gradient(\n              200px circle at ", "px ", "px,\n              black 0%,\n              transparent 100%\n            )\n          "])), mouseX, mouseY)
            } }),
        react_1["default"].createElement("div", { className: cn_1.cn("relative z-20", className) }, children)));
};
exports.Highlight = function (_a) {
    var children = _a.children, className = _a.className;
    return (react_1["default"].createElement(framer_motion_1.motion.span, { initial: {
            backgroundSize: "0% 100%"
        }, animate: {
            backgroundSize: "100% 100%"
        }, transition: {
            duration: 0.7,
            ease: "linear",
            delay: 0.5
        }, style: {
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            display: "inline"
        }, className: cn_1.cn("relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500", className) }, children));
};
var templateObject_1, templateObject_2;
