"use strict";
exports.__esModule = true;
var mouse_position_1 = require("@react-hook/mouse-position");
var react_1 = require("react");
var ProjectFeatureButton = function (_a) {
    var featureName = _a.featureName, onMouseMove = _a.onMouseMove, onMouseLeave = _a.onMouseLeave, onMouseEnter = _a.onMouseEnter, onClick = _a.onClick;
    var buttonRef = react_1.useRef(null);
    var mouse = mouse_position_1["default"](buttonRef, {
        enterDelay: 100,
        leaveDelay: 100
    });
    react_1.useEffect(function () {
        if (mouse.x && mouse.y) {
            var x = parseInt(mouse.x.toString());
            var y = parseInt(mouse.y.toString());
            onMouseMove({ x: x, y: y });
        }
    }, [mouse]);
    return (react_1["default"].createElement("div", { ref: buttonRef, onClick: function () { return onClick(featureName); }, onMouseOver: function () { return onMouseEnter(featureName); }, onMouseOut: function () { return onMouseLeave(); }, className: "mb-3 group/button flex flex-1 items-center justify-center w-full" },
        react_1["default"].createElement("div", { className: "rounded-xl text-sm font-normal text-center cursor-pointer w-full px-4 py-2 bg-slate-200 text-slate-600 group-hover/button:hover:bg-slate-300 group-hover/button:font-semibold transition-all duration-300" }, featureName)));
};
exports["default"] = ProjectFeatureButton;
