"use client";
"use strict";
exports.__esModule = true;
exports.useActiveNavBarContext = exports.ActiveNavbarProvider = exports.ActiveNavBarContext = void 0;
var constants_1 = require("@/utils/constants");
var react_1 = require("react");
var activeNavBarDefaultValues = {
    activeNavElement: constants_1.navBarElementsList[0],
    setActiveNavElement: function () { },
    isMobileMenuOpen: false,
    setMobileMenuVisibility: function () { }
};
exports.ActiveNavBarContext = react_1.createContext(activeNavBarDefaultValues);
exports.ActiveNavbarProvider = function (_a) {
    var children = _a.children;
    // Nav Elements: update/check active
    var _b = react_1.useState(constants_1.navBarElementsList[0]), activeNavElement = _b[0], setActiveNavElement = _b[1];
    // Menu: mobile visibility
    var _c = react_1.useState(false), isMobileMenuOpen = _c[0], setMobileMenuVisibility = _c[1];
    react_1.useEffect(function () {
        console.log("From Provider:", activeNavElement);
    }, [activeNavElement]);
    return (react_1["default"].createElement(exports.ActiveNavBarContext.Provider, { value: {
            activeNavElement: activeNavElement,
            setActiveNavElement: setActiveNavElement,
            isMobileMenuOpen: isMobileMenuOpen,
            setMobileMenuVisibility: setMobileMenuVisibility
        } }, children));
};
exports.useActiveNavBarContext = function () {
    var context = react_1.useContext(exports.ActiveNavBarContext);
    if (exports.ActiveNavBarContext === null) {
        throw new Error("useActiveNavBarContext must be used within a ActiveNavbarProvider");
    }
    return context;
};
