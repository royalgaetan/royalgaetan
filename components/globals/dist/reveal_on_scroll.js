"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RevealOnScroll = function (_a) {
    var children = _a.children, animationClassNames = _a.animationClassNames;
    var _b = react_1.useState(false), isVisible = _b[0], setIsVisible = _b[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        var scrollObserver = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });
        scrollObserver.observe(ref.current);
        return function () {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
                setIsVisible(false);
            }
        };
    }, []);
    var _customClassName = "transition-all duration-1000 " + (isVisible ? animationClassNames : "opacity-0");
    return (react_1["default"].createElement("div", { ref: ref, className: _customClassName }, children));
};
exports["default"] = RevealOnScroll;
