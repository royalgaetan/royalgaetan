"use client";
"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var active_bar_provider_1 = require("@/providers/active_bar_provider");
var constants_1 = require("@/utils/constants");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var navbar_button_mobile_1 = require("./navbar_button_mobile");
var MobileMenuWrapper = function (_a) {
    var children = _a.children;
    var _b = active_bar_provider_1.useActiveNavBarContext(), isMobileMenuOpen = _b.isMobileMenuOpen, setMobileMenuVisibility = _b.setMobileMenuVisibility;
    var bgSpringVariants = {
        initial: {
            scaleX: 1
        },
        visible: function (i) { return ({
            scaleX: -15,
            transition: {
                duration: 1.5,
                type: "spring",
                stiffness: 300,
                damping: 10,
                delayChildren: 1
            }
        }); },
        exit: {
            scaleX: 1,
            transition: {
                duration: 1.5
            }
        }
    };
    var navContainerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    var navItemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0
        }
    };
    return (react_1["default"].createElement("div", { className: utils_1.cn("flex flex-1", isMobileMenuOpen
            ? "fixed top-0 z-[70] h-[100vh] w-[100vw] bg-grey-200/20 backdrop-blur-sm"
            : "") },
        isMobileMenuOpen && (react_1["default"].createElement("div", { className: "fixed top-0 right-0 z-[70] h-[100vh] w-[100vw] flex flex-1" },
            react_1["default"].createElement("div", { className: "bg-transparent w-[25vw]", onClick: function () {
                    if (isMobileMenuOpen) {
                        setMobileMenuVisibility(false);
                    }
                } }),
            react_1["default"].createElement("div", { className: "bg-transparent w-full" },
                react_1["default"].createElement(framer_motion_1.AnimatePresence, null,
                    react_1["default"].createElement(framer_motion_1.motion.div, { exit: "exit", whileInView: "visible", variants: bgSpringVariants, className: "absolute right-0 top-0 bg-neutral-800/90 h-[100vh] w-[10vw]" })),
                react_1["default"].createElement("div", { className: "absolute right-0 top-0 h-[100vh] w-[80vw] flex flex-col justify-center items-center" },
                    react_1["default"].createElement(framer_motion_1.motion.ul, { variants: navContainerVariants, initial: "hidden", animate: "show" }, constants_1.navBarElementsList.map(function (navEl) {
                        return (react_1["default"].createElement(framer_motion_1.motion.li, { className: "my-3", variants: navItemVariants },
                            react_1["default"].createElement(navbar_button_mobile_1["default"], { onClick: function () { return setMobileMenuVisibility(false); }, navElement: navEl })));
                    })))))),
        react_1["default"].createElement("div", null, children)));
};
exports["default"] = MobileMenuWrapper;
