"use client";
"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var framer_motion_1 = require("framer-motion");
var ProjectFeatureMedia = function (_a) {
    var x = _a.x, y = _a.y;
    return (React.createElement(framer_motion_1.motion.div, { initial: { x: 0, y: 0 }, style: {
            x: x / 10,
            y: y / 2
        }, className: utils_1.cn("transition-all duration-400 h-[30vh] w-[30vh] bg-rose-500 rounded-xl") }));
};
exports["default"] = ProjectFeatureMedia;
