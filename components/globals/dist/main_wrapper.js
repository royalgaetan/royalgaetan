"use client";
"use strict";
exports.__esModule = true;
var active_bar_provider_1 = require("@/providers/active_bar_provider");
var react_1 = require("react");
var MainWrapper = function (_a) {
    var children = _a.children;
    var isMobileMenuOpen = active_bar_provider_1.useActiveNavBarContext().isMobileMenuOpen;
    return (react_1["default"].createElement("div", null, children));
};
exports["default"] = MainWrapper;
