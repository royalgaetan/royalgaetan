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
var cn_1 = require("@/utils/cn");
var image_1 = require("next/image");
var experience_badge_1 = require("../globals/experience_badge");
var cg_1 = require("react-icons/cg");
exports.StickyScroll = function (_a) {
    var content = _a.content, contentClassName = _a.contentClassName;
    var _b = react_1["default"].useState(0), activeCard = _b[0], setActiveCard = _b[1];
    var ref = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
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
        "linear-gradient(to bottom right, var(--neutral-900), var(--zinc-700))",
        "linear-gradient(to bottom right, var(--cyan-600), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--rose-500), var(--orange-300))",
        "linear-gradient(to bottom right, var(--purple-800), var(--indigo-400))",
    ];
    var _c = react_1.useState(linearGradients[0]), backgroundGradient = _c[0], setBackgroundGradient = _c[1];
    react_1.useEffect(function () {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);
    return (react_1["default"].createElement(framer_motion_1.motion.div, { className: "no-scrollbar h-[30rem] w-full overflow-y-auto flex justify-center relative rounded-md py-3 border-2 border-red-300", ref: ref },
        react_1["default"].createElement("div", { className: "div relative flex-col items-start px-4 w-[min(450px,100%)] border-2 border-green-300 " },
            react_1["default"].createElement("div", { className: "" },
                content.map(function (item, index) { return (react_1["default"].createElement("div", { key: item.title + index, className: "group/experienceCard my-10 cursor-pointer hover:bg-[#F31260]/10 rounded-lg p-4" },
                    react_1["default"].createElement(framer_motion_1.motion.h2, { initial: {
                            opacity: 0
                        }, animate: {
                            opacity: activeCard === index ? 1 : 0.3
                        }, className: "w-full" },
                        react_1["default"].createElement("span", { className: "text-[0.3rem] font-light" },
                            item.year,
                            react_1["default"].createElement("br", null)),
                        react_1["default"].createElement("div", { className: "flex gap-1" },
                            react_1["default"].createElement("h2", { className: "text-1xl font-bold dark:text-slate-100 text-neutral-700" },
                                item.title,
                                " "),
                            react_1["default"].createElement(cg_1.CgArrowTopRight, { size: "1.2rem", className: "invisible group-hover/experienceCard:visible inline relative transition-all duration-150" }))),
                    react_1["default"].createElement(framer_motion_1.motion.p, { initial: {
                            opacity: 0
                        }, animate: {
                            opacity: activeCard === index ? 1 : 0.3
                        }, className: " text-neutral-500 dark:text-slate-400 max-w-sm mt-4 mb-1" },
                        item.content,
                        item.toolsUsed.map(function (tool) {
                            return react_1["default"].createElement(experience_badge_1["default"], __assign({ key: tool.title }, tool));
                        })))); }),
                react_1["default"].createElement("div", { className: "h-40" }))),
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, style: { background: backgroundGradient }, className: cn_1.cn("hidden md:block h-60 w-80 rounded-lg ml-3 sticky top-10 overflow-hidden", contentClassName) },
            react_1["default"].createElement("div", { className: "flex h-full w-full justify-center items-center " },
                react_1["default"].createElement(image_1["default"], { src: content[activeCard].logoPath, width: content[activeCard].logoWidth, height: content[activeCard].logoHeight, alt: "{content[activeCard].title} logo" })))));
};
