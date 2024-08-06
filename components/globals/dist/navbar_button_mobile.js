"use client";
"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var active_bar_provider_1 = require("@/providers/active_bar_provider");
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var react_1 = require("react");
var NavbarButtonMobile = function (_a) {
    var navElement = _a.navElement, onClick = _a.onClick;
    var _b = active_bar_provider_1.useActiveNavBarContext(), activeNavElement = _b.activeNavElement, setActiveNavElement = _b.setActiveNavElement;
    return (react_1["default"].createElement(link_1["default"], { href: navElement.hash, onClick: function () {
            setActiveNavElement(navElement);
            onClick();
        }, className: utils_1.cn("whitespace-nowrap flex-nowrap font-medium text-neutral-500 cursor-pointer", activeNavElement.title == navElement.title
            ? "text-neutral-200 font-bold"
            : "hover:font-semibold hover:text-neutral-300") },
        react_1["default"].createElement(framer_motion_1.motion.span, { initial: { scale: 1 }, whileTap: { scale: 0.9 }, transition: { duration: 0.4 } }, navElement.title)));
};
exports["default"] = NavbarButtonMobile;
