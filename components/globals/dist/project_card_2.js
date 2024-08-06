"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var ProjectCard2 = function (_a) {
    var title = _a.title, subTitle = _a.subTitle, toolsUsed = _a.toolsUsed;
    return (react_1["default"].createElement("div", { className: "group/projectcard transition-all duration-300 cursor-pointer hover:scale-105 flex flex-col bg-[#04161E] w-[min(250px,100%)] h-[220px] rounded-lg mb-1" },
        react_1["default"].createElement("div", { className: "ml-3 mt-3 p-3 w-full relative mb-2" },
            react_1["default"].createElement(fa_1.FaFolder, { size: "3em", color: "gray" })),
        react_1["default"].createElement("div", { className: "px-4" },
            react_1["default"].createElement("div", { className: "flex justify-between" },
                react_1["default"].createElement("h2", { className: "font-semibold text-white group-hover/projectcard:text-[#F31260] w-full text-base" }, title)),
            react_1["default"].createElement("p", { className: "text-ellipsis text-neutral-400 text-xs mt-2" }, subTitle))));
};
exports["default"] = ProjectCard2;
