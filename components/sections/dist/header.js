"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var HeaderSection = function () {
    return (react_1["default"].createElement("section", { id: "header", className: "flex flex-col min-h-screen w-full items-center justify-center text-center px-5" },
        react_1["default"].createElement("h1", { className: "dark:text-white text-slate-900 font-medium text-4xl mb-8 max-sm:mb-5 leading-tight tracking-tight" }, "Quality Apps for Meaningful Impact"),
        react_1["default"].createElement("h2", { className: "dark:text-gray-400 text-gray-600 text-lg max-sm:text-sm leading-relaxed tracking-wide w-[min(800px,100%)] max-sm:px-5" },
            "I believe that great products, great people, and great teams improve our society.",
            react_1["default"].createElement("br", null),
            "So I aim to create apps that bring people together and improve lives."),
        react_1["default"].createElement(link_1["default"], { href: "#aboutme", className: "flex flex-col justify-center items-center mt-10 cursor-pointer" },
            react_1["default"].createElement("p", { className: "text-sm dark:text-slate-300 text-[#F31260] font-bold animate-pulse mb-4" }, "See how"))));
};
exports["default"] = HeaderSection;
