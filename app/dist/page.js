"use strict";
exports.__esModule = true;
var about_me_1 = require("@/components/sections/about_me");
var contact_1 = require("@/components/sections/contact");
var hero_1 = require("@/components/sections/hero");
var projects_1 = require("@/components/sections/projects");
var skills_1 = require("@/components/sections/skills");
var experiences_1 = require("@/components/sections/experiences");
var footer_1 = require("@/components/sections/footer");
function Home() {
    return (React.createElement("main", { className: "flex flex-col min-h-screen w-full bg-white dark:bg-neutral-950" },
        React.createElement(hero_1["default"], null),
        React.createElement(about_me_1["default"], null),
        React.createElement(skills_1["default"], null),
        React.createElement(projects_1["default"], null),
        React.createElement(experiences_1["default"], null),
        React.createElement(contact_1["default"], null),
        React.createElement(footer_1.FooterSection, null)));
}
exports["default"] = Home;
