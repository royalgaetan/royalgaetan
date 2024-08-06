"use client";
"use strict";
exports.__esModule = true;
var next_themes_1 = require("next-themes");
var react_1 = require("react");
var lu_1 = require("react-icons/lu");
var LuMouseIcon = function () {
    var theme = next_themes_1.useTheme().theme;
    return (react_1["default"].createElement(lu_1.LuMouse, { size: "1.6em", color: theme === "dark" ? "white" : "#0f172a", className: "center mt-1 animate-bounce cursor-pointer" }));
};
exports["default"] = LuMouseIcon;
