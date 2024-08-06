"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var next_themes_1 = require("next-themes");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var ThemeToggleButton = function () {
    var _a = next_themes_1.useTheme(), theme = _a.theme, setTheme = _a.setTheme;
    var _b = react_1.useState(false), mounted = _b[0], setMounted = _b[1];
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (react_1["default"].createElement(framer_motion_1.motion.button, { className: "w-full h-full flex flex-1 justify-center items-center bg-gray-800 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400 cursor-pointer transition-all duration-300 text-white dark:text-white text-sm rounded-full shadow-sm", onClick: function () { return (theme == "dark" ? setTheme("light") : setTheme("dark")); } }, theme == "dark" ? react_1["default"].createElement(fa_1.FaMoon, null) : react_1["default"].createElement(fa_1.FaSun, null)));
};
exports["default"] = ThemeToggleButton;
