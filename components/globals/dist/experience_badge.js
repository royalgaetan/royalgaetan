"use strict";
exports.__esModule = true;
var badge_1 = require("@/components/ui/badge");
var react_1 = require("react");
var ExperienceBadge = function (toolsUsed) {
    return (react_1["default"].createElement(badge_1.Badge, { className: "text-xs cursor-pointer bg-[#F31260]/70 font-light mr-2 text-white hover:opacity-60" }, toolsUsed.title));
};
exports["default"] = ExperienceBadge;
