"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var contact_form_1 = require("../forms/contact_form");
var bi_1 = require("react-icons/bi");
var contact_badge_1 = require("../globals/contact_badge");
var framer_motion_1 = require("framer-motion");
var bg_wrapper_1 = require("../globals/bg_wrapper");
var in_between_1 = require("./in_between");
var use_active_navbar_1 = require("@/hooks/use_active_navbar");
var constants_1 = require("@/utils/constants");
var ContactSection = function () {
    var contentRef = use_active_navbar_1.useActiveNavbar({
        elementToActivate: constants_1.navBarElementsList[4]
    });
    var transitionRef = react_1.useRef(null);
    var scrollYProgress = framer_motion_1.useScroll({
        target: transitionRef,
        offset: ["start start", "end end"]
    }).scrollYProgress;
    var scaleContent = framer_motion_1.useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    var rotateContent = framer_motion_1.useTransform(scrollYProgress, [0, 1], [-2, 0]);
    return (react_1["default"].createElement("section", { ref: transitionRef, className: "flex flex-col dark:bg-[#303030] bg-white min-h-screen max-w-[100vw] justify-center items-center" },
        react_1["default"].createElement(in_between_1["default"], { iconType: "chat", title: "Let's talk?", overallYprogress: scrollYProgress }),
        react_1["default"].createElement(framer_motion_1.motion.div, { ref: contentRef, id: "contact", className: "w-full", style: { scale: scaleContent, rotate: rotateContent } },
            react_1["default"].createElement(bg_wrapper_1["default"], { customClassName: "pt-14 relative z-10 max-w-[100vw] min-h-screen flex flex-1 justify-center items-center" },
                react_1["default"].createElement("div", { className: "flex md:gap-14 gap-10 max-sm:flex-col-reverse items-start max-sm:items-center justify-center w-[min(800px,100%)] px-6" },
                    react_1["default"].createElement("div", { className: "flex flex-col gap-3 max-sm:mb-32 w-full" },
                        react_1["default"].createElement("h3", { className: "mb-4 mt-1 text-sm font-semibold" }, "To get in touch with me, you can easily find me here:"),
                        react_1["default"].createElement(contact_badge_1["default"], { title: "Email", link: "mailto:gaetanroyalpro@gmail.com", icon: react_1["default"].createElement("div", null,
                                react_1["default"].createElement(bi_1.BiEnvelope, { color: "#F31260", size: "1.2em" })) }),
                        react_1["default"].createElement(contact_badge_1["default"], { title: "LinkedIn", link: "https://linkedin.com/in/royalg", icon: react_1["default"].createElement("div", null,
                                react_1["default"].createElement(bi_1.BiLogoLinkedin, { color: "#F31260", size: "1.2em" })) }),
                        react_1["default"].createElement(contact_badge_1["default"], { title: "Github", link: "https://github.com/royalgaetan", icon: react_1["default"].createElement("div", null,
                                react_1["default"].createElement(bi_1.BiLogoGithub, { color: "#F31260", size: "1.2em" })) })),
                    react_1["default"].createElement("div", { className: "w-full" },
                        react_1["default"].createElement(contact_form_1["default"], null)))))));
};
exports["default"] = ContactSection;
