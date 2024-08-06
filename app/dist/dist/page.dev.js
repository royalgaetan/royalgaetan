"use strict";

exports.__esModule = true;

var about_me_1 = require("@/components/sections/about_me");

var contact_1 = require("@/components/sections/contact");

var header_1 = require("@/components/sections/header");

var projects_1 = require("@/components/sections/projects");

var skills_1 = require("@/components/sections/skills");

var experiences_1 = require("@/components/sections/experiences");

function Home() {
  return React.createElement("main", {
    className: "flex flex-col"
  }, React.createElement(header_1["default"], null), React.createElement(about_me_1["default"], null), React.createElement(skills_1["default"], null), React.createElement(projects_1["default"], null), React.createElement(experiences_1["default"], null), React.createElement(contact_1["default"], null));
}

exports["default"] = Home;