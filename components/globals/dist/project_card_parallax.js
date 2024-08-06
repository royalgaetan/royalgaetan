"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var ProjectCardParallax = function () {
    return (react_1["default"].createElement("div", { className: "no-scrollbar flex flex-col gap-4 items-start overflow-y-auto justify-center w-[min(900px,100%)] h-screen max-sm:px-8 border-2 border-red-400" }, Array.from([1, 2, 3, 4]).map(function (item) {
        return (react_1["default"].createElement("div", { className: "flex flex-1 h-screen w-full border-2 border-purple-400" },
            react_1["default"].createElement("div", { className: " w-1/2 h-screen relative bg-emerald-800" },
                react_1["default"].createElement(image_1["default"], { src: "/assets/soul train mockup.png", alt: "" + item, fill: true, className: "object-cover" })),
            react_1["default"].createElement("div", null, item)));
    })));
};
exports["default"] = ProjectCardParallax;
