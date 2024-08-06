"use client";
"use strict";
exports.__esModule = true;
exports.WobbleCard = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var cn_1 = require("@/utils/cn");
exports.WobbleCard = function (_a) {
    var children = _a.children, containerClassName = _a.containerClassName, className = _a.className;
    var _b = react_1.useState({ x: 0, y: 0 }), mousePosition = _b[0], setMousePosition = _b[1];
    var _c = react_1.useState(false), isHovering = _c[0], setIsHovering = _c[1];
    var handleMouseMove = function (event) {
        var clientX = event.clientX, clientY = event.clientY;
        var rect = event.currentTarget.getBoundingClientRect();
        var x = (clientX - (rect.left + rect.width / 2)) / 20;
        var y = (clientY - (rect.top + rect.height / 2)) / 20;
        setMousePosition({ x: x, y: y });
    };
    return (react_1["default"].createElement(framer_motion_1.motion.section, { onMouseMove: handleMouseMove, onMouseEnter: function () { return setIsHovering(true); }, onMouseLeave: function () {
            setIsHovering(false);
            setMousePosition({ x: 0, y: 0 });
        }, style: {
            transform: isHovering
                ? "translate3d(" + mousePosition.x + "px, " + mousePosition.y + "px, 0) scale3d(1, 1, 1)"
                : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out"
        }, className: cn_1.cn("rounded-2xl overflow-hidden", containerClassName) },
        react_1["default"].createElement("div", { className: "relative  h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl overflow-hidden", style: {
                boxShadow: "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)"
            } },
            react_1["default"].createElement(framer_motion_1.motion.div, { style: {
                    transform: isHovering
                        ? "translate3d(" + -mousePosition.x + "px, " + -mousePosition.y + "px, 0) scale3d(1.03, 1.03, 1)"
                        : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                    transition: "transform 0.1s ease-out"
                }, className: cn_1.cn("h-full w-full p-4", className) },
                react_1["default"].createElement(Noise, null),
                children))));
};
var Noise = function () {
    return (react_1["default"].createElement("div", { className: "absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]", style: {
            backgroundImage: "url(/noise.webp)",
            backgroundSize: "30%"
        } }));
};
