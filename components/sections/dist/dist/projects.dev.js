"use strict";

exports.__esModule = true;

var react_1 = require("react");

var project_card_1 = require("../globals/project_card");

var constants_1 = require("@/utils/constants");

var project_card_2_1 = require("../globals/project_card_2");

var ProjectSections = function ProjectSections() {
  return react_1["default"].createElement("section", {
    id: "project",
    className: "flex flex-col dark:bg-[#303030] bg-white min-h-screen justify-start items-center pb-28"
  }, react_1["default"].createElement("h2", {
    className: "text-center flex flex-4 max-sm:text-2xl text-4xl font-bold items-center mb-7 mt-20"
  }, "Last Projects"), react_1["default"].createElement("div", {
    className: "grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-start mt-7 px-4 sm:w-auto md:w-[800px]"
  }, constants_1.mainProjects.map(function (project) {
    return react_1["default"].createElement(project_card_1["default"], {
      key: project.title,
      title: project.title,
      subTitle: project.subTitle,
      coverPath: project.coverPath,
      toolsUsed: project.toolsUsed
    });
  })), react_1["default"].createElement("h2", {
    className: "text-center flex flex-4 max-sm:text-2xl text-4xl font-bold items-center mb-7 mt-24"
  }, "Other projects worth mentioning"), react_1["default"].createElement("div", {
    className: "grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-start mt-7 px-4 sm:w-auto md:w-[800px]"
  }, constants_1.otherProjects.map(function (project) {
    return react_1["default"].createElement(project_card_2_1["default"], {
      key: project.title,
      title: project.title,
      subTitle: project.subTitle,
      coverPath: project.coverPath,
      toolsUsed: project.toolsUsed
    });
  })));
};

exports["default"] = ProjectSections;