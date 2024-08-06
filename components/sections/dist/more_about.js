"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MoreAboutSection = function () {
    return (react_1["default"].createElement("section", { className: "flex min-h-screen w-full bg-slate-50 dark:bg-gray-700  flex-col p-5 justify-center items-center" },
        react_1["default"].createElement("h2", { className: "flex text-4xl w-full justify-center font-bold items-center py-5" }, "More about..."),
        react_1["default"].createElement("div", { className: "flex mb-10 p-10 w-full gap-4 justify-center items-center" },
            react_1["default"].createElement("p", { className: "max-md:hidden flex justify-center w-full" }, "Explanation here"),
            react_1["default"].createElement("div", { className: "w-full" },
                react_1["default"].createElement("div", { className: "flex flex-col mb-10 max-md:items-center" },
                    react_1["default"].createElement("h2", { className: " text-2xl font-bold mb-4" }, "My stack / My Soft Skills"),
                    react_1["default"].createElement("p", null, "Click one of these icons to see more...")),
                react_1["default"].createElement("div", { className: "max-md:justify-center flex justify-start gap-5" },
                    react_1["default"].createElement("p", null, "NextJS"),
                    react_1["default"].createElement("p", null, "Flutter"),
                    react_1["default"].createElement("p", null, "Flask"),
                    react_1["default"].createElement("p", null, "Wordpress"),
                    react_1["default"].createElement("p", null, "PHP")))),
        react_1["default"].createElement("div", { className: "w-full mt-20" },
            react_1["default"].createElement("div", { className: "flex flex-col mb-10 max-md:items-center" },
                react_1["default"].createElement("h2", { className: " text-2xl font-bold mb-4" }, "My experience")),
            react_1["default"].createElement("div", { className: "max-md:justify-center flex justify-start gap-10" },
                react_1["default"].createElement("p", null, "NextJS"),
                react_1["default"].createElement("p", null, "Flutter"),
                react_1["default"].createElement("p", null, "Flask"),
                react_1["default"].createElement("p", null, "Wordpress"),
                react_1["default"].createElement("p", null, "PHP")))));
};
exports["default"] = MoreAboutSection;
