"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var next_themes_1 = require("next-themes");
var strings_utils_1 = require("@/utils/strings_utils");
var SkillCard = function (_a) {
    var title = _a.title, iconPath = _a.iconPath, darkIconPath = _a.darkIconPath, height = _a.height, width = _a.width;
    var theme = next_themes_1.useTheme().theme;
    return (react_1["default"].createElement("div", { className: "hover:scale-110 transition-all duration-150" },
        react_1["default"].createElement("div", { className: "flex flex-col cursor-pointer justify-center items-center" },
            react_1["default"].createElement(image_1["default"], { src: theme === "dark" && !strings_utils_1.isEmpty(darkIconPath)
                    ? darkIconPath
                    : iconPath, alt: title, className: "mb-3", height: height, width: width }),
            react_1["default"].createElement("div", { className: "text-sm dark:text-white text-slate-500 font-medium text-wrap" }, title))));
};
exports["default"] = SkillCard;
