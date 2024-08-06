"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var next_themes_1 = require("next-themes");
var fonts_1 = require("@/utils/fonts");
var toaster_1 = require("@/components/ui/toaster");
var navbar_1 = require("@/components/sections/navbar");
var active_bar_provider_1 = require("@/providers/active_bar_provider");
var mobile_menu_wrapper_1 = require("@/components/globals/mobile_menu_wrapper");
var nextjs_toploader_1 = require("nextjs-toploader");
exports.metadata = {
    title: "Portfolio - Royal G",
    description: "Royal GAETAN - Updates, Blog, Projects, etc...",
    icons: {
        icon: "../public/favicon.ico"
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: "scroll-smooth" },
        React.createElement(next_themes_1.ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true },
            React.createElement(active_bar_provider_1.ActiveNavbarProvider, null,
                React.createElement(navbar_1["default"], null),
                React.createElement(mobile_menu_wrapper_1["default"], null,
                    React.createElement(nextjs_toploader_1["default"], { color: "#F31260", showSpinner: false }),
                    React.createElement("body", { className: fonts_1.openSans.className },
                        children,
                        React.createElement(toaster_1.Toaster, null)))))));
}
exports["default"] = RootLayout;
