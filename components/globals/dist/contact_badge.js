"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var ContactBadge = function (_a) {
    var title = _a.title, link = _a.link, icon = _a.icon;
    return (react_1["default"].createElement(link_1["default"], { href: link, target: "_blank" },
        react_1["default"].createElement("div", { className: "bg-[#e9e9e9] dark:bg-[#222222] dark:text-white rounded-lg px-6 py-3 cursor-pointer hover:bg-[#F31260]/10 dark:hover:bg-[#F31260]/10" },
            react_1["default"].createElement("div", { className: "flex flex-1 gap-3 dark:text-white text-[#222222] justify-start items-center text-sm" },
                icon,
                react_1["default"].createElement("h3", null, title)))));
};
exports["default"] = ContactBadge;
