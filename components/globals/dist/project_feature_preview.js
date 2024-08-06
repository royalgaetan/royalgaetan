"use client";
"use strict";
exports.__esModule = true;
var lu_1 = require("react-icons/lu");
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
var project_feature_text_content_1 = require("./project_feature_text_content");
var ProjectFeaturePreview = function (_a) {
    var featureHovered = _a.featureHovered, x = _a.x, y = _a.y;
    return (React.createElement("div", { className: "w-full h-full" }, featureHovered != null ? (React.createElement("div", { className: "flex flex-1 w-full min-h-full" },
        featureHovered.previewPath != "" && (React.createElement("div", { className: "flex w-[min(60%,40vh)]" },
            React.createElement(framer_motion_1.motion.div, { initial: { x: 0, y: 10, opacity: 0.7 }, whileInView: { y: 0, opacity: 1 }, transition: { duration: 0.4 }, style: {
                    x: x / 10,
                    y: y / 2
                } },
                React.createElement("div", { className: "transition-all duration-400 h-[70vh] w-[35vh] bg-gray-800 rounded-3xl" },
                    React.createElement("div", { className: "flex flex-1 justify-center items-center w-full h-full" },
                        React.createElement(lu_1.LuLoader2, { className: "animate-spin", color: "white", size: "2rem" })))))),
        React.createElement("div", { className: utils_1.cn("flex flex-1 w-full justify-center items-center", featureHovered.previewPath == "" ? "ml-10" : "") },
            React.createElement(project_feature_text_content_1.ProjectFeatureTextContent, { contentText: featureHovered.contentText })))) : (React.createElement("div", { className: "text-slate-400 text-center text-sm animate-pulse" }, "Hover a tab to preview"))));
};
exports["default"] = ProjectFeaturePreview;
