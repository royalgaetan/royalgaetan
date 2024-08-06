"use client";
"use strict";
exports.__esModule = true;
var ThemeProvider_1 = require("@/providers/ThemeProvider");
var react_1 = require("react");
var Custombutton = function () {
    var _a = ThemeProvider_1.useThemeContext(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (react_1["default"].createElement("button", { className: "", onClick: toggleTheme }, "Toggle Theme"));
};
exports["default"] = Custombutton;
