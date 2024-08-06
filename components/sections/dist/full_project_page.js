"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var project_feature_button_1 = require("../globals/project_feature_button");
var project_feature_preview_1 = require("../globals/project_feature_preview");
var FullProjectPage = function (_a) {
    var project = _a.project;
    var _b = react_1.useState({ x: 0, y: 0 }), mousePosition = _b[0], setmousePosition = _b[1];
    var _c = react_1.useState(project.features[0]), currentFeatureHovered = _c[0], setcurrentFeatureHovered = _c[1];
    function addNewFeature(featureName) {
        var found = project.features.find(function (f) { return f.tabName === featureName; });
        if (found) {
            setcurrentFeatureHovered(found);
        }
    }
    return (react_1["default"].createElement("div", { className: "flex flex-1 max-sm:flex-col-reverse md:gap-5 gap-2 justify-start items-center max-w-[min(1000px,100%)] h-full md:max-h-[85vh] px-5" },
        react_1["default"].createElement("div", { className: "flex flex-col justify-center items-center w-[min(300px,100%)] max-h-full no-scrollbar overflow-y-scroll text-neutral-700" }, project.features.map(function (feature) {
            return (react_1["default"].createElement(project_feature_button_1["default"], { featureName: feature.tabName, onMouseLeave: function () {
                    // Clean current feature hovered
                    // setcurrentFeatureHovered(null);
                }, onMouseEnter: function (featureName) {
                    // Set New feature hovered
                    addNewFeature(featureName);
                }, onClick: function (featureName) {
                    // Set New feature clicked
                    addNewFeature(featureName);
                }, onMouseMove: function (_a) {
                    var x = _a.x, y = _a.y;
                    setmousePosition({ x: x, y: y });
                } }));
        })),
        react_1["default"].createElement("div", { className: "flex justify-center items-center h-full w-full no-scrollbar overflow-y-scrol" },
            react_1["default"].createElement(project_feature_preview_1["default"], { featureHovered: currentFeatureHovered, x: mousePosition.x, y: mousePosition.y }))));
};
exports["default"] = FullProjectPage;
