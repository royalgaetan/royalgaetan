"use strict";
exports.__esModule = true;
exports.FooterSection = void 0;
var react_1 = require("react");
var fa6_1 = require("react-icons/fa6");
exports.FooterSection = function () {
    return (react_1["default"].createElement("footer", { className: "bg-neutral-900 text-white flex flex-col min-h-[15vh] w-full justify-center items-center" },
        react_1["default"].createElement("p", { className: "text-xs mb-2 block" },
            "Made with ",
            react_1["default"].createElement(fa6_1.FaHeart, { color: "#F31260", className: "inline" })),
        react_1["default"].createElement("p", { className: "block text-xs" },
            "Logos & Icons from",
            " ",
            react_1["default"].createElement("a", { href: "https://icons8.com/icon", target: "_blank", className: "hover:opacity-80 text-slate-300" }, "Icons8"))));
};
