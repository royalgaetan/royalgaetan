"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.StickyScroll = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var framer_motion_2 = require("framer-motion");
var cn_1 = require("@/utils/cn");
var experience_badge_1 = require("../globals/experience_badge");
var cg_1 = require("react-icons/cg");
exports.StickyScroll = function (_a) {
    var _b;
    var content = _a.content, contentClassName = _a.contentClassName;
    var _c = react_1["default"].useState(0), activeCard = _c[0], setActiveCard = _c[1];
    var ref = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ["start start", "end start"]
    }).scrollYProgress;
    var cardLength = content.length;
    framer_motion_1.useMotionValueEvent(scrollYProgress, "change", function (latest) {
        var cardsBreakpoints = content.map(function (_, index) { return index / cardLength; });
        var closestBreakpointIndex = cardsBreakpoints.reduce(function (acc, breakpoint, index) {
            var distance = Math.abs(latest - breakpoint * 0.7);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });
    var linearGradients = [
        "linear-gradient(to bottom right, var(--teal-500), var(--blue-500))",
        "linear-gradient(to bottom right, var(--red-500), var(--purple-500))",
        "linear-gradient(to bottom right, var(--lime-500), var(--gold-500))",
    ];
    var _d = react_1.useState(linearGradients[0]), backgroundGradient = _d[0], setBackgroundGradient = _d[1];
    react_1.useEffect(function () {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);
    return (react_1["default"].createElement(framer_motion_2.motion.div, { className: "no-scrollbar h-[30rem] overflow-y-auto flex justify-center relative rounded-md p-5", ref: ref },
        react_1["default"].createElement("div", { className: "div relative flex items-start px-4" },
            react_1["default"].createElement("div", { className: "max-w-2xl" },
                content.map(function (item, index) { return (react_1["default"].createElement("div", { key: item.title + index, className: "group/experienceCard my-10 cursor-pointer hover:bg-[#F31260]/10 rounded-lg p-4" },
                    react_1["default"].createElement(framer_motion_2.motion.h2, { initial: {
                            opacity: 0
                        }, animate: {
                            opacity: activeCard === index ? 1 : 0.3
                        }, className: " text-2xl font-bold dark:text-slate-100 text-neutral-700" },
                        react_1["default"].createElement("span", { className: "text-xs font-light" },
                            item.year,
                            react_1["default"].createElement("br", null)),
                        item.title,
                        " ",
                        react_1["default"].createElement(cg_1.CgArrowTopRight, { className: "invisible group-hover/experienceCard:visible inline relative bottom-1 transition-all duration-150" })),
                    react_1["default"].createElement(framer_motion_2.motion.p, { initial: {
                            opacity: 0
                        }, animate: {
                            opacity: activeCard === index ? 1 : 0.3
                        }, className: " text-neutral-500 dark:text-slate-400 max-w-sm mt-4 mb-1" },
                        item.content,
                        item.toolsUsed.map(function (tool) {
                            return react_1["default"].createElement(experience_badge_1["default"], __assign({}, tool));
                        })))); }),
                react_1["default"].createElement("div", { className: "h-40" }))),
        react_1["default"].createElement("div", { style: { background: backgroundGradient }, className: cn_1.cn("hidden md:block h-60 w-80 rounded-lg bg-white mr-3 sticky top-10 overflow-hidden", contentClassName) }, (_b = content[activeCard].title) !== null && _b !== void 0 ? _b : null)));
};
