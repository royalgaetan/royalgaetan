"use client";
"use strict";
exports.__esModule = true;
var next_themes_1 = require("next-themes");
var react_1 = require("react");
var ThemeToggleButton = function () {
    var _a = next_themes_1.useTheme(), theme = _a.theme, setTheme = _a.setTheme;
    var _b = react_1.useState(false), mounted = _b[0], setMounted = _b[1];
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (react_1["default"].createElement("button", { className: "bg-gray-800 dark:bg-dark-50 cursor-pointer hover:bg-gray-600 dark:hover:white transition-all duration-100 text-white dark:text-white px-8 py-2 text-2xl  rounded-lg", onClick: function () { return (theme == "dark" ? setTheme("light") : setTheme("dark")); } },
        "Toggle Theme: ",
        theme));
};
exports["default"] = ThemeToggleButton;
