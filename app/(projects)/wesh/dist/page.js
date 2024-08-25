"use strict";
exports.__esModule = true;
var back_button_1 = require("@/components/globals/BackButton");
var bg_wrapper_1 = require("@/components/globals/BgWrapper");
var full_project_page_1 = require("@/components/sections/FullProjectPage");
var constants_1 = require("@/utils/constants");
var react_1 = require("react");
var Wesh = function () {
  return react_1["default"].createElement(
    bg_wrapper_1["default"],
    {
      customClassName:
        "relative z-10 md:min-h-screen min-h-screen flex flex-1 justify-center items-center pt-2 max-sm:pt-[8vh]",
    },
    react_1["default"].createElement(
      "div",
      { className: "h-fit min-w-fit gap-2 z-[99] fixed top-4 left-4" },
      react_1["default"].createElement(back_button_1["default"], {
        link: "/",
        title: "Home",
      })
    ),
    react_1["default"].createElement(full_project_page_1["default"], {
      project: constants_1.weshProject,
    })
  );
};
exports["default"] = Wesh;
