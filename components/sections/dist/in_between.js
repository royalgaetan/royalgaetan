"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var icons_adaptive_1 = require("../ui/icons_adaptive");
var InBetween = function (_a) {
    var title = _a.title, overallYprogress = _a.overallYprogress, iconType = _a.iconType;
    var scale = framer_motion_1.useTransform(overallYprogress, [0, 1], [1, 0.8]);
    var rotate = framer_motion_1.useTransform(overallYprogress, [0, 1], [0, -5]);
    return (React.createElement(framer_motion_1.motion.div, { style: { scale: scale, rotate: rotate }, className: "sticky top-0 dark:bg-neutral-900 bg-slate-200 h-screen w-full justify-center items-center" },
        React.createElement("div", { className: "flex flex-col h-screen w-full justify-center items-center" },
            React.createElement("h2", { className: "dark:text-white text-slate-900 font-medium text-2xl mb-8 max-sm:mb-5 leading-tight tracking-tight" }, title),
            React.createElement("div", null,
                iconType === "" && React.createElement(icons_adaptive_1.LuMouseIcon, null),
                iconType === "emoji" && React.createElement(icons_adaptive_1.EmojiIcon, null),
                iconType === "gear" && React.createElement(icons_adaptive_1.GearIcon, null),
                iconType === "wand" && React.createElement(icons_adaptive_1.WandIcon, null),
                iconType === "badge" && React.createElement(icons_adaptive_1.BadgeIcon, null),
                iconType === "chat" && React.createElement(icons_adaptive_1.MessageChatIcon, null)))));
};
exports["default"] = InBetween;
