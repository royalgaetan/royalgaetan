"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BgWrapper = function (_a) {
    var children = _a.children, customClassName = _a.customClassName, id = _a.id, ref = _a.ref;
    return (react_1["default"].createElement("div", { id: id, ref: ref, className: customClassName + " w-full dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_60%_35%_at_50%_-20%,rgba(100,116,139,0.7),rgba(255,255,255,0))] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:16px_16px] dark:bg-[length:0%_0%]" }, children));
};
exports["default"] = BgWrapper;
