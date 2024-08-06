"use client";
"use strict";
exports.__esModule = true;
exports.ProjectFeatureTextContent = void 0;
var utils_1 = require("@/lib/utils");
var strings_utils_1 = require("@/utils/strings_utils");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var image_1 = require("next/image");
exports.ProjectFeatureTextContent = function (_a) {
    var contentText = _a.contentText;
    return (react_1["default"].createElement("div", { className: "flex flex-col w-full h-full justify-center items-start" }, contentText.map(function (text, index) {
        // SINGLE ELEMENT
        var _a;
        // if "logo" then
        if (text.type === "logo") {
            return (react_1["default"].createElement(framer_motion_1.motion.div, { className: "relative w-[70px] h-[70px]" },
                react_1["default"].createElement(image_1["default"], { src: text.content, alt: text.content, fill: true, className: "object-cover rounded-t-lg" })));
        }
        // if "h1" then
        else if (text.type === "h1") {
            return (react_1["default"].createElement(framer_motion_1.motion.h1, { key: index, className: "dark:text-white font-bold text-slate-900 text-5xl leading-relaxed tracking-wide w-full" }, text.content));
        }
        // if "h2" then
        else if (text.type === "h2") {
            return (react_1["default"].createElement(framer_motion_1.motion.h2, { key: index, className: "dark:text-white font-semibold text-slate-900 text-xl leading-relaxed tracking-wide w-full" }, text.content));
        }
        // if "h3" then
        else if (text.type === "h3") {
            return (react_1["default"].createElement(framer_motion_1.motion.h3, { key: index, className: utils_1.cn("dark:text-white font-semibold text-base mt-4 leading-relaxed tracking-wide", !strings_utils_1.isEmpty(text.color)
                    ? "text-[#F31260]/70 dark:text-[#F31260]"
                    : "") }, text.content));
        }
        // if "paragraph" then
        else if (text.type === "p") {
            return (react_1["default"].createElement(framer_motion_1.motion.p, { key: index, className: "mt-2 text-xs dark:text-white text-slate-600 font-normal" }, text.content));
        }
        // if "hr" then
        else if (text.type === "hr") {
            return (react_1["default"].createElement(framer_motion_1.motion.div, { key: index, className: "min-h-[7px] w-[80%]" },
                react_1["default"].createElement("hr", { className: "mb-2 dark:bg-white bg-gray-200" })));
        }
        // GROUP ELEMENTS
        else if (text.type === "buttons-group" && text.group.length > 0) {
            return (react_1["default"].createElement(framer_motion_1.motion.div, { className: "flex flex-wrap gap-2 mt-8 mb-2" }, (_a = text.group) === null || _a === void 0 ? void 0 : _a.map(function (buttonChild, i) {
                if (buttonChild.type === "button-link") {
                    return (react_1["default"].createElement(framer_motion_1.motion.a, { href: buttonChild.link, target: buttonChild.isLinkTargetBlank ? "_blank" : "_self", key: i, className: "flex flex-nowrap items-center justify-center cursor-pointer rounded-2xl  bg-slate-700 text-neutral-200 hover:scale-105 hover:opacity-90 px-3 py-1 text-sm transition-all duration-300" },
                        buttonChild.leadingIcon && (react_1["default"].createElement("span", { className: "mr-2" }, buttonChild.leadingIcon)),
                        buttonChild.content));
                }
                else if (buttonChild.type === "button-disabled") {
                    return (react_1["default"].createElement(framer_motion_1.motion.div, { key: i, className: "flex flex-nowrap items-center justify-center cursor-not-allowed rounded-2xl bg-neutral-400 text-white/80 px-3 py-2 text-sm" },
                        buttonChild.leadingIcon && (react_1["default"].createElement("span", { className: "mr-2" }, buttonChild.leadingIcon)),
                        buttonChild.content));
                }
                else {
                    return react_1["default"].createElement("div", null);
                }
            })));
        }
        // ELSE RETURN simpe DIV
        else {
            return react_1["default"].createElement(framer_motion_1.motion.div, { key: index }, text.content);
        }
    })));
};
