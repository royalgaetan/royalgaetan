"use client";
"use strict";
exports.__esModule = true;
exports.MessageChatIcon = exports.BadgeIcon = exports.WandIcon = exports.GearIcon = exports.EmojiIcon = exports.LuMouseIcon = void 0;
var next_themes_1 = require("next-themes");
var react_1 = require("react");
var lu_1 = require("react-icons/lu");
var fa6_1 = require("react-icons/fa6");
exports.LuMouseIcon = function () {
    var theme = next_themes_1.useTheme().theme;
    return (react_1["default"].createElement(lu_1.LuMouse, { size: "1.8em", color: theme === "dark" ? "white" : "#0f172a", className: "center mt-1 animate-bounce" }));
};
exports.EmojiIcon = function () {
    var theme = next_themes_1.useTheme().theme;
    return (react_1["default"].createElement(lu_1.LuSmile, { size: "1.8em", color: theme === "dark" ? "white" : "#0f172a", className: "center mt-1 animate-bounce " }));
};
exports.GearIcon = function () {
    var theme = next_themes_1.useTheme().theme;
    return (react_1["default"].createElement(fa6_1.FaGear, { size: "1.8em", color: theme === "dark" ? "white" : "#0f172a", className: "center mt-1 animate-spin" }));
};
exports.WandIcon = function () {
    var theme = next_themes_1.useTheme().theme;
    return (react_1["default"].createElement(lu_1.LuWand2, { size: "1.8em", color: theme === "dark" ? "white" : "#0f172a", className: "center mt-1 animate-pulse" }));
};
exports.BadgeIcon = function () {
    var theme = next_themes_1.useTheme().theme;
    return (react_1["default"].createElement(lu_1.LuBadgeCheck, { size: "1.8em", color: theme === "dark" ? "white" : "#0f172a", className: "center mt-1 animate-ping" }));
};
exports.MessageChatIcon = function () {
    var theme = next_themes_1.useTheme().theme;
    return (react_1["default"].createElement(lu_1.LuMessageCircle, { size: "1.8em", color: theme === "dark" ? "white" : "#0f172a", className: "center mt-1" }));
};
