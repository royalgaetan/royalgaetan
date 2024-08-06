"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FullProjectPage = function (_a) {
    var project = _a.project;
    return (react_1["default"].createElement("div", { className: "flex flex-1 max-sm:flex-col-reverse gap-10 justify-start items-start max-w-[min(900px,100%)] h-full md:h-[85vh] px-5" },
        react_1["default"].createElement("div", { className: "flex flex-col justify-start items-start md:w-1/3 max-sm:w-full h-full no-scrollbar overflow-y-scroll text-neutral-700" },
            react_1["default"].createElement("h1", { className: "text-2xl" }, project.projectName)),
        react_1["default"].createElement("div", { className: "flex flex-col justify-start items-start md:w-2/3 h-full no-scrollbar overflow-y-scroll text-neutral-200" })));
};
exports["default"] = FullProjectPage;
