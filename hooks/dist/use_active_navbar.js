"use client";
"use strict";
exports.__esModule = true;
exports.useActiveNavbar = void 0;
var active_bar_provider_1 = require("@/providers/active_bar_provider");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
function useActiveNavbar(_a) {
    var elementToActivate = _a.elementToActivate;
    // Use of Active Navbar Provider
    var _b = active_bar_provider_1.useActiveNavBarContext(), activeNavElement = _b.activeNavElement, setActiveNavElement = _b.setActiveNavElement;
    // Track if content is in view
    var contentRef = react_1.useRef(null);
    var isVisible = framer_motion_1.useInView(contentRef, { margin: "-50%" });
    react_1.useEffect(function () {
        // Update ActiveNavBarProvide
        if (isVisible) {
            setActiveNavElement(elementToActivate);
            console.log(activeNavElement);
        }
    }, [isVisible]);
    return contentRef;
}
exports.useActiveNavbar = useActiveNavbar;
