"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var react_1 = require("react");
var lu_1 = require("react-icons/lu");
var BackButton = function (_a) {
    var title = _a.title, link = _a.link;
    return (react_1["default"].createElement(link_1["default"], { href: link },
        react_1["default"].createElement(framer_motion_1.motion.div, { whileTap: { scale: 0.95 }, initial: { scale: 1 }, transition: { duration: 0.4 }, className: "transition-all duration-500 group/button flex flex-1 justify-center items-center rounded-full w-max h-max text-sm cursor-pointer text-white bg-gray-800 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400" },
            react_1["default"].createElement("div", { className: "h-8 w-8 flex flex-1 justify-center items-center" },
                react_1["default"].createElement(lu_1.LuArrowLeft, { size: "1.3em", className: "" })),
            title && (react_1["default"].createElement("div", { className: "hidden group-hover/button:block transition-all duration-500 mr-3 ml-1" }, title)))));
};
exports["default"] = BackButton;
