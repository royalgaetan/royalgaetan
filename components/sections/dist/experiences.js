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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var constants_1 = require("@/utils/constants");
var react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
require("react-vertical-timeline-component/style.min.css");
var experience_badge_1 = require("../globals/experience_badge");
var next_themes_1 = require("next-themes");
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var bg_wrapper_1 = require("../globals/bg_wrapper");
var in_between_1 = require("./in_between");
var lu_1 = require("react-icons/lu");
var use_active_navbar_1 = require("@/hooks/use_active_navbar");
var downloadCVIconValues;
(function (downloadCVIconValues) {
    downloadCVIconValues[downloadCVIconValues["none"] = 0] = "none";
    downloadCVIconValues[downloadCVIconValues["loading"] = 1] = "loading";
    downloadCVIconValues[downloadCVIconValues["complete"] = 2] = "complete";
})(downloadCVIconValues || (downloadCVIconValues = {}));
var ExperiencesSection = function () {
    var theme = next_themes_1.useTheme().theme;
    var contentRef = use_active_navbar_1.useActiveNavbar({
        elementToActivate: constants_1.navBarElementsList[3]
    });
    var _a = react_1.useState(downloadCVIconValues.none), downlodCVIconType = _a[0], setdownlodCVIconType = _a[1];
    var _b = react_1.useTransition(), isLoading = _b[0], setTransition = _b[1];
    var transitionRef = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
        target: transitionRef,
        offset: ["start start", "end end"]
    }).scrollYProgress;
    var scaleContent = framer_motion_1.useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    var rotateContent = framer_motion_1.useTransform(scrollYProgress, [0, 1], [-1, 0]);
    var handleCVdownload = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setdownlodCVIconType(downloadCVIconValues.loading);
            setTransition(function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 1000); })];
                        case 1:
                            _a.sent();
                            setdownlodCVIconType(downloadCVIconValues.complete);
                            return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 1000); })];
                        case 2:
                            _a.sent();
                            window.open("" + process.env.NEXT_PUBLIC_CV_DOWNLOAD_LINK, "_blank");
                            setdownlodCVIconType(downloadCVIconValues.none);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement("section", { ref: transitionRef, className: "flex flex-col min-h-screen max-w-[100vw] justify-center items-center" },
        react_1["default"].createElement(in_between_1["default"], { iconType: "badge", title: "My experience", overallYprogress: scrollYProgress }),
        react_1["default"].createElement(framer_motion_1.motion.div, { ref: contentRef, id: "experience", className: "w-full", style: { scale: scaleContent, rotate: rotateContent } },
            react_1["default"].createElement(bg_wrapper_1["default"], { customClassName: "relative z-10 max-w-[100vw] min-h-screen flex flex-1 justify-center items-center" },
                react_1["default"].createElement("div", { className: "max-sm:px-5 w-[min(800px,100%)] flex flex-col justify-center items-center" },
                    react_1["default"].createElement(react_vertical_timeline_component_1.VerticalTimeline, { lineColor: theme === "dark" ? "#e5e5e5" : "rgb(229, 229, 229)", animate: false }, constants_1.experiencesList.map(function (experience) {
                        return (react_1["default"].createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { visible: true, className: "p-0", contentStyle: {
                                borderRadius: "0.75rem",
                                // background: theme === "dark" ? "#262626" : "",
                                background: "transparent",
                                border: "2px solid #e5e5e5",
                                boxShadow: "none"
                            }, contentArrowStyle: {
                                borderRight: "7px solid #e5e5e5"
                            }, iconStyle: experience.iconStyle, icon: react_1["default"].createElement(framer_motion_1.motion.div, { initial: { scale: 0.4, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, transition: {
                                    type: "spring",
                                    stiffness: "200",
                                    duration: 0.7,
                                    delay: 0.3
                                }, className: "w-full min-h-full flex items-center justify-center p-1" },
                                react_1["default"].createElement(image_1["default"], { src: experience.logoPath, alt: experience.companyName, width: "40", height: "40" })) },
                            react_1["default"].createElement(framer_motion_1.motion.div, { className: "w-full", initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: {
                                    type: "spring",
                                    stiffness: "200",
                                    duration: 0.7,
                                    delay: 0.3
                                } },
                                react_1["default"].createElement("span", { className: "text-[0.3rem] font-light" },
                                    experience.year,
                                    react_1["default"].createElement("br", null)),
                                react_1["default"].createElement("h3", { className: "text-1xl font-bold dark:text-slate-100 text-neutral-700 mb-0" }, experience.title),
                                react_1["default"].createElement("span", { className: "text-sm font-semibold dark:text-slate-300 text-neutral-500 mb-1" },
                                    "@",
                                    experience.companyName),
                                react_1["default"].createElement("span", { className: "text-neutral-500 dark:text-slate-400 text-[0.7em]" }, experience.content),
                                react_1["default"].createElement("div", { className: "mt-2" }, experience.toolsUsed.map(function (tool) {
                                    return react_1["default"].createElement(experience_badge_1["default"], __assign({ key: tool.title }, tool));
                                })))));
                    })),
                    react_1["default"].createElement("button", { disabled: isLoading, onClick: handleCVdownload, className: "flex flex-1 items-center justify-center hover:scale-105 cursor-pointer transition-all duration-300 text-sm dark:text-neutral-400 text-neutral-500 py-2 w-[200px] bg-white rounded-xl border-2 border-neutral-200 dark:border-2 dark:bg-neutral-900 mb-10" },
                        downlodCVIconType == downloadCVIconValues.loading && (react_1["default"].createElement(lu_1.LuLoader2, { className: "animate-spin" })),
                        downlodCVIconType == downloadCVIconValues.complete && (react_1["default"].createElement(lu_1.LuCheck, { className: "" })),
                        react_1["default"].createElement("span", { className: "ml-1" }, "Download CV")))))));
};
exports["default"] = ExperiencesSection;
